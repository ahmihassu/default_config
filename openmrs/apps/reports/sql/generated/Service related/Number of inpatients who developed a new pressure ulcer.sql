SELECT 
COUNT(DISTINCT person.person_id) AS "Number of inpatients who developed a new pressure ulcer"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 
JOIN visit ON encounter.visit_id = visit.visit_id
JOIN location ON location.location_id = encounter.location_id
AND (location.name LIKE "IPD")
LEFT JOIN obs diagnosis0 ON encounter.encounter_id = diagnosis0.encounter_id
                    AND diagnosis0.value_coded IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "EH90- - Pressure ulceration")
WHERE (diagnosis0.obs_id IS NOT NULL AND location.retired=0)
