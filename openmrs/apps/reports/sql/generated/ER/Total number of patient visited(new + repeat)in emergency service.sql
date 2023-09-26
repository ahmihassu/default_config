SELECT
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 0 and 5 AND person.gender = 'M' AND visit2.visit_id IS NULL THEN person.person_id END) AS "0-5 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 0 and 5 AND person.gender = 'F' AND visit2.visit_id IS NULL THEN person.person_id END) AS "0-5 Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 6 and 10 AND person.gender = 'M' AND visit2.visit_id IS NULL THEN person.person_id END) AS "6-10 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 6 and 10 AND person.gender = 'F' AND visit2.visit_id IS NULL THEN person.person_id END) AS "6-10 Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 11 and 19 AND person.gender = 'M' AND visit2.visit_id IS NULL THEN person.person_id END) AS "11-19 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 11 and 19 AND person.gender = 'F' AND visit2.visit_id IS NULL THEN person.person_id END) AS "11-19 Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 20 and 29 AND person.gender = 'M' AND visit2.visit_id IS NULL THEN person.person_id END) AS "20-29 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 20 and 29 AND person.gender = 'F' AND visit2.visit_id IS NULL THEN person.person_id END) AS "20-29 Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 30 and 45 AND person.gender = 'M' AND visit2.visit_id IS NULL THEN person.person_id END) AS "30-45 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 30 and 45 AND person.gender = 'F' AND visit2.visit_id IS NULL THEN person.person_id END) AS "30-45 Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 46 and 65 AND person.gender = 'M' AND visit2.visit_id IS NULL THEN person.person_id END) AS "46-65 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 46 and 65 AND person.gender = 'F' AND visit2.visit_id IS NULL THEN person.person_id END) AS "46-65 Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) > 65 AND person.gender = 'M' AND visit2.visit_id IS NULL THEN person.person_id END) AS "> 65 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) > 65 AND person.gender = 'F' AND visit2.visit_id IS NULL THEN person.person_id END) AS "> 65_Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 0 and 5 AND person.gender = 'M' AND visit2.visit_id IS NOT NULL THEN person.person_id END) AS "0-5 Male Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 0 and 5 AND person.gender = 'F' AND visit2.visit_id IS NOT NULL THEN person.person_id END) AS "0-5 Female Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 6 and 10 AND person.gender = 'M' AND visit2.visit_id IS NOT NULL THEN person.person_id END) AS "6-10 Male Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 6 and 10 AND person.gender = 'F' AND visit2.visit_id IS NOT NULL THEN person.person_id END) AS "6-10 Female Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 11 and 19 AND person.gender = 'M' AND visit2.visit_id IS NOT NULL THEN person.person_id END) AS "11-19 Male Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 11 and 19 AND person.gender = 'F' AND visit2.visit_id IS NOT NULL THEN person.person_id END) AS "11-19 Female Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 20 and 29 AND person.gender = 'M' AND visit2.visit_id IS NOT NULL THEN person.person_id END) AS "20-29 Male Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 20 and 29 AND person.gender = 'F' AND visit2.visit_id IS NOT NULL THEN person.person_id END) AS "20-29 Female Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 30 and 45 AND person.gender = 'M' AND visit2.visit_id IS NOT NULL THEN person.person_id END) AS "30-45 Male Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 30 and 45 AND person.gender = 'F' AND visit2.visit_id IS NOT NULL THEN person.person_id END) AS "30-45 Female Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 46 and 65 AND person.gender = 'M' AND visit2.visit_id IS NOT NULL THEN person.person_id END) AS "46-65 Male Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) between 46 and 65 AND person.gender = 'F' AND visit2.visit_id IS NOT NULL THEN person.person_id END) AS "46-65 Female Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) > 65 AND person.gender = 'M' THEN person.person_id END) AS "> 65_Male",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, visit.date_started) > 65 AND person.gender = 'F' THEN person.person_id END) AS "> 65_FEmale" 
FROM person
JOIN visit ON person.person_id = visit.patient_id AND date(visit.date_started) between '#startDate#' and '#endDate#'
JOIN visit_type ON visit.visit_type_id = visit_type.visit_type_id AND (visit_type.name LIKE "Adult ER" OR visit_type.name LIKE "Gynecology Emergency" OR visit_type.name LIKE "Pediatrics Emergency")  
LEFT JOIN visit visit2 ON person.person_id = visit2.patient_id AND visit2.visit_type_id = visit_type.visit_type_id AND ABS(TIMESTAMPDIFF(DAY, visit2.date_started, visit.date_started)) < 15