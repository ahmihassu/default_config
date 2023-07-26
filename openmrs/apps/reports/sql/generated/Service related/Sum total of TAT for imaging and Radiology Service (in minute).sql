SELECT 
SUM(TIMESTAMPDIFF(MINUTE, orders.date_created, obs.date_created)) AS "Sum total of TAT for imaging and Radiology Service (in minute)"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 
JOIN orders ON orders.encounter_id = encounter.encounter_id
JOIN order_type ON order_type.order_type_id = orders.order_type_id AND order_type.name = "Radiology Order"
JOIN obs ON obs.order_id = orders.order_id
