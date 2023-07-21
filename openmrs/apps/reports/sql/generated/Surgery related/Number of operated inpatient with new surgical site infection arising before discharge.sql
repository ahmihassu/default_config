SELECT 
COUNT(DISTINCT person.person_id) AS "Number of operated inpatient with new surgical site infection arising before discharge"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 
JOIN visit ON encounter.visit_id = visit.visit_id
JOIN visit_type ON visit.visit_type_id = visit_type.visit_type_id AND visit_type.name = "IPD"
LEFT JOIN obs form_under_obs0 ON encounter.encounter_id = form_under_obs0.encounter_id
                        AND form_under_obs0.value_coded IN (SELECT concept_id from concept_name cn WHERE cn.concept_name_type = "FULLY_SPECIFIED" AND cn.name LIKE "True")
                        AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE  "Did the patient develop a new surgical site infection?")
LEFT JOIN obs form_under_obs1 ON encounter.encounter_id = form_under_obs1.encounter_id
                        AND form_under_obs1.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Operative Notes")
WHERE (form_under_obs1.obs_id IS NOT NULL AND location.retired=0 AND form_under_obs0.obs_id IS NOT NULL)
