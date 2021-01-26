'use strict'; 


var carForm = document.getElementById('myForm'); 



function form (event){
    event.preventDefault(); 

    var car = event.target.carName.value; 
    console.log(car); 

    // var carCategory = event.target.modelCategory.value; 
    // console.log(carCategory); 
}








carForm.addEventListener('click', form);
