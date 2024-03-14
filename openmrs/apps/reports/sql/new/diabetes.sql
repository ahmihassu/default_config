SELECT
COUNT(DISTINCT CASE WHEN person.gender = "F" THEN person.person_id END) AS "FEMALE",
COUNT(DISTINCT CASE WHEN person.gender = "M" THEN person.person_id END) AS "MALE", 
COUNT(DISTINCT person.person_id) AS "Total"
FROM person
JOIN visit v ON v.patient_id = person.person_id
JOIN encounter ON encounter.visit_id = v.visit_id
JOIN obs ON encounter.encounter_id = obs.encounter_id AND obs.voided = 0 AND date(obs.date_created) between '#startDate#' and '#endDate#' AND
obs.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name IN ("FBS Result", "RBS Or HbA1c Result"))