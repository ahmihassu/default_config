SELECT 
COUNT(DISTINCT person.person_id) AS "Number of emergency patients readmitted to facility within 30 days previous discharge for the same case Diagnosis"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 
JOIN visit ON encounter.visit_id = visit.visit_id
JOIN location ON location.location_id = encounter.location_id
AND (location.name LIKE "Gyn-Obs Emergency" OR location.name LIKE "Gyn-Obs Emergency" OR location.name LIKE "Pediatrics Emergency")
WHERE (location.retired=0 OR location.retired=0 OR location.retired=0 AND within 30 days of discharge from any IPD unit AND diagnosis at ER is same as diagnosis at IPD unit)
