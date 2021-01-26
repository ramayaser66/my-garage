'use strict'; 


var carForm = document.getElementById('myForm'); 
var clearButton = document.getElementById('clear'); 
 var dataArray = []; 






function Form( carName, type, year){
    this.carName = carName;
    this.carType = type;
    this.yearModel = year;
    dataArray.push(this); 

}


Form.prototype.rnderTable = function



function formData (event){
    event.preventDefault();


    var car = event.target.carName.value; 
    console.log(car); 

    var carCategory = event.target.modelCategory.value; 
    console.log(carCategory); 
    var carModelYear = event.target.yearModel.value; 
    console.log(carModelYear); 
    


   new Form(car, carCategory, carModelYear ); 
    console.log(dataArray); 

}

function saveData(){
    localStorage.setItem('myForm', JSON.stringify(dataArray)); 
}




function clearData (event){
    event.preventDefault();
   var storage = JSON.parse( localStorage.getItem('myForm')); 
}











carForm.addEventListener('submit', formData); 
clearButton.addEventListener('clear', clearData ); 
saveData(); 


