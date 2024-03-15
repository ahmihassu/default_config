SELECT 
COUNT(DISTINCT CASE WHEN diagnosis0.value_coded IS NOT NULL THEN encounter.patient_id END) AS "Number of inpatients who developed a new pressure ulcer",
loc.name AS Admission_Location
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 
JOIN obs diagnosis0 ON encounter.encounter_id = diagnosis0.encounter_id
    AND diagnosis0.value_coded IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "EH90- - Pressure ulceration")
JOIN encounter en ON encounter.visit_id = en.visit_id
JOIN bed_patient_assignment_map bpmap ON bpmap.encounter_id = en.encounter_id
JOIN bed_location_map blm ON blm.bed_id = bpmap.bed_id
JOIN location par ON blm.location_id = par.location_id
JOIN location loc ON loc.location_id = par.parent_location
GROUP BY loc.name