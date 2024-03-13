SELECT 
loc.name as "Ipd Location",
SUM(IF(form_under_obs0.encounter_id IS NOT NULL,1,0)) AS "Number of deaths among admitted inpatients",
COUNT(DISTINCT bpam.patient_id) AS "Total Admitted",
COUNT(DISTINCT CASE WHEN bpam.date_stopped IS NOT NULL THEN bpam.patient_id END) AS "Total Discharged"
FROM person
JOIN encounter on person.person_id = encounter.patient_id AND date(encounter.encounter_datetime) between '#startDate#' and '#endDate#' 
LEFT JOIN obs form_under_obs0 ON encounter.encounter_id = form_under_obs0.encounter_id
                        AND form_under_obs0.concept_id IN (SELECT concept_id from concept_name WHERE concept_name_type = "FULLY_SPECIFIED" AND name LIKE "Death notification")
JOIN visit ON encounter.visit_id = visit.visit_id
JOIN visit_type ON visit.visit_type_id = visit_type.visit_type_id AND visit_type.name = "IPD"
JOIN encounter en ON en.visit_id = encounter.visit_id
JOIN bed_patient_assignment_map bpam ON bpam.encounter_id = en.encounter_id
JOIN bed_location_map blm ON bpam.bed_id = blm.bed_id
JOIN location par ON blm.location_id = par.location_id
JOIN location loc ON loc.location_id = par.parent_location
GROUP BY loc.name