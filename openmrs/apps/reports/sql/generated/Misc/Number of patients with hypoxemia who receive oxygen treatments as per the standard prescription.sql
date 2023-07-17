SELECT 
COUNT(DISTINCT person.person_id) AS "Number of patients with hypoxemia who receive oxygen treatments as per the standard prescription"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 

LEFT JOIN obs form_under_obs0 ON encounter.encounter_id = form_under_obs0.encounter_id
                                        AND form_under_obs0.value_numeric < 90
                                        AND form_under_obs0.obs_group_id IN (SELECT obs.obs_id from obs JOIN concept_name cn ON obs.concept_id = cn.concept_id WHERE concept_name_type = "FULLY_SPECIFIED" AND cn.name LIKE "Vitals")
                                        AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE  "SPO2 Data")
                                        
LEFT JOIN obs form_under_obs1 ON encounter.encounter_id = form_under_obs1.encounter_id
                        AND form_under_obs1.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Oxygen cylinder large")
LEFT JOIN obs form_under_obs2 ON encounter.encounter_id = form_under_obs2.encounter_id
                        AND form_under_obs2.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Oxygen cylinder small")
WHERE (form_under_obs0.obs_id IS NOT NULL AND (form_under_obs1.obs_id IS NOT NULL OR form_under_obs2.obs_id IS NOT NULL))
