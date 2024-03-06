SELECT 
COUNT(DISTINCT person.person_id) AS "Total number of Clients who get physiotherapy Service"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 
JOIN visit ON encounter.visit_id = visit.visit_id and person.person_id = visit.patient_id
JOIN visit_type vt ON visit.visit_type_id = vt.visit_type_id AND (vt.name LIKE "Physiotherapy  Unit")
WHERE (vt.retired=0)
