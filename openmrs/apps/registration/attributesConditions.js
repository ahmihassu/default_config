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
            returnValues.hide.push("CBHIInformation");
           
           
        }
        else if(patient["PaymentMethod"] && patient["PaymentMethod"].value && patient["PaymentMethod"].value == "Free"){
            returnValues.hide.push("insuranceInformation");
            returnValues.show.push("freeInformation");
            returnValues.hide.push("creditInformation");
            returnValues.hide.push("creditCompanies");
            returnValues.hide.push("additionalPatientInformation");
            returnValues.hide.push("CBHIInformation");
        }
        else {
            returnValues.hide.push("insuranceInformation");
            returnValues.hide.push("creditInformation");
            returnValues.hide.push("creditCompanies");
            returnValues.hide.push("freeInformation");
            returnValues.hide.push("CBHIInformation");
        }
        return returnValues;
    },
     'CreditInformation': function(patient) {
        var returnValues = {
            show: [],
            hide: []
        };
       if(patient["CreditInformation"] && patient["CreditInformation"].value && patient["CreditInformation"].value == "Credit Companies"){
                        returnValues.show.push("creditCompanies");
                        returnValues.show.push("creditInformation");
                        returnValues.hide.push("insuranceInformation");
                        returnValues.hide.push("CBHIInformation")
        }
        else if(patient["CreditInformation"] && patient["CreditInformation"].value && patient["CreditInformation"].value == "Insurance"){
            returnValues.show.push("creditInformation");
            returnValues.show.push("insuranceInformation");
            returnValues.hide.push("creditCompanies");
            returnValues.hide.push("CBHIInformation")
        }
        else if(patient["CreditInformation"] && patient["CreditInformation"].value && patient["CreditInformation"].value == "CBHI"){
            returnValues.show.push("CBHIInformation");
            returnValues.hide.push("insuranceInformation");
            returnValues.hide.push("creditCompanies");
        }
        else {
            returnValues.hide.push("insuranceInformation");
            returnValues.hide.push("creditInformation");
            returnValues.hide.push("creditCompanies");
            returnValues.hide.push("CBHIInformation");
           
        }
        return returnValues;
    }
};
