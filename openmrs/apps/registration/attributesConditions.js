Bahmni.Registration.AttributesConditions.rules = {
    'PaymentMethod': function(patient) {
        var returnValues = {
            show: [],
            hide: []
        };
        if(patient["PaymentMethod"] && patient["PaymentMethod"].value && patient["PaymentMethod"].value == "Credit"){
             returnValues.show.push("creditInformation");
            returnValues.hide.push("insuranceInformation");
            returnValues.hide.push("additionalPatientInformation");
            returnValues.hide.push("freeInformation");
           
           
        }
        else if(patient["PaymentMethod"] && patient["PaymentMethod"].value && patient["PaymentMethod"].value == "Free"){
            returnValues.hide.push("insuranceInformation");
            returnValues.show.push("freeInformation");
            returnValues.hide.push("creditInformation");
            returnValues.hide.push("creditCompanies");
            returnValues.hide.push("additionalPatientInformation");
        }
        else {
            returnValues.hide.push("insuranceInformation");
            returnValues.hide.push("creditInformation");
            returnValues.hide.push("creditCompanies");
            returnValues.hide.push("freeInformation");
        }
        return returnValues;
    },
     'Credit Information': function(patient) {
        var returnValues = {
            show: [],
            hide: []
        };
       if(patient["Credit Information"] && patient["Credit Information"].value && patient["Credit Information"].value == "Credit Companies"){
                        returnValues.show.push("creditCompanies");
                        returnValues.show.push("creditInformation");
                        returnValues.hide.push("insuranceInformation");

        }
        else if(patient["Credit Information"] && patient["Credit Information"].value && patient["Credit Information"].value == "Insurance"){
            returnValues.show.push("creditInformation");
            returnValues.show.push("insuranceInformation");
            returnValues.hide.push("creditCompanies");
        }
        else if(patient["Credit Information"] && patient["Credit Information"].value && patient["Credit Information"].value == "CBHI"){
            returnValues.show.push("creditInformation");
            returnValues.hide.push("insuranceInformation");
            returnValues.hide.push("creditCompanies");
        }
        else {
            returnValues.hide.push("insuranceInformation");
            returnValues.hide.push("creditInformation");
            returnValues.hide.push("creditCompanies");
           
        }
        return returnValues;
    }
};
