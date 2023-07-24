SELECT 
COUNT(DISTINCT person.person_id) AS "Sum total of elective surgical procedure cancelled"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 

LEFT JOIN obs form_under_obs0 ON encounter.encounter_id = form_under_obs0.encounter_id
                        AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Operative Notes")
WHERE (surgeries scheduled on OT AND form_under_obs0.obs_id IS NOT NULL NOT filled on the scheduled day)
