SELECT 
COUNT(DISTINCT person.person_id) AS "Number of patients with hypoxemia who receive oxygen treatments as per the standard prescription"
FROM person
JOIN visit v ON person.person_id = v.patient_id AND date(v.date_started) between '#startDate#' and '#endDate#'
JOIN obs form_under_obs0 ON person.person_id = form_under_obs0.person_id AND form_under_obs0.date_created between v.date_created and if(v.date_stopped, v.date_stopped, current_timestamp()) 
                                        AND form_under_obs0.value_numeric < 90
                                        AND form_under_obs0.obs_group_id IN (SELECT obs.obs_id from obs JOIN concept_name cn ON obs.concept_id = cn.concept_id WHERE concept_name_type = "FULLY_SPECIFIED" AND cn.name LIKE "SPO2 Data")
                                        AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE  "SPO2 Numeric")

JOIN obs form_under_obs3 ON person.person_id = form_under_obs3.person_id AND form_under_obs3.date_created between v.date_created and if(v.date_stopped, v.date_stopped, current_timestamp())
                                        AND form_under_obs3.obs_group_id IN (SELECT obs.obs_id from obs JOIN concept_name cn ON obs.concept_id = cn.concept_id WHERE concept_name_type = "FULLY_SPECIFIED" AND cn.name LIKE "Vitals")
                                        AND form_under_obs3.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE  "SPO2 Data")
                                        
JOIN orders form_under_obs1 ON person.person_id = form_under_obs1.patient_id AND form_under_obs1.date_created between v.date_created and if(v.date_stopped, v.date_stopped, current_timestamp())
                        AND form_under_obs1.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND (name LIKE "Oxygen cylinder large" OR name LIKE "Oxygen cylinder small"))
