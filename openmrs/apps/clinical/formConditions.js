Bahmni.ConceptSet.FormConditions.rules = {
    'Diastolic Data' : function (formName, formFieldValues) {
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
    'Systolic Data' : function (formName, formFieldValues) {
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
    "ED Triage, Vaginal Bleeding": function(formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var vaginalBleeding = formFieldValues['ED Triage, Vaginal Bleeding'];
       //embarassing
        if(vaginalBleeding==true) {
            conditions.show.push("ED Triage, If yes");
        } else{
            conditions.hide.push("ED Triage, If yes");
        }
        return conditions;
    },
    "ED Triage, Gestation": function(formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var gestation = formFieldValues['ED Triage, Gestation'];
        if(gestation=="ED Triage, Other") {
            conditions.show.push("ED Triage, If other specify");
        } else {
            conditions.hide.push("ED Triage, If other specify");
        }
        return conditions;
    },
    "Mode of delivery Coded": function(formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var deliveryCoded = formFieldValues['Mode of delivery Coded'];
        if(deliveryCoded=="Other") {
            conditions.show.push("If Other Specify 3");
        } else {
            conditions.hide.push("If Other Specify 3");
        }
        return conditions;
    },
    "Past OI": function(formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var pastOI = formFieldValues['Past OI'];
        if(pastOI=="Other") {
            conditions.show.push("If other Specify");
        } else {
            conditions.hide.push("If other Specify");
        }
        return conditions;
    },
    "Presenting Symptom at ART enrollment": function(formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var prsentingSymptom = formFieldValues['Presenting Symptom at ART enrollment'];
        if(prsentingSymptom=="Other") {
            conditions.show.push("If other Specify");
        } else {
            conditions.hide.push("If other Specify");
        }
        return conditions;
    },
    "Client's Pregnancy Status at Enrollment": function(formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var pregnancyStatus = formFieldValues["Client's Pregnancy Status at Enrollment"];
        if(pregnancyStatus=="Pregnant") {
            conditions.show.push("If Client Pregnant at ART enrollment fill in LMP");
            conditions.show.push("If Client is Pregnant at ART enrollment fill in EDD");
        } else {
            conditions.hide.push("If Client Pregnant at ART enrollment fill in LMP");
            conditions.hide.push("If Client is Pregnant at ART enrollment fill in EDD");
        }
        return conditions;
    },
    "Maternal Status": function(formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var maternalStatus = formFieldValues['Maternal Status'];
        var enrollmentStatus = formFieldValues['ART Enrollment Status'];
        if(maternalStatus=="Alive") {
            conditions.show.push("ART Enrollment Status");
        } else {
            conditions.hide.push("ART Enrollment Status");
        }
        if(maternalStatus=="Alive" && enrollmentStatus=="Enrolled in ART") {
            conditions.show.push("ART Enrolled in");
        }
        else{
            conditions.hide.push("ART Enrolled in");
        }
        return conditions;
    },
    "Father Status": function(formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var fatherStatus = formFieldValues['Father Status'];
        if(fatherStatus=="Alive") {
            conditions.show.push("ART Enrollment Status");
        } else {
            conditions.hide.push("ART Enrollment Status");
        }
        return conditions;
    },
    "ART Enrollment Status": function(formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var enrollmentStatus = formFieldValues['ART Enrollment Status'];
        if(enrollmentStatus=="Enrolled in ART") {
            conditions.show.push("Unique ART #");
        }
        else {
            conditions.hide.push("Unique ART #");
        }
        return conditions;
    }
};