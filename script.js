/*
Background Gradients From -- 
https://uigradients.com
*/


var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;


input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);


option_from = inputType.value;
option_to   = resultType.value;


function myResult(){



	option_from = inputType.value;
	option_to = resultType.value;


	if(option_from === "meter" && option_to==="kilometer"){
		//this is meter to kilometer formula 
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "meter" && option_to==="Centimeter"){
		//this is meter to Centimeter formula 
		result.value = Number(input.value) * 100;
	}else if(option_from === "meter" && option_to==="decimeter"){
		//this is meter to decimeter formula 
		result.value = (input.value) * 10;
	}else if(option_from === "meter" && option_to==="Millimeter"){
		//this is meter to Millimeter formula 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "meter" && option_to==="meter"){
		//this is meter to meter formula 
		result.value = (input.value) 
		
    
	}



	if(option_from === "kilometer" && option_to==="meter"){
		//this is kilometer to meter formula 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "kilometer" && option_to==="Centimeter"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 100000;
	}else if(option_from === "kilometer" && option_to==="Decimeter"){
		//this is kilometer to Decimeter formula 
		result.value = Number(input.value) * 10000;
	}else if(option_from === "kilometer" && option_to==="Millimeter"){
		//this is kilometer to Millimeter  formula 
		result.value = Number(input.value) * 1000000;	
	}else if(option_from === "kilometer" && option_to==="kilometer"){
		//this is kilometer to kilometer formula 
		result.value = input.value
	}

	if(option_from === "Centimeter" && option_to==="kilometer"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 0.00001;
	}else if(option_from === "Centimeter" && option_to==="meter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "Centimeter" && option_to==="Decimeter"){
		//this is Centimeter to Decimeter formula 
		result.value = Number(input.value) * 0.1;
	}else if(option_from === "Centimeter" && option_to==="Millimeter"){
		//this is Centimeter to Millimeter formula 
		result.value = Number(input.value) * 10;	
	}else if(option_from === "Centimeter" && option_to==="Centimeter"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
	}
	
	
    if(option_from === "Decimeter" && option_to==="kilometer"){
		//this is Decimeter to centimeter formula 
		result.value = Number(input.value) * 10;
	}else if(option_from === "Decimetr" && option_to==="meter"){
		//this is Decimeter to meter formula 
		result.value = Number(input.value) * 0.1;	
    }else if(option_from ==="Decimetr" && option_to==="Centimetr") {
        //this is Decimeter to Centimeter formula 
		result.value = Number(input.value) * 10;	
    }else if(option_from ==="Decimetr" && option_to==="Millimeter") {
        //this is Decimeter to Millimeter formula 
		result.value = Number(input.value) * 100;
	}else if(option_from === "Decimeter" && option_to==="Decimeter"){
		//this is Decimeter to Decimeter formula 
		result.value = input.value	
    }
    
    if(option_from === "Millimeter" && option_to==="Decimeter"){
		//this is Millimeter to Decimeter formula 
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "Millimetr" && option_to==="meter"){
		//this is Millimeter to meter formula 
		result.value = Number(input.value) * 0.001;	
	}else if(option_from === "Millimetr" && option_to==="Kilometer"){
		//this is Millimeter to Kilometer formula 
		result.value = Number(input.value) * 0.000001;	
	}else if(option_from === "Millimetr" && option_to==="Centimeter"){
		//this is Millimeter to Centimeter formula 
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "Millimetr" && option_to==="Millimeter"){
		//this is Millimeter to Millmeter formula 
		result.value = (input.value) 
    }		
	
	
	
}

