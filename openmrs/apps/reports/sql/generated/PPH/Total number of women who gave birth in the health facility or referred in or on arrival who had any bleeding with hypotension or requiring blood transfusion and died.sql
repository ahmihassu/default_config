SELECT 
COUNT(DISTINCT person.person_id) AS "Total number of women who gave birth in the health facility or referred in or on arrival who had any bleeding with hypotension or requiring blood transfusion and died"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 

LEFT JOIN obs diagnosis0 ON encounter.encounter_id = diagnosis0.encounter_id
                    AND diagnosis0.value_coded IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "PPH")
LEFT JOIN obs form_under_obs1 ON encounter.encounter_id = form_under_obs1.encounter_id
                        AND form_under_obs1.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Death notification")
WHERE (diagnosis0.obs_id IS NOT NULL AND form_under_obs1.obs_id IS NOT NULL)
