SELECT 
AVG(TIMESTAMPDIFF(MINUTE, form_under_obs0.date_created, form_under_obs2.date_created)) AS "Sum total of outpatient waiting time (in minutes)"
FROM person
JOIN visit v ON person.person_id = v.patient_id AND date(v.date_started) between '#startDate#' and '#endDate#'
JOIN obs form_under_obs0 ON person.person_id = form_under_obs0.person_id AND form_under_obs0.date_created between v.date_created and if(v.date_stopped, v.date_stopped, current_timestamp()) 
                    AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Central Triage Form")
JOIN obs form_under_obs2 ON person.person_id = form_under_obs2.person_id AND form_under_obs2.date_created between v.date_created and if(v.date_stopped, v.date_stopped, current_timestamp())
                    AND form_under_obs2.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Psychiatry History" OR name LIKE "History and Physical Examination" OR name LIKE "Ophthalmology history and Physical Examination")
