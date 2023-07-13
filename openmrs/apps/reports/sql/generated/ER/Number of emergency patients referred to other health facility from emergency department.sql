SELECT 
COUNT(DISTINCT person.person_id) AS "Number of emergency patients referred to other health facility from emergency department"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 
JOIN visit ON encounter.visit_id = visit.visit_id
JOIN location ON location.location_id = encounter.location_id
AND (location.name LIKE "Adult ER" OR location.name LIKE "Gynecology Emergency" OR location.name LIKE "Pediatrics Emergency")
LEFT JOIN obs form_under_obs0 ON encounter.encounter_id = form_under_obs0.encounter_id
                        AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Referral Form")
WHERE (( location.retired=0 OR location.retired=0 OR location.retired=0) AND form_under_obs0.obs_id IS NOT NULL)
