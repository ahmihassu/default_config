SELECT 
COUNT(DISTINCT person.person_id) AS "Number of surgical patient charts in which the WHO Surgical Safety Checklist was completed per chart"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#'
JOIN obs form_under_obs0 ON encounter.encounter_id = form_under_obs0.encounter_id
        AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "WHO Surgical Safety Checklist") 
JOIN visit ON encounter.visit_id = visit.visit_id
JOIN visit_type ON visit.visit_type_id = visit_type.visit_type_id AND visit_type.name = "IPD"