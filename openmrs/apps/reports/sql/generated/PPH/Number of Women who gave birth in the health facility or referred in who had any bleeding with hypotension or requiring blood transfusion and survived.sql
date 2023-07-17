SELECT 
COUNT(DISTINCT person.person_id) AS "Number of Women who gave birth in the health facility or referred in who had any bleeding with hypotension or requiring blood transfusion and survived"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 

LEFT JOIN obs diagnosis0 ON encounter.encounter_id = diagnosis0.encounter_id
                    AND diagnosis0.value_coded IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "PPH")
WHERE (diagnosis0.obs_id IS NOT NULL)
