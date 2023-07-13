SELECT 
COUNT(DISTINCT person.person_id) AS "Number of outpatients not seen on same day as registration in OPD"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 

JOIN obs form_under_obs0 ON encounter.encounter_id = form_under_obs0.encounter_id
                    AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Central Triage Form")
JOIN obs form_under_obs2 ON encounter.encounter_id = form_under_obs2.encounter_id
                    AND form_under_obs2.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Psychiatry History" OR name LIKE "History and Physical Examination" OR name LIKE "Ophthalmology history and Physical Examination")
WHERE TIMESTAMPDIFF(DAY, form_under_obs0.date_created, form_under_obs2.date_created) != 0
