SELECT 
COUNT(DISTINCT person.person_id) AS "Number of major surgeries(both elective & Non-elective)",
(SELECT name FROM concept_name WHERE concept_id = form_under_obs1.value_coded AND concept_name_type = "FULLY_SPECIFIED") AS "Department"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 

LEFT JOIN obs form_under_obs0 ON encounter.encounter_id = form_under_obs0.encounter_id
                        AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND (name LIKE "Operative Notes") or (name LIKE "Operation Note"))
LEFT JOIN obs form_under_obs1 ON encounter.encounter_id = form_under_obs1.encounter_id
                        AND form_under_obs1.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Department, operative notes")
WHERE (form_under_obs0.obs_id IS NOT NULL)
GROUP BY form_under_obs1.value_coded
