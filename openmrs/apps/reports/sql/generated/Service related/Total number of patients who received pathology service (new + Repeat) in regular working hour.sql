SELECT 
COUNT(DISTINCT person.person_id) AS "Total number of patients who received pathology service (new + Repeat) in regular working hour"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 

JOIN obs form_under_obs0 ON encounter.encounter_id = form_under_obs0.encounter_id
                        AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "FNAC REPORT")
WHERE TIME(form_under_obs0.date_created) BETWEEN '05:00:00' AND '09:00:00' AND TIME(form_under_obs0.date_created) BETWEEN '10:30:00' AND '14:00:00'