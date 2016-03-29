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
	document.write(this.someName);
}

var someOtherVariableName = new TryThisForProto();

someOtherVariableName.toPrintName();



//recurssion function

function findSolution(target) {
	function find(start, history) {
		if (start == target)
			return history;
		else if (start > target)
			return null;
		else
			return find(start + 5, "(" + history + " + 5)") ||
				find(start * 3, "(" + history + " * 3)");
	}
	return find(1, "1");
}

console.log(findSolution(24));