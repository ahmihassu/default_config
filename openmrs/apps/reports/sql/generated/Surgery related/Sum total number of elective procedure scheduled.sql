SELECT 
COUNT(DISTINCT person.person_id) AS "Sum total number of elective procedure scheduled"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 

JOIN obs form_under_obs0 ON encounter.encounter_id = form_under_obs0.encounter_id
                    AND form_under_obs0.value_coded IN (SELECT concept_id from concept_name cn WHERE cn.concept_name_type = "FULLY_SPECIFIED" AND cn.name LIKE "Elective")
                    AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE  "Type of Surgery")
JOIN surgical_appointment sa ON sa.patient_id = encounter.patient_id AND sa.status = "SCHEDULED"