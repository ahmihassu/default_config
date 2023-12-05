    select

        concat(answer2.name, " surgeries: ", answer.name) as "Category",

        count(o.obs_id and o2.obs_id) as "Patient Count"

    from concept_answer ca

        join concept_name question on question.concept_id = ca.concept_id and question.concept_name_type = 'FULLY_SPECIFIED' AND question.name = 'Department, operative notes'

        join concept_name answer on answer.concept_id = ca.answer_concept and answer.concept_name_type = 'SHORT'

        join concept_answer ca2

        join concept_name question2 on question2.concept_id = ca2.concept_id and question2.concept_name_type = 'FULLY_SPECIFIED' AND question2.name = 'ON Types of Surgery'

        join concept_name answer2 on answer2.concept_id = ca2.answer_concept and answer2.concept_name_type = 'SHORT'

        LEFT JOIN obs o on o.concept_id = question.concept_id and o.value_coded = answer.concept_id and o.voided=0 and CAST(o.date_created AS DATE) BETWEEN '#startDate#' AND '#endDate#'

        LEFT JOIN obs o2 on o.encounter_id = o2.encounter_id and o2.value_coded = answer2.concept_id and o2.voided=0 and CAST(o2.date_created AS DATE) BETWEEN '#startDate#' AND '#endDate#'

    GROUP BY answer2.name, answer.name

UNION

    select

        concat("Total tally for ", answer.name ," surgeries:") as "Category",

        count(o.obs_id) as "Patient Count"

    from concept_answer ca

        join concept_name question on question.concept_id = ca.concept_id and question.concept_name_type = 'FULLY_SPECIFIED' AND question.name = 'ON Types of Surgery'

        join concept_name answer on answer.concept_id = ca.answer_concept and answer.concept_name_type = 'SHORT'

        LEFT JOIN obs o on o.concept_id = question.concept_id and o.value_coded = answer.concept_id and o.voided=0 and CAST(o.date_created AS DATE) BETWEEN '#startDate#' AND '#endDate#'

    GROUP BY answer.name

UNION

    select

        concat("Total number of Surgeries:") as "Category",

        count(o.obs_id) as "Patient Count"

    from concept_answer ca

        join concept_name question on question.concept_id = ca.concept_id and question.concept_name_type = 'FULLY_SPECIFIED' AND question.name = 'ON Types of Surgery'

        join concept_name answer on answer.concept_id = ca.answer_concept and answer.concept_name_type = 'SHORT'

        LEFT JOIN obs o on o.concept_id = question.concept_id and o.value_coded = answer.concept_id and o.voided=0 and CAST(o.date_created AS DATE) BETWEEN '#startDate#' AND '#endDate#'

UNION
 
    select

        CONCAT("Total number of patients sent to ", vt.name) as "Category",

        COUNT(DISTINCT p.person_id) AS "Patient Count"

    FROM person p

    JOIN visit v ON v.patient_id = p.person_id AND CAST(v.date_started AS DATE) BETWEEN '#startDate#' AND '#endDate#'

    JOIN visit_type vt ON vt.visit_type_id = v.visit_type_id AND vt.name LIKE "Minor OR" and vt.retired=0

UNION

    select

        concat(sa.status, " Surgeries") as "Category",

        count(sa2.surgical_appointment_id) as "Patient Count"

    FROM surgical_appointment sa

    LEFT join surgical_appointment sa2 ON sa.surgical_appointment_id = sa2.surgical_appointment_id and CAST(sa.date_created AS DATE) BETWEEN '#startDate#' AND '#endDate#'

    GROUP BY sa.status;
