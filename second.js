var patientInfo = "John";

function nameToChange(){
	var patientInfoCorrected = "Johnson";
	var displayMyPatientInfo = function(){
		var test1 = document.getElementById("test").innerHTML.value;
		document.getElementById("test").innerHTML = ("Name changed to "+"<b>"+patientInfoCorrected + " From " + patientInfo+"</b>"+" on "+Date());
	}
	displayMyPatientInfo();
}


var TryThisForProto = function(){
	this.someName = "Inserting some value to this function";
}

TryThisForProto.prototype.toPrintName = function(){
	document.write("This is written in prototype function")
	document.write(this.someName)
}

var someOtherVariableName = new TryThisForProto();

someOtherVariableName.toPrintName();
