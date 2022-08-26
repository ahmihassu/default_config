Bahmni.ConceptSet.FormConditions.rules = {
    'Diastolic Data': function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    },
    'Systolic Data': function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    },
    "ED Triage, Vaginal Bleeding": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var vaginalBleeding = formFieldValues['ED Triage, Vaginal Bleeding'];
        //embarassing
        if (vaginalBleeding == true) {
            conditions.show.push("ED Triage, If yes");
        } else {
            conditions.hide.push("ED Triage, If yes");
        }
        return conditions;
    },
    "ED Triage, Gestation": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var gestation = formFieldValues['ED Triage, Gestation'];
        if (gestation == "ED Triage, Other") {
            conditions.show.push("ED Triage, If other specify");
        } else {
            conditions.hide.push("ED Triage, If other specify");
        }
        return conditions;
    },
    "Mode of delivery Coded": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var deliveryCoded = formFieldValues['Mode of delivery Coded'];
        if (deliveryCoded == "Other") {
            conditions.show.push("If Other Specify 3");
        } else {
            conditions.hide.push("If Other Specify 3");
        }
        return conditions;
    },
    "Past OI": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var pastOI = formFieldValues['Past OI'];
        if (pastOI == "Other") {
            conditions.show.push("If other Specify");
        } else {
            conditions.hide.push("If other Specify");
        }
        return conditions;
    },
    "Presenting Symptom at ART enrollment": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var prsentingSymptom = formFieldValues['Presenting Symptom at ART enrollment'];
        if (prsentingSymptom == "Other") {
            conditions.show.push("If other Specify");
        } else {
            conditions.hide.push("If other Specify");
        }
        return conditions;
    },
    "Client's Pregnancy Status at Enrollment": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var pregnancyStatus = formFieldValues["Client's Pregnancy Status at Enrollment"];
        if (pregnancyStatus == "Pregnant") {
            conditions.show.push("If Client Pregnant at ART enrollment fill in LMP");
            conditions.show.push("If Client is Pregnant at ART enrollment fill in EDD");
        } else {
            conditions.hide.push("If Client Pregnant at ART enrollment fill in LMP");
            conditions.hide.push("If Client is Pregnant at ART enrollment fill in EDD");
        }
        return conditions;
    },
    "Maternal Status": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var maternalStatus = formFieldValues['Maternal Status'];
        var enrollmentStatus = formFieldValues['ART Enrollment Status'];
        if (maternalStatus == "Alive") {
            conditions.show.push("ART Enrollment Status");
        } else {
            conditions.hide.push("ART Enrollment Status");
        }
        if (maternalStatus == "Alive" && enrollmentStatus == "Enrolled in ART") {
            conditions.show.push("ART Enrolled in");
        }
        else {
            conditions.hide.push("ART Enrolled in");
        }
        return conditions;
    },
    "Father Status": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var fatherStatus = formFieldValues['Father Status'];
        if (fatherStatus == "Alive") {
            conditions.show.push("ART Enrollment Status");
        } else {
            conditions.hide.push("ART Enrollment Status");
        }
        return conditions;
    },
    "ART Enrollment Status": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var enrollmentStatus = formFieldValues['ART Enrollment Status'];
        if (enrollmentStatus == "Enrolled in ART") {
            conditions.show.push("Unique ART #");
        }
        else {
            conditions.hide.push("Unique ART #");
        }
        return conditions;
    },
    "Presence of Murmur": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Murmur'];
        if (formName == "Cardiac Clinic Follow up Form - Congenital Heart Disease" && val == true) {
            conditions.show.push("Cardiac Follow up Diastolic Murmur");
            conditions.show.push("Cardiac Follow up Systolic Murmur");
        }
        else if (formName == "Cardiac Clinic Follow up Form - Congenital Heart Disease" && val != true) {
            conditions.hide.push("Cardiac Follow up Diastolic Murmur");
            conditions.hide.push("Cardiac Follow up Systolic Murmur");
        }
        return conditions;
    },
    "Cardiac Follow up Diagnosis Coded": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Cardiac Follow up Diagnosis Coded'];
        if (formName == "Cardiac Clinic Follow up Form - Congenital Heart Disease" && val == "Other") {
            conditions.show.push("If other specify");

        }
        else if (formName == "Cardiac Clinic Follow up Form - Congenital Heart Disease" && val == "Other") {
            conditions.hide.push("If other specify");
        }
        return conditions;
    },
    "Cardiac Follow up Diagnosis Coded": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [], disable: [] };
        var val = formFieldValues['Cardiac Follow up Diagnosis Coded'];

        if (formName == "Cardiac Clinic Follow up Form - Acquired Heart Disease" && val.indexOf('Other') > -1) {
            conditions.show.push("If other specify");
        }
        else if (formName == "Cardiac Clinic Follow up Form - Acquired Heart Disease" && val.indexOf('Other') <= -1) {
            conditions.hide.push("If other specify");
        }
        var all = ["If other specify"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)

        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    "Presence of Complication": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Complication'];
        if (formName == "Cataract surgery follow up form" && val == true) {
            conditions.show.push("Specify 2");
            conditions.show.push("Management Notes");
        }
        else if (formName == "Cataract surgery follow up form" && val != true) {
            conditions.hide.push("Specify 2");
            conditions.hide.push("Management Notes");
        }
        return conditions;
    },
    "Scleral flap shape and size": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [], disable: [] };
        var val = formFieldValues['Scleral flap shape and size'];

        if (formName == "Cataract surgery follow up form" && val.indexOf('Other') > -1) {
            conditions.show.push("Specify 2");
        }
        else if (formName == "Cataract surgery follow up form" && val.indexOf('Other') <= -1) {
            conditions.hide.push("Specify 2");
        }
        var all = ["Specify 2"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)

        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    "Antimetabolite": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Antimetabolite'];
        if (formName == "Trabeculectomy Procedure" && val.indexOf("MMC") > -1) {
            conditions.show.push("MMC Set");
        }

        if (formName == "Trabeculectomy Procedure" && val.indexOf("5 FU") > -1) {
            conditions.show.push("5 FU Set");
        }
        else if (formName == "Cataract surgery follow up form") {
            conditions.hide.push("MMC Set");
            conditions.hide.push("5 FU Set");
        }
        var all = ["MMC Set", "5 FU Set"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)
        return conditions;
    },
    "Presence of Polyuria": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Polyuria'];
        if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val == true) {
            conditions.show.push("How often 1");
        }
        else if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val != true) {
            conditions.hide.push("How often 1");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("How often 1");
        }
        return conditions;
    },
    "Presence of Polydipsia": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Polydipsia'];
        if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val == true) {
            conditions.show.push("How often 2");
        }
        else if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val != true) {
            conditions.hide.push("How often 2");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("How often 2");
        }
        return conditions;
    },
    "Presence of Vomiting": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Vomiting'];
        if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val == true) {
            conditions.show.push("How often 3");
        }
        else if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val != true) {
            conditions.hide.push("How often 3");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("How often 3");
        }
        return conditions;
    },
    "Presence of Weight Loss": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Weight Loss'];
        if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val == true) {
            conditions.show.push("How often");
        }
        else if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val != true) {
            conditions.hide.push("How often");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("How often");
        }
        return conditions;
    },
    "Presence of Abdominal pain": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Abdominal pain'];
        if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val == true) {
            conditions.show.push("How often 4");
        }
        else if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val != true) {
            conditions.hide.push("How often 4");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("How often 4");
        }
        return conditions;
    },
    "Presence of Dizziness": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Dizziness'];
        if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val == true) {
            conditions.show.push("How often 5");
        }
        else if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val != true) {
            conditions.hide.push("How often 5");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("How often 5");
        }
        return conditions;
    },
    "Presence of Sweating": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Sweating'];
        if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val == true) {
            conditions.show.push("How often 6");
        }
        else if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val != true) {
            conditions.hide.push("How often 6");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("How often 6");
        }
        return conditions;
    },
    "Presence of Extreme hunger": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Extreme hunger'];
        if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val == true) {
            conditions.show.push("How often 7");
        }
        else if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val != true) {
            conditions.hide.push("How often 7");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("How often 7");
        }
        return conditions;
    },
    "Presence of Blurred Vision": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Blurred Vision'];
        if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val == true) {
            conditions.show.push("How often 8");
        }
        else if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val != true) {
            conditions.hide.push("How often 8");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("How often 8");
        }
        return conditions;
    },
    "Presence of Weakness": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Weakness'];
        if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val == true) {
            conditions.show.push("How often 9");
        }
        else if (formName == "Changing Diabetes In Children, Did you experience the following symptoms since last visit?" && val != true) {
            conditions.hide.push("How often 9");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("How often 9");
        }
        return conditions;
    },
    "Presence of Ketoacidosis": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };

        var val = formFieldValues['Presence of Ketoacidosis'];


        if (formName == "Changing Diabetes In Children, Acute diabetes complications requiring 2nd party intervention" && val == true) {
            conditions.show.push("Description of Cause");
            conditions.show.push("How often");
        }
        else if (formName == "Changing Diabetes In Children, Acute diabetes complications requiring 2nd party intervention" && val != true) {
            conditions.hide.push("Description of Cause");
            conditions.hide.push("How often");
        }
        else if (formName == "Changing Diabetes In Children" && val == null) {
            conditions.hide.push("Description of Cause");
            conditions.hide.push("How often");
        }
        return conditions;
    },
    "Presence of Severe hypoglycemia": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Severe hypoglycemia'];

        if (formName == "Changing Diabetes In Children, Acute diabetes complications requiring 2nd party intervention" && val == true) {
            conditions.show.push("Description of Cause 1");
            conditions.show.push("How often 1");
        }
        else if (formName == "Changing Diabetes In Children, Acute diabetes complications requiring 2nd party intervention" && val != true) {
            conditions.hide.push("Description of Cause 1");
            conditions.hide.push("How often 1");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("Description of Cause 1");
            conditions.hide.push("How often 1");
        }
        return conditions;
    },
    "Presence of Infections": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Infections'];
        if (formName == "Changing Diabetes In Children, Acute diabetes complications requiring 2nd party intervention" && val == true) {
            conditions.show.push("Description of Cause 2");
            conditions.show.push("How often 2");
        }
        else if (formName == "Changing Diabetes In Children, Acute diabetes complications requiring 2nd party intervention" && val != true) {
            conditions.hide.push("Description of Cause 2");
            conditions.hide.push("How often 2");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("Description of Cause 2");
            conditions.hide.push("How often 2");
        }
        return conditions;
    },

    "Normal/ Abnormal HEENT": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        ;

        var val = formFieldValues['Normal/ Abnormal HEENT'];
        if (formName == "Changing Diabetes In Children, Physical Examination" && val == "UoG_CDIC P E Abnormal") {
            conditions.show.push("Is clinically significant");
        }
        else if (formName == "Changing Diabetes In Children" && val != "UoG_CDIC P E Abnormal") {
            conditions.hide.push("Is clinically significant");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("Is clinically significant");
        }
        return conditions;
    },
    "Normal/ Abnormal Lymph nodes": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Normal/ Abnormal Lymph nodes'];
        if (formName == "Changing Diabetes In Children" && val == "UoG_CDIC P E Abnormal") {
            conditions.show.push("Is clinically significant 1");
        }
        else if (formName == "Changing Diabetes In Children" && val != "UoG_CDIC P E Abnormal") {
            conditions.hide.push("Is clinically significant 1");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("Is clinically significant 1");
        }
        return conditions;
    },
    "Normal/ Abnormal Chest": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Normal/ Abnormal Chest'];
        if (formName == "Changing Diabetes In Children, Physical Examination" && val == "UoG_CDIC P E Abnormal") {
            conditions.show.push("Is clinically significant 2");
        }
        else if (formName == "Changing Diabetes In Children, Physical Examination" && val != "UoG_CDIC P E Abnormal") {
            conditions.hide.push("Is clinically significant 2");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("Is clinically significant 2");
        }
        return conditions;
    },
    "Normal/ Abnormal Heart": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Normal/ Abnormal Heart'];
        if (formName == "Changing Diabetes In Children, Physical Examination" && val == "Abnormal") {
            conditions.show.push("Is clinically significant 3");
        }
        else if (formName == "Changing Diabetes In Children, Physical Examination" && val != "Abnormal") {
            conditions.hide.push("Is clinically significant 3");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("Is clinically significant 3");
        }
        return conditions;
    },
    "Normal/ Abnormal Abdomen": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Normal/ Abnormal Abdomen'];
        if (formName == "Changing Diabetes In Children, Physical Examination" && val == "UoG_CDIC P E Abnormal") {
            conditions.show.push("Is it clinically significant4");
        }
        else if (formName == "Changing Diabetes In Children, Physical Examination" && val != "UoG_CDIC P E Abnormal") {
            conditions.hide.push("Is it clinically significant4");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("Is it clinically significant4");
        }
        return conditions;
    },
    "Normal/ Abnormal Genitourinary System": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Normal/ Abnormal Genitourinary System'];
        if (formName == "Changing Diabetes In Children, Physical Examination" && val != "UoG_CDIC P E Abnormal") {
            conditions.show.push("Is it clinically significant 5");
        }
        else if (formName == "Changing Diabetes In Children, Physical Examination" && val != "UoG_CDIC P E Abnormal") {
            conditions.hide.push("Is it clinically significant 5");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("Is it clinically significant 5");
        }
        return conditions;
    },
    "Normal/ Abnormal Musculoskeletal System": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Normal/ Abnormal Musculoskeletal System'];
        if (formName == "Changing Diabetes In Children, Physical Examination" && val != "UoG_CDIC P E Abnormal") {
            conditions.show.push("Is it clinically significant 6");
        }
        else if (formName == "Changing Diabetes In Children, Physical Examination" && val != "UoG_CDIC P E Abnormal") {
            conditions.hide.push("Is it clinically significant 6");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("Is it clinically significant 6");
        }
        return conditions;
    },
    "Normal/ Abnormal CNS": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Normal/ Abnormal CNS'];
        if (formName == "Changing Diabetes In Children, Physical Examination" && val != "UoG_CDIC P E Abnormal") {
            conditions.show.push("Is it clinically significant 7");
        }
        else if (formName == "Changing Diabetes In Children, Physical Examination" && val != "UoG_CDIC P E Abnormal") {
            conditions.hide.push("Is it clinically significant 7");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("Is it clinically significant 7");
        }
        return conditions;
    },
    "Normal/ Abnormal Skin": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Normal/ Abnormal Skin'];
        if (formName == "Changing Diabetes In Children, Physical Examination" && val != "UoG_CDIC P E Abnormal") {
            conditions.show.push("Is clinically significant 8");
        }
        else if (formName == "Changing Diabetes In Children, Physical Examination" && val != "UoG_CDIC P E Abnormal") {
            conditions.hide.push("Is clinically significant 8");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("Is clinically significant 8");
        }
        return conditions;
    },

    "Normal/ Abnormal Hands, finger and feet": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Normal/ Abnormal Hands, finger and feet'];
        if (formName == "Changing Diabetes In Children, Physical Examination" && val == "Abnormal") {
            conditions.show.push("Is clinically significant 9");
        }
        else if (formName == "Changing Diabetes In Children, Physical Examination" && val != "Abnormal") {
            conditions.hide.push("Is clinically significant 9");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("Is clinically significant 9");
        }
        return conditions;
    },
    "Normal/ Abnormal Other": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Normal/ Abnormal Other'];
        if (formName == "Changing Diabetes In Children, Physical Examination" && val == "Abnormal") {
            conditions.show.push("Is clinically significant 10");
        }
        else if (formName == "Changing Diabetes In Children, Physical Examination" && val != "Abnormal") {
            conditions.hide.push("Is clinically significant 10");
        }
        else if (formName == "Changing Diabetes In Children") {
            conditions.hide.push("Is clinically significant 10");
        }
        return conditions;
    },
    "Point of HIV testing service where the case was diagnosed": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };

        var val = formFieldValues['Point of HIV testing service where the case was diagnosed'];
        if (formName == "Facility Information of HIV diagnosis" && val == "Other") {
            conditions.show.push("If other specify");
        }
        else if (formName == "Facility Information of HIV diagnosis" && val != "Other") {
            conditions.hide.push("If other specify");
        }
        else if (formName == "Ethiopia HIC Case Report Form for Newly Diagnosed HIV Positive Individual") {
            conditions.hide.push("If other specify");
        }

        return conditions;
    },
    "Is this client contact of known HIV positive person (index case)": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };

        var val = formFieldValues['Is this client contact of known HIV positive person (index case)'];
        if (formName == "HIV Index Testing" && val == true) {
            conditions.show.push("Unique ART Number");
        }
        else if (formName == "HIV Index Testing" && val != true) {
            conditions.hide.push("Unique ART Number");
        }
        else if (formName == "Ethiopia HIC Case Report Form for Newly Diagnosed HIV Positive Individual") {
            conditions.hide.push("Unique ART Number");
        }
        return conditions;
    },
    "TB Site": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };

        var val = formFieldValues['TB Site'];
        if (formName == "TB, Patient Information" && val == "TB, Extrapulmonary") {
            conditions.show.push("TB If extrapulmonary, Specify Site");
        }
        else if (formName == "TB, Patient Information" && val != "TB, Extrapulmonary") {
            conditions.hide.push("TB If extrapulmonary, Specify Site");
        }
        else if (formName == "MDR TB Treatment Card") {
            conditions.hide.push("TB If extrapulmonary, Specify Site");
        }
        return conditions;
    },
    "Type of Substance Use": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [], disable: [] };
        var val = formFieldValues['Type of Substance Use'];

        if (formName == "Nursing Assessment, Substance Use" && val.indexOf('Alcohol') > -1) {
            conditions.show.push("Nursing Assessment, Alcohol Details");
        }
        if (formName == "Nursing Assessment, Substance Use" && val.indexOf('Khat') > -1) {
            conditions.show.push("Nursing Assessment, Khat Details");
        }
        if (formName == "Nursing Assessment, Substance Use" && val.indexOf('Tobacco') > -1) {
            conditions.show.push("Nursing Assessment, Tobacco Details");
        }
        if (formName == "Nursing Assessment, Substance Use" && val.indexOf('Other') > -1) {
            conditions.show.push("Nursing Assessment, Other Substance Details");
        }
        else if (formName == "Nursing and Midwifery Comprehensive Client Assessment format Section 1") {
            conditions.hide.push("Nursing Assessment, Alcohol Details");
            conditions.hide.push("Nursing Assessment, Khat Details");
            conditions.hide.push("Nursing Assessment, Tobacco Details");
            conditions.hide.push("Nursing Assessment, Other Substance Details");
        }
        var all = ["Nursing Assessment, Alcohol Details", "Nursing Assessment, Khat Details", "Nursing Assessment, Tobacco Details", "Nursing Assessment, Other Substance Details"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)

        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },

    "Nursing Assessment, Skin Color": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };

        var val = formFieldValues['Nursing Assessment, Skin Color'];
        if (formName == "Nursing Assessment, Nutrition Metabolism Pattern Skin" && val.indexOf('Other') > -1) {
            conditions.show.push("If other specify");
        }
        else if (formName == "Nursing Assessment, Nutrition Metabolism Pattern Skin" && val.indexOf('Other') <= -1) {
            conditions.hide.push("If other specify");
        }
        else if (formName == "Nursing and Midwifery Comprehensive Assessment format; Section 2") {
            conditions.hide.push("If other specify");
        }
        var all = ["If other specify"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)

        return conditions;
    },
    "Nursing Assessment, Skin Lesion": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Nursing Assessment, Skin Lesion'];
        if (formName == "Nursing Assessment, Nutrition Metabolism Pattern Skin" && val.indexOf('Other') > -1) {
            conditions.show.push("If Other Specify 2");
        }
        else if (formName == "Nursing Assessment, Nutrition Metabolism Pattern Skin" && val.indexOf('Other') <= -1) {
            conditions.hide.push("If Other Specify 2");
        }
        else if (formName == "Nursing and Midwifery Comprehensive Assessment format; Section 2") {
            conditions.hide.push("If Other Specify 2");
        }
        var all = ["If Other Specify 2"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)
        return conditions;
    },
    "Is there any visible wound": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Is there any visible wound'];
        if (formName == "Nursing Assessment, Nutrition Metabolism Pattern Skin" && val == true) {
            conditions.show.push("Type of wound Notes");
            conditions.show.push("Location Notes");
            conditions.show.push("Length");
            conditions.show.push("Width");
        }
        else if (formName == "Nursing Assessment, Nutrition Metabolism Pattern Skin" && val != true) {
            conditions.hide.push("Type of wound Notes");
            conditions.hide.push("Location Notes");
            conditions.hide.push("Length");
            conditions.hide.push("Width");
        }
        else if (formName == "Nursing and Midwifery Comprehensive Assessment format; Section 2") {
            conditions.hide.push("Type of wound Notes");
            conditions.hide.push("Location Notes");
            conditions.hide.push("Length");
            conditions.hide.push("Width");
        }
        return conditions;
    },
    "Presence of Discharge": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Discharge'];
        if (formName == "Nursing Assessment, Nutrition Metabolism Pattern Skin" && val == true) {
            conditions.show.push("Color Notes");
            conditions.show.push("Odor Notes");
        }
        else if ((formName == "Nursing Assessment, Nutrition Metabolism Pattern Skin" && val != true) || formName == "Nursing and Midwifery Comprehensive Assessment format; Section 2") {
            conditions.hide.push("Color Notes");
            conditions.hide.push("Odor Notes");
        }
        return conditions;
    },
    "Oral Mucosa Color": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Oral Mucosa Color'];
        if (formName == "Nursing Assessment, Oral Cavity" && val.indexOf('Other') > -1) {
            conditions.show.push("If other specify");
        }
        else if ((formName == "Nursing Assessment, Oral Cavity" && val.indexOf('Other') <= -1) || formName == "Nursing and Midwifery Comprehensive Assessment format; Section 2") {
            conditions.hide.push("If other specify");
        }
        var all = ["If other specify"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)
        return conditions;
    },
    "Nursing Assessment, Teeth": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Nursing Assessment, Teeth'];
        if (formName == "Nursing Assessment, Oral Cavity" && val.indexOf('Other') > -1) {
            conditions.show.push("If Other Specify 2");
        }
        else if ((formName == "Nursing Assessment, Oral Cavity" && val.indexOf('Other') <= -1) || formName == "Nursing and Midwifery Comprehensive Assessment format; Section 2") {
            conditions.hide.push("If Other Specify 2");
        }
        var all = ["If Other Specify 2"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)

        return conditions;
    },
    "Nail Color": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Nail Color'];
        if (formName == "Nursing Assessment, Nail" && val.indexOf('Other') > -1) {
            conditions.show.push("If other specify");
        }
        else if ((formName == "Nursing Assessment, Nail" && val.indexOf('Other') < -1) || formName == "Nursing and Midwifery Comprehensive Assessment format; Section 2") {
            conditions.hide.push("If other specify");
        }
        var all = ["If other specify"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)

        return conditions;
    },
    "Presence of Urinary Catheter": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Urinary Catheter'];
        if (formName == "Nursing Assessment, Bladder  Habit" && val == true) {
            conditions.show.push("Type");
        }
        else if ((formName == "Nursing Assessment, Bladder  Habit" && val != true) || formName == "Nursing and Midwifery Comprehensive Assessment format; Section 2") {
            conditions.hide.push("Type");
        }
        return conditions;
    },
    "Presence of Abdominal Tenderness": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Abdominal Tenderness'];
        if (formName == "Nursing Assessment, Abdominal Palpation" && val == true) {
            conditions.show.push("Characterize");
        }
        else if ((formName == "Nursing Assessment, Abdominal Palpation" && val != true) || formName == "Nursing and Midwifery Comprehensive Assessment format; Section 2") {
            conditions.hide.push("Characterize");
        }
        return conditions;
    },
    "Nursing Assessment, Any difficulty with daily living activities of": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Nursing Assessment, Any difficulty with daily living activities of'];
        if (formName == "Nursing and Midwifery Comprehensive Assessment Activity Exercise Pattern Subjective Data" && val.indexOf('Other') > -1) {
            conditions.show.push("If other specify");
        }
        else if ((formName == "Nursing and Midwifery Comprehensive Assessment Activity Exercise Pattern Subjective Data" && val.indexOf('Other') <= -1) || formName == "Nursing and Midwifery Comprehensive Client Assessment format Section 3; Activity Exercise Pattern") {
            conditions.hide.push("If other specify");
        }
        var all = ["If other specify"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)

        return conditions;
    },
    "Nursing Assessment Activity Exercise Pattern  Complaints": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Nursing Assessment Activity Exercise Pattern  Complaints'];

        if (formName == "Nursing and Midwifery Comprehensive Assessment Activity Exercise Pattern Subjective Data" && val.indexOf('Smoking') > -1) {
            conditions.show.push("Cough Duration/Sputum type/color Notes");
        }
        if (formName == "Nursing and Midwifery Comprehensive Assessment Activity Exercise Pattern Subjective Data" && val.indexOf('Symptom Cough') > -1) {
            conditions.show.push("Smoking Duration Notes");

        }
        else if ((formName == "Nursing and Midwifery Comprehensive Assessment Activity Exercise Pattern Subjective Data" && val.indexOf('Smoking') <= -1) || (formName == "Nursing and Midwifery Comprehensive Assessment Activity Exercise Pattern Subjective Data" && val.indexOf('Symptom Cough') <= -1) || formName == "Nursing and Midwifery Comprehensive Client Assessment format Section 3; Activity Exercise Pattern") {
            conditions.hide.push("Cough Duration/Sputum type/color Notes");
            conditions.hide.push("Smoking Duration Notes");
        }
        var all = ["Cough Duration/Sputum type/color Notes", "Smoking Duration Notes"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)

        return conditions;
    },
    "Respiratory excursion Coded": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Respiratory excursion Coded'];
        if (formName == "Nursing Assessment, Respiratory Palpation" && val == "Other") {
            conditions.show.push("If other specify");
        }
        else if ((formName == "Nursing Assessment, Respiratory Palpation" && val != "Other") || formName == "Nursing and Midwifery Comprehensive Client Assessment format Section 3; Activity Exercise Pattern") {
            conditions.hide.push("If other specify");
        }
        return conditions;
    },
    "Respiratory Percussion Coded": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Respiratory Percussion Coded'];
        if (val == "Duliness") {
            conditions.show.push("Site Notes");
        }
        else if (formName == "Nursing and Midwifery Comprehensive Client Assessment format Section 3; Activity Exercise Pattern") {
            conditions.hide.push("Site Notes");
        }
        return conditions;
    },
    "Sleep Rest Pattern Objective Data": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Sleep Rest Pattern Objective Data'];
        if (formName == "Nursing & Midwifery Comprehensive Assessment Sleep-Rest Pattern" && val == "Other") {
            conditions.show.push("If other specify");
        }
        else if ((formName == "Nursing & Midwifery Comprehensive Assessment Sleep-Rest Pattern" && val != "Other") || formName == "Nursing/ Midwife Comprehensive Client Assessment Format; Section 4") {
            conditions.hide.push("If other specify");
        }
        return conditions;
    },
    "Presence of Visual problem": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Visual problem'];
        if (formName == "Nursing and Midwifery Comprehensive Assessment Cognitive Sensory Perceptual Subjective Data" && val == true) {
            conditions.show.push("Explain");
        }
        else if ((formName == "Nursing and Midwifery Comprehensive Assessment Cognitive Sensory Perceptual Subjective Data" && val != true) || formName == "Nursing/ Midwife Comprehensive Client Assessment Format; Section 4") {
            conditions.hide.push("Explain");
        }
        return conditions;
    },
    "Presence of Smelling problem": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Smelling problem'];
        if (formName == "Nursing Assessment, Respiratory Palpation" && val == true) {
            conditions.show.push("Explain 1");
        }
        else if ((formName == "Nursing Assessment, Respiratory Palpation" && val != true) || formName == "Nursing/ Midwife Comprehensive Client Assessment Format; Section 4") {
            conditions.hide.push("Explain 1");
        }
        return conditions;
    },
    "Presence of Hearing Problem": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Hearing Problem'];
        if (formName == "Nursing and Midwifery Comprehensive Assessment Cognitive Sensory Perceptual Subjective Data" && val == true) {
            conditions.show.push("Explain 2");
        }
        else if (("Nursing and Midwifery Comprehensive Assessment Cognitive Sensory Perceptual Subjective Data" && val != true) || formName == "Nursing/ Midwife Comprehensive Client Assessment Format; Section 4") {
            conditions.hide.push("Explain 2");
        }
        return conditions;
    },
    "Presence of Taste problem": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Taste problem'];
        if (formName == "Nursing and Midwifery Comprehensive Assessment Cognitive Sensory Perceptual Subjective Data" && val == true) {
            conditions.show.push("Explain 3");
        }
        else if ((formName == "Nursing and Midwifery Comprehensive Assessment Cognitive Sensory Perceptual Subjective Data" && val != true) || formName == "Nursing/ Midwife Comprehensive Client Assessment Format; Section 4") {
            conditions.hide.push("Explain 3");
        }
        return conditions;
    },
    "Presence of Problem in sensation (skin)": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Problem in sensation (skin)'];
        if (formName == "Nursing and Midwifery Comprehensive Assessment Cognitive Sensory Perceptual Subjective Data" && val == true) {
            conditions.show.push("Explain 4");
        }
        else if ((formName == "Nursing and Midwifery Comprehensive Assessment Cognitive Sensory Perceptual Subjective Data" && val != true) || formName == "Nursing/ Midwife Comprehensive Client Assessment Format; Section 4") {
            conditions.hide.push("Explain 4");
        }
        return conditions;
    },
    "Presence of Pain": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Pain'];
        if (formName == "Nursing and Midwifery Comprehensive Assessment Cognitive Sensory Perceptual Subjective Data" && val == true) {
            conditions.show.push("Characterize Pain using PQRST");
        }
        else if ((formName == "Nursing and Midwifery Comprehensive Assessment Cognitive Sensory Perceptual Subjective Data" && val != true) || formName == "Nursing/ Midwife Comprehensive Client Assessment Format; Section 4") {
            conditions.hide.push("Characterize Pain using PQRST");
        }
        return conditions;
    },
    "Nursing Assessment, Family history of": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Nursing Assessment, Family history of'];
        if (formName == "Relationship-Roles Subjective Data" && val.indexOf('Other') > -1) {
            conditions.show.push("Specify 2");
        }
        else if ((formName == "Relationship-Roles Subjective Data" && val.indexOf('Other') <= -1) || formName == "Nursing/ Midwife Comprehensive Client Assessment Format; Section 5") {
            conditions.hide.push("Specify 2");
        }
        var all = ["Specify 2"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)

        return conditions;
    },
    "Presence of Contraception": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Presence of Contraception'];
        if (formName == "Nursing Assessment, Sexual and Reproductive Pattern Male/Female" && val == true) {
            conditions.show.push("Undesirable side effects of contraceptives");
        }
        else if ((formName == "Nursing Assessment, Sexual and Reproductive Pattern Male/Female" && val != true) || formName == "Nursing/ Midwife Comprehensive Client Assessment Format; Section 5") {
            conditions.hide.push("Undesirable side effects of contraceptives");
        }
        return conditions;
    },
    "Pregnant and Lactating women Nutritional Action": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };

        var val = formFieldValues['Pregnant and Lactating women Nutritional Action'];
        if (formName == "Pregnant and Lactating Women (PLW) Nutritional Assessment" && val.indexOf('Other') > -1) {
            conditions.show.push("If other specify");
        }
        else if ((formName == "Pregnant and Lactating Women (PLW) Nutritional Assessment" && val.indexOf('Other') <= -1) || formName == "Pregnant & Lactating Women (PLW) Nutritional Assessment") {
            conditions.hide.push("If other specify");
        }
        var all = ["If other specify"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)

        return conditions;
    },
    "Presence of Complication": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };

        var val = formFieldValues['Presence of Complication'];
        if (formName == "Trabeculectomy Anesthesia set" && val == true) {
            conditions.show.push("Specify 2");
            conditions.show.push("Management Notes");
        }
        else if ((formName == "Trabeculectomy Anesthesia set" && val != true) || formName == "Trabeculectomy Surgery OR Form") {
            conditions.hide.push("Specify 2");
            conditions.hide.push("Management Notes");
        }
        return conditions;
    },
    "Scleral flap shape and size": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['Scleral flap shape and size'];
        if (formName == "Trabeculectomy Procedure" && val.indexOf('Other') > -1) {
            conditions.show.push("Specify 2");
        }
        else if ((formName == "Trabeculectomy Procedure" && val.indexOf('Other') <= -1) || formName == "Trabeculectomy Surgery OR Form") {
            conditions.hide.push("Specify 2");
        }
        var all = ["Specify 2"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)

        return conditions;
    },
    "ANC Visit Number Coded": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [], disable: [] };
        var visitNumber = formFieldValues['ANC Visit Number Coded'];

        if (visitNumber.indexOf('Number, 1') > -1) {
            conditions.show.push("ANC First Visit")
        }
        if (visitNumber.indexOf('Number, 2') > -1) {
            conditions.show.push("ANC Second Visit")
        }
        if (visitNumber.indexOf('Number, 3') > -1) {
            conditions.show.push("ANC Third Visit")
        }
        if (visitNumber.indexOf('Number, 4') > -1) {
            conditions.show.push("ANC Fourth Visit")
        }
        if (visitNumber.indexOf('Number, 5') > -1) {
            conditions.show.push("ANC Fifth Visit")
        }
        if (visitNumber.indexOf('Number, 6') > -1) {
            conditions.show.push("ANC, Sixth Visit")
        }
        if (visitNumber.indexOf('Number, 7') > -1) {
            conditions.show.push("ANC, Seventh Visit")
        }
        if (visitNumber.indexOf('Number, 8') > -1) {
            conditions.show.push("ANC, Eighth Visit")
        }
        else {
            conditions.hide.push("ANC First Visit")
            conditions.hide.push("ANC Second Visit")
            conditions.hide.push("ANC Third Visit")
            conditions.hide.push("ANC Fourth Visit")
            conditions.hide.push("ANC Fifth Visit")
            conditions.hide.push("ANC, Sixth Visit")
            conditions.hide.push("ANC, Seventh Visit")
            conditions.hide.push("ANC, Eighth Visit")
        }
        var all = ["ANC First Visit", "ANC Second Visit", "ANC Third Visit", "ANC Fourth Visit", "ANC Fifth Visit", "ANC, Sixth Visit", "ANC, Seventh Visit", "ANC, Eighth Visit"]
        conditions.hide = all.filter(x => conditions.show.indexOf(x) == -1)

        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    "APCT C CxCa Counceling offered?": function (formName, formFieldValues) {

        var conditions = { show: [], hide: [] };
        var val = formFieldValues['APCT C CxCa Counceling offered?'];
        if (formName == "APCT Counceling and Linkage" && val == true) {
            conditions.show.push("APCT C CxCa Counceling accepted?");
        }
        else if (formName == "ART/ PMTCT Clinic: cervical cancer counceling tracking tool") {
            conditions.hide.push("APCT C CxCa Counceling accepted?");
        }
        return conditions;
    },
    "APCT C CxCa Counceling accepted?": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['APCT C CxCa Counceling accepted?'];
        if (formName == "APCT Counceling and Linkage" && val == true) {
            conditions.show.push("APCT C Elligibility for Screening on this visit");
        }
        else if ((formName == "APCT Counceling and Linkage" && val != true) || formName == "ART/ PMTCT Clinic: cervical cancer counceling tracking tool") {
            conditions.hide.push("APCT C Elligibility for Screening on this visit");
        }
        return conditions;
    },
    "APCT C If Eligible , Is CxCa Screening accepted": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['APCT C If Eligible , Is CxCa Screening accepted'];
        if (formName == "APCT Counceling and Linkage" && val == true) {
            conditions.show.push("APCT C Client Linked to CxCa Sceering unit");
        }
        else if ((formName == "APCT Counceling and Linkage" && val != true) || formName == "ART/ PMTCT Clinic: cervical cancer counceling tracking tool") {
            conditions.hide.push("APCT C Client Linked to CxCa Sceering unit");
        }
        return conditions;
    },
    "APCT C Elligibility for Screening on this visit": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };
        var val = formFieldValues['APCT C Elligibility for Screening on this visit'];
        if (formName == "APCT Counceling and Linkage" && val != "APCT C E Not Eligible for Screening") {
            conditions.show.push("APCT C If Eligible , Is CxCa Screening accepted");
        }
        else if ((formName == "APCT Counceling and Linkage" && val != true) || formName == "ART/ PMTCT Clinic: cervical cancer counceling tracking tool") {
            conditions.hide.push("APCT C If Eligible , Is CxCa Screening accepted");
        }
        return conditions;
    },
    "Presence of General Danger Signs": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };

        var val = formFieldValues['Presence of General Danger Signs'];
        if (formName == "Childhood Illness, Patient Signs and Symptoms" && val == true) {
            conditions.show.push("Childhood Illness, General Danger Signs, Symptoms");
        }
        else if ((formName == "Childhood Illness, Patient Signs and Symptoms" && val != true) || formName == "Childhood Illness( Children aged 2 months to 5 years)") {
            conditions.hide.push("Childhood Illness, General Danger Signs, Symptoms");
        }
        return conditions;
    },
    "Childhood Illness, Acute Respiratory Infection present": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };

        var val = formFieldValues['Childhood Illness, Acute Respiratory Infection present'];
        if (formName == "Childhood Illness,  Acute Respiratory Infection" && val == true) {
            conditions.show.push("Duration Notes");
        }
        else if ((formName == "Childhood Illness,  Acute Respiratory Infection" && val == true) || formName == "Childhood Illness( Children aged 2 months to 5 years)") {
            conditions.hide.push("Duration Notes");
        }
        return conditions;
    },
    "Presence of Diarrhea": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };

        var val = formFieldValues['Presence of Diarrhea'];
        if (formName == "Childhood Illness,  Diarrhoea" && val == true) {
            conditions.show.push("Duration Notes");
        }
        else if ((formName == "Childhood Illness,  Diarrhoea" && val != true) || formName == "Childhood Illness( Children aged 2 months to 5 years)") {
            conditions.hide.push("Duration Notes");
        }
        return conditions;
    },
    "Presence of Fever": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };

        var val = formFieldValues['Presence of Fever'];
        if (formName == "Childhood Illness,  Fever" && val == true) {
            conditions.show.push("Fever detected on");
            conditions.show.push("Duration Notes");
        }
        else if ((formName == "Childhood Illness,  Fever" && val != true) || formName == "Childhood Illness( Children aged 2 months to 5 years)") {
            conditions.hide.push("Fever detected on");
            conditions.hide.push("Duration Notes");
        }
        return conditions;
    },
    "Presence of Diarrhea": function (formName, formFieldValues) {
        var conditions = { show: [], hide: [] };

        var val = formFieldValues['Presence of Diarrhea'];
        if (formName == "Childhood Illness,  Diarrhoea" && val == true) {
            conditions.show.push("Duration Notes");
        }
        else if ((formName == "Childhood Illness,  Diarrhoea" && val != true) || formName == "Integrated Under Five OPD Register (Below two Months)") {
            conditions.hide.push("Duration Notes");
        }
        return conditions;
    },
};