SELECT 
visit_type.name AS "Visit Type",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 0 and 5 AND person.gender = 'M' AND obs2.date_created IS NULL THEN person.person_id END) AS "0-5 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 0 and 5 AND person.gender = 'F' AND obs2.date_created IS NULL THEN person.person_id END) AS "0-5 Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 6 and 10 AND person.gender = 'M' AND obs2.date_created IS NULL THEN person.person_id END) AS "6-10 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 6 and 10 AND person.gender = 'F' AND obs2.date_created IS NULL THEN person.person_id END) AS "6-10 Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 11 and 19 AND person.gender = 'M' AND obs2.date_created IS NULL THEN person.person_id END) AS "11-19 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 11 and 19 AND person.gender = 'F' AND obs2.date_created IS NULL THEN person.person_id END) AS "11-19 Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 20 and 29 AND person.gender = 'M' AND obs2.date_created IS NULL THEN person.person_id END) AS "20-29 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 20 and 29 AND person.gender = 'F' AND obs2.date_created IS NULL THEN person.person_id END) AS "20-29 Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 30 and 45 AND person.gender = 'M' AND obs2.date_created IS NULL THEN person.person_id END) AS "30-45 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 30 and 45 AND person.gender = 'F' AND obs2.date_created IS NULL THEN person.person_id END) AS "30-45 Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 46 and 65 AND person.gender = 'M' AND obs2.date_created IS NULL THEN person.person_id END) AS "46-65 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 46 and 65 AND person.gender = 'F' AND obs2.date_created IS NULL THEN person.person_id END) AS "46-65 Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) > 65 AND person.gender = 'M' AND obs2.date_created IS NULL THEN person.person_id END) AS "> 65 Male New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) > 65 AND person.gender = 'F' AND obs2.date_created IS NULL THEN person.person_id END) AS "> 65_Female New",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 0 and 5 AND person.gender = 'M' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "0-5 Male Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 0 and 5 AND person.gender = 'F' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "0-5 Female Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 6 and 10 AND person.gender = 'M' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "6-10 Male Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 6 and 10 AND person.gender = 'F' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "6-10 Female Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 11 and 19 AND person.gender = 'M' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "11-19 Male Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 11 and 19 AND person.gender = 'F' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "11-19 Female Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 20 and 29 AND person.gender = 'M' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "20-29 Male Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 20 and 29 AND person.gender = 'F' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "20-29 Female Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 30 and 45 AND person.gender = 'M' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "30-45 Male Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 30 and 45 AND person.gender = 'F' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "30-45 Female Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 46 and 65 AND person.gender = 'M' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "46-65 Male Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) between 46 and 65 AND person.gender = 'F' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "46-65 Female Repeat",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) > 65 AND person.gender = 'M' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "> 65_Male",
COUNT(DISTINCT CASE WHEN TIMESTAMPDIFF(YEAR, person.birthdate, obs.date_created) > 65 AND person.gender = 'F' AND obs2.date_created IS NOT NULL THEN person.person_id END) AS "> 65_Female",
COUNT(DISTINCT person.person_id) AS "Total"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 
JOIN visit ON person.person_id = visit.patient_id
JOIN visit_type ON visit.visit_type_id = visit_type.visit_type_id AND (visit_type.name LIKE "%OPD%" OR visit_type.name LIKE "%Clinic%" OR visit_type.name LIKE "%Unit%" OR visit_type.name LIKE "%ART%"
OR visit_type.name LIKE "%ER%" OR visit_type.name LIKE "%Screening%" OR visit_type.name LIKE "%risk%" OR visit_type.name LIKE "%ANC%" OR visit_type.name LIKE "Gynecology Emergency" OR visit_type.name LIKE "Gyn-Obs Emergency")
JOIN obs ON encounter.encounter_id = obs.encounter_id
JOIN concept_name ON obs.concept_id = concept_name.concept_id AND concept_name.concept_name_type = "FULLY_SPECIFIED" AND (concept_name.name LIKE "Psychiatry History" OR concept_name.name LIKE "History and Physical Examination" OR concept_name.name LIKE "Ophthalmology history and Physical Examination")
JOIN location ON location.location_id = obs.location_id AND location.retired = 0
LEFT JOIN obs obs2 ON obs.person_id = obs2.person_id
    AND obs2.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Psychiatry History" OR name LIKE "History and Physical Examination" OR name LIKE "Ophthalmology history and Physical Examination")
    AND date(obs2.date_created) != date(obs.date_created)
WHERE TIME(obs.date_created) BETWEEN '08:30:00' AND '12:00:00' OR TIME(obs.date_created) BETWEEN '13:30:00' AND '17:00:00'
GROUP BY visit_type.name;