SELECT 
COUNT(DISTINCT person.person_id) AS "Total number of Clients who get physiotherapy Service"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 
JOIN visit ON encounter.visit_id = visit.visit_id
JOIN location ON location.location_id = encounter.location_id
AND (location.name LIKE "Physiotherapy Unit")
WHERE (location.retired=0)
