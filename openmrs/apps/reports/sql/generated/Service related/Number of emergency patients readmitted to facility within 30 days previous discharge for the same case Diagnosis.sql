SELECT 
COUNT(DISTINCT person.person_id) AS "Number of emergency patients readmitted to facility within 30 days previous discharge for the same case Diagnosis"
FROM person
JOIN visit v ON person.person_id = v.patient_id AND date(v.date_started) between '#startDate#' and '#endDate#'
JOIN visit v2 ON person.person_id = v2.patient_id AND v.visit_id != v2.visit_id AND TIMESTAMPDIFF(DAY, v2.date_stopped, v.date_started) between 0 and 30
JOIN visit_type ON v2.visit_type_id = visit_type.visit_type_id AND visit_type.name = "IPD"
JOIN visit_type visit_type2 ON v.visit_type_id = visit_type2.visit_type_id AND (visit_type2.name = "Gyn-Obs Emergency" OR visit_type2.name = "Pediatrics Emergency" OR visit_type2.name = "Adult ER") 
JOIN obs diagnosis0 ON person.person_id = diagnosis0.person_id AND diagnosis0.date_created between v.date_created and if(v.date_stopped, v.date_stopped, current_timestamp()) 
JOIN obs diagnosis1 ON person.person_id = diagnosis1.person_id AND diagnosis1.date_created between v2.date_created and if(v2.date_stopped, v2.date_stopped, current_timestamp()) AND diagnosis0.value_coded = diagnosis1.value_coded  
