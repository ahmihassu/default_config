SELECT
      loc.name                                                                   AS "Location",
      visit_attribute.date_created                                               AS "Date of Admission",
      vt.name                                                                    AS "Visit Type",
      pi.identifier                                                              AS "Patient ID",
      CONCAT(pn.given_name, " ", ifnull(pn.family_name,""))                      AS "Patient Name",
      p.gender                                                                   AS "Gender",
      TIMESTAMPDIFF(YEAR, p.birthdate, CURRENT_DATE)                             AS "Age",
      (select value from person_attribute where person_attribute_type_id = (select person_attribute_type_id from person_attribute_type where name = 'education')) as 'education',
      pa.address1,
      pa.city_village,
      GROUP_CONCAT(DISTINCT (diagnoses.diagnosis_name) SEPARATOR '|')            AS "Diagnosis",
      visit_attribute.date_changed                                               AS "Date of Discharge",
      (select value_numeric from obs where concept_id =  
      (select concept_id from concept_name where name = 'height' and concept_name_type = 'fully_specified')and person_id = p.person_id) as 'Height',
      (select value_numeric from obs where concept_id =  
      (select concept_id from concept_name where name = 'weight' and concept_name_type = 'fully_specified')and person_id = p.person_id) as 'Weight'
    FROM visit_attribute
    INNER JOIN visit_attribute_type vat
      ON vat.visit_attribute_type_id = visit_attribute.attribute_type_id
      AND vat.name = "Admission Status"
    INNER JOIN visit v
      ON v.visit_id = visit_attribute.visit_id
    INNER JOIN visit_type vt on v.visit_type_id = vt.visit_type_id
    INNER JOIN patient_identifier pi ON pi.patient_id = v.patient_id AND pi.preferred = 1
    INNER JOIN person p ON p.person_id = v.patient_id
    INNER JOIN person_name pn ON pn.person_id = v.patient_id
    LEFT JOIN person_address pa ON pa.person_id = v.patient_id
    INNER JOIN encounter e ON e.visit_id = v.visit_id
    LEFT JOIN bed_patient_assignment_map bpam ON bpam.encounter_id = e.encounter_id
    LEFT JOIN bed_location_map blm ON blm.bed_id = bpam.bed_id
    LEFT JOIN location loc ON loc.location_id = (SELECT parent_location FROM location WHERE location_id = blm.location_id)
    LEFT JOIN person_attribute on person_attribute.person_id = p.person_id
    LEFT JOIN (SELECT
                 COALESCE(coded_diagnosis_concept_name.name, diagnosis_obs.value_text)       diagnosis_name,
                 diagnosis_status_obs.value_coded  diagnosis_status,
                 diagnosis_obs.encounter_id     encounter_id
               FROM obs revised_obs
               JOIN concept_name revised_concept
                 ON revised_obs.concept_id = revised_concept.concept_id
                    AND revised_concept.concept_name_type = "FULLY_SPECIFIED"
                    AND revised_concept.name = "Bahmni Diagnosis Revised"
                    AND revised_obs.voided IS FALSE
                    AND revised_concept.voided IS FALSE
               LEFT JOIN concept_name revised_concept_short_name ON revised_obs.concept_id = revised_concept_short_name.concept_id
                                                         AND revised_concept_short_name.concept_name_type = "SHORT" AND
                                                         revised_concept_short_name.voided IS FALSE
               JOIN obs diagnosis_obs
                 ON revised_obs.obs_group_id = diagnosis_obs.obs_group_id
               JOIN concept_name coded_diagnosis_concept
                 ON diagnosis_obs.concept_id = coded_diagnosis_concept.concept_id
                    AND coded_diagnosis_concept.name in ("Coded Diagnosis", "Non-coded Diagnosis")
                    AND coded_diagnosis_concept.concept_name_type = "FULLY_SPECIFIED"
                    AND coded_diagnosis_concept.voided IS FALSE
               LEFT JOIN concept_name coded_diagnosis_concept_name
                 ON diagnosis_obs.value_coded = coded_diagnosis_concept_name.concept_id
                    AND coded_diagnosis_concept_name.concept_name_type = "FULLY_SPECIFIED"
                    AND coded_diagnosis_concept_name.voided IS FALSE
               JOIN concept_name diagnosis_status_concept
                 ON  diagnosis_status_concept.concept_name_type = "FULLY_SPECIFIED"
                    AND diagnosis_status_concept.name = "Bahmni Diagnosis Status"
                    AND diagnosis_status_concept.voided IS FALSE
               LEFT JOIN obs diagnosis_status_obs
                 ON revised_obs.obs_group_id = diagnosis_status_obs.obs_group_id
                AND diagnosis_status_obs.concept_id = diagnosis_status_concept.concept_id
                AND diagnosis_status_obs.voided IS FALSE
               JOIN obs diagnosis_certainty_obs
                 ON revised_obs.obs_group_id = diagnosis_certainty_obs.obs_group_id
               JOIN concept_name diagnosis_certainty_concept
                 ON diagnosis_certainty_obs.concept_id = diagnosis_certainty_concept.concept_id
                    AND diagnosis_certainty_concept.concept_name_type = "FULLY_SPECIFIED"
                    AND diagnosis_certainty_concept.name = "Diagnosis Certainty"
                    AND diagnosis_certainty_obs.voided IS FALSE
                    AND diagnosis_certainty_concept.voided IS FALSE
               JOIN concept_name confirmed_concept
                 ON diagnosis_certainty_obs.value_coded = confirmed_concept.concept_id
                    AND confirmed_concept.concept_name_type = "FULLY_SPECIFIED"
                    AND confirmed_concept.name = "Confirmed"
                    AND confirmed_concept.voided IS FALSE
              ) diagnoses
        ON e.encounter_id = diagnoses.encounter_id AND diagnoses.diagnosis_status IS NULL
        LEFT JOIN obs on e.encounter_id = obs.encounter_id
        LEFT JOIN concept_name as obsConcept on obs.concept_id = obsConcept.concept_id and obsConcept.concept_name_type = "FULLY_SPECIFIED" and obs.voided=0
        LEFT JOIN concept_name as coded_value on obs.value_coded = coded_value.concept_id and coded_value.concept_name_type = "SHORT"
  WHERE CAST(v.date_created AS DATE) BETWEEN '#startDate#' AND '#endDate#'
  GROUP BY pi.identifier