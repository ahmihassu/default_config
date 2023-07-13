SELECT 
COUNT(DISTINCT person.person_id) AS "Total number of patient visited(new + repeat)in emergency service"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 
JOIN visit ON encounter.visit_id = visit.visit_id
JOIN location ON location.location_id = encounter.location_id
AND (location.name LIKE "Adult ER" OR location.name LIKE "Gynecology Emergency" OR location.name LIKE "Pediatrics Emergency")
WHERE ( location.retired=0 OR location.retired=0 OR location.retired=0)
