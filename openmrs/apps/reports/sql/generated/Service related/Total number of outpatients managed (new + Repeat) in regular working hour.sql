SELECT 
COUNT(DISTINCT person.person_id) AS "Total number of outpatients managed (new + Repeat) in regular working hour"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 

JOIN obs form_under_obs2 ON encounter.encounter_id = form_under_obs2.encounter_id
                    AND form_under_obs2.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Psychiatry History" OR name LIKE "History and Physical Examination" OR name LIKE "Ophthalmology history and Physical Examination")
WHERE TIME(form_under_obs2.date_created) BETWEEN '08:30:00' AND '12:00:00' OR TIME(form_under_obs2.date_created) BETWEEN '13:30:00' AND '17:00:00'