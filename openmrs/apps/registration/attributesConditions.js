Bahmni.Registration.AttributesConditions.rules = {
    'PaymentMethod': function(patient) {
        var returnValues = {
            show: [],
            hide: []
        };
        if (patient["PaymentMethod"] && patient["PaymentMethod"].value && patient["PaymentMethod"].value == "Credit") {
            returnValues.show.push("creditInformation");
            returnValues.hide.push("insuranceInformation");
            returnValues.hide.push("additionalPatientInformation");
            returnValues.hide.push("freeInformation");
            returnValues.hide.push("CBHIInformation");
            returnValues.hide.push("creditCompanies");
        } else if (patient["PaymentMethod"] && patient["PaymentMethod"].value && patient["PaymentMethod"].value == "Free") {
            returnValues.hide.push("insuranceInformation");
            returnValues.show.push("freeInformation");
            returnValues.hide.push("creditInformation");
            returnValues.hide.push("creditCompanies");
            returnValues.hide.push("additionalPatientInformation");
            returnValues.hide.push("CBHIInformation");
        } else {
            returnValues.show.push("additionalPatientInformation");
            returnValues.hide.push("insuranceInformation");
            returnValues.hide.push("creditInformation");
            returnValues.hide.push("creditCompanies");
            returnValues.hide.push("freeInformation");
            returnValues.hide.push("CBHIInformation");
        }
        return returnValues;
    },
    'Credit Information': function(patient) {
        var returnValues = {
            show: [],
            hide: []
        };
        if (patient["Credit Information"] && patient["Credit Information"].value && patient["Credit Information"].value == "Credit Companies") {
            returnValues.show.push("creditCompanies");
            returnValues.show.push("creditInformation");
            returnValues.hide.push("insuranceInformation");
            returnValues.hide.push("CBHIInformation");
        } else if (patient["Credit Information"] && patient["Credit Information"].value && patient["Credit Information"].value == "Insurance") {
            returnValues.show.push("creditInformation");
            returnValues.show.push("insuranceInformation");
            returnValues.hide.push("creditCompanies");
            returnValues.hide.push("CBHIInformation");
        } else if (patient["Credit Information"] && patient["Credit Information"].value && patient["Credit Information"].value == "CBHI") {
            returnValues.show.push("creditInformation");
            returnValues.show.push("CBHIInformation");
            returnValues.hide.push("insuranceInformation");
            returnValues.hide.push("creditCompanies");
        } else {
            // Only hide credit sub-sections; leave creditInformation visibility to PaymentMethod
            returnValues.hide.push("insuranceInformation");
            returnValues.hide.push("creditCompanies");
            returnValues.hide.push("CBHIInformation");
        }
        return returnValues;
    }
};
