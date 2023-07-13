SELECT 
COUNT(DISTINCT person.person_id) AS "Number of surgical cases with anesthetic adverse outcome (high spinal anesthesia, failed intubation, cardio-respiratory arrest) during reporting period"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 

LEFT JOIN obs form_under_obs0 ON encounter.encounter_id = form_under_obs0.encounter_id
                        AND form_under_obs0.value_coded IN (SELECT concept_id from concept_name cn WHERE cn.concept_name_type = "FULLY_SPECIFIED" AND cn.name LIKE "cardio-respiratory arrest")
                        AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE  "Anesthetic adverse outcome")
LEFT JOIN obs form_under_obs1 ON encounter.encounter_id = form_under_obs1.encounter_id
                        AND form_under_obs1.value_coded IN (SELECT concept_id from concept_name cn WHERE cn.concept_name_type = "FULLY_SPECIFIED" AND cn.name LIKE "high spinal anesthesia")
                        AND form_under_obs1.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE  "Anesthetic adverse outcome")
LEFT JOIN obs form_under_obs2 ON encounter.encounter_id = form_under_obs2.encounter_id
                        AND form_under_obs2.value_coded IN (SELECT concept_id from concept_name cn WHERE cn.concept_name_type = "FULLY_SPECIFIED" AND cn.name LIKE "failed intubation")
                        AND form_under_obs2.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE  "Anesthetic adverse outcome")
WHERE (form_under_obs0.obs_id IS NOT NULL OR form_under_obs1.obs_id IS NOT NULL OR form_under_obs2.obs_id IS NOT NULL )
