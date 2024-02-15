SELECT
    bedParentLoc.name as "IPD Location",
    concat(pn.given_name, ' ', ifnull(pn.middle_name, ''), ' ', ifnull(pn.family_name, ''), ' (', pi.identifier, ')') as "MRN",
    TIMESTAMPDIFF(YEAR, p.birthdate, CURDATE()) as "Age",
    p.gender as "Sex",
    MAX(CASE
        WHEN form_under_obs0.obs_id IS NOT NULL THEN 'Yes'
        ELSE ''
    END) as "History and Physical Examination",
    MAX(CASE
        WHEN form_under_obs1.obs_id IS NOT NULL THEN 'Yes' 
        ELSE ''
    END) as "Vital sign",
    MAX(CASE
        WHEN form_under_obs2.obs_id IS NOT NULL THEN 'Yes'
        ELSE ''
    END) as "Order sheet",
    MAX(CASE
        WHEN form_under_obs3.obs_id IS NOT NULL THEN 'Yes' 
        ELSE ''
    END) as "PS Progress/Follow-up Sheet",
    MAX(CASE
        WHEN form_under_obs4.obs_id IS NOT NULL THEN 'Yes'
        ELSE ''
    END) as "Medication Administration Sheet",
    MAX(CASE
        WHEN form_under_obs5.obs_id IS NOT NULL THEN 'Yes' 
        ELSE ''
    END) as "Psychiatry History",
    MAX(CASE
        WHEN form_under_obs6.obs_id IS NOT NULL THEN 'Yes'
        ELSE ''
    END) as "Psychiatry Follow-up form",
    MAX(CASE
        WHEN form_under_obs7.obs_id IS NOT NULL THEN 'Yes' 
        ELSE ''
    END) as "Medication Reconciliation Form",
    MAX(CASE
        WHEN form_under_obs8.obs_id IS NOT NULL THEN 'Yes'
        ELSE ''
    END) as "In-patient Medication Profile Form",
    MAX(CASE
        WHEN form_under_obs9.obs_id IS NOT NULL THEN 'Yes' 
        ELSE ''
    END) as "Nursing/ Midwife Comprehensive Client Assessment Format Section 5",
    MAX(CASE
        WHEN form_under_obs10.obs_id IS NOT NULL THEN 'Yes' 
        ELSE ''
    END) as "Discharge Summary"  
FROM person p
JOIN encounter en on p.person_id = en.patient_id AND v.visit_id = en.visit_id and encounter_type = 1 AND date(en.date_created) between '#startDate#' and '#endDate#'
JOIN visit v on p.person_id = v.patient_id
JOIN visit_attribute va ON v.visit_id = va.visit_id AND va.value_reference = "IPD"
join bed_patient_assignment_map bpam on bpam.patient_id = v.patient_id and bpam.date_stopped IS NULL
join bed_location_map blm on bpam.bed_id = blm.bed_id
join location bedLoc on blm.location_id = bedLoc.location_id
join location bedParentLoc on bedLoc.parent_location = bedParentLoc.location_id
JOIN person_name pn on v.patient_id = pn.person_id and pn.voided = 0
JOIN patient_identifier pi on v.patient_id = pi.patient_id
LEFT JOIN obs form_under_obs0 ON en.encounter_id = form_under_obs0.encounter_id
AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "History and Physical Examination")

LEFT JOIN obs form_under_obs1 ON en.encounter_id = form_under_obs1.encounter_id
AND form_under_obs1.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Vitals")

LEFT JOIN obs form_under_obs2 ON en.encounter_id = form_under_obs2.encounter_id
AND form_under_obs2.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Order sheet")

LEFT JOIN obs form_under_obs3 ON en.encounter_id = form_under_obs3.encounter_id
AND form_under_obs3.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "PS Progress/Follow-up Sheet")

LEFT JOIN obs form_under_obs4 ON en.encounter_id = form_under_obs4.encounter_id
AND form_under_obs4.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Medication Administration Sheet")

LEFT JOIN obs form_under_obs5 ON en.encounter_id = form_under_obs5.encounter_id
AND form_under_obs5.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Psychiatry History")

LEFT JOIN obs form_under_obs6 ON en.encounter_id = form_under_obs6.encounter_id
AND form_under_obs6.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Psychiatry Follow-up form")

LEFT JOIN obs form_under_obs7 ON en.encounter_id = form_under_obs7.encounter_id
AND form_under_obs7.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Medication Reconciliation Form")

LEFT JOIN obs form_under_obs8 ON en.encounter_id = form_under_obs8.encounter_id
AND form_under_obs8.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "In-patient Medication Profile Form")

LEFT JOIN obs form_under_obs9 ON en.encounter_id = form_under_obs9.encounter_id
AND form_under_obs9.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Nursing/ Midwife Comprehensive Client Assessment Format; Section 5")

LEFT JOIN obs form_under_obs10 ON en.encounter_id = form_under_obs10.encounter_id
AND form_under_obs10.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Discharge Summary")
WHERE en.encounter_type IN (1)
AND (form_under_obs10.obs_id IS NOT NULL or form_under_obs9.obs_id IS NOT NULL or form_under_obs8.obs_id IS NOT NULL 
or form_under_obs7.obs_id IS NOT NULL or form_under_obs6.obs_id IS NOT NULL or form_under_obs5.obs_id IS NOT NULL
or form_under_obs4.obs_id IS NOT NULL or form_under_obs3.obs_id IS NOT NULL or form_under_obs2.obs_id IS NOT NULL 
or form_under_obs1.obs_id IS NOT NULL or form_under_obs0.obs_id IS NOT NULL)
GROUP BY bedParentLoc.name, "MRN"