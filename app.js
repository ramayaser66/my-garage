'use strict';


var carForm = document.getElementById('myForm');
var clearButton = document.getElementById('clear');
var table = document.getElementById('myTable');
var dataArray = [];
//  var imgArray =[]; 






function Form(carName, type, year, img) {
    this.carName = carName;
    this.carType = type;
    this.yearModel = year;
    this.img = img;
    this.imgArray = [];
    dataArray.push(this);

}


Form.prototype.renderTable = function () {

    var rawOne = document.createElement('tr');
    table.appendChild(rawOne);
    var cellOneA = document.createElement('td');
    cellOneA.textContent = this.img;
    rawOne.appendChild(cellOneA);


    var cellOneB = document.createElement('td');
    cellOneB.textContent = 'car name:' + this.carName;
    rawOne.appendChild(cellOneB);






}



function formData(event) {
    event.preventDefault();


    var car = event.target.carName.value;
    console.log(car);

    var carCategory = event.target.modelCategory.value;
    console.log(carCategory);
    var carModelYear = event.target.yearModel.value;
    console.log(carModelYear);



   var object = new Form(car, carCategory, carModelYear);
   object.renderTable();
    console.log(dataArray);

    saveData();

}

function saveData() {
    localStorage.setItem('myForm', JSON.stringify(dataArray));
}



function data(){

    for (var index = 0; index < dataArray.length; index++) {
        var rawOne = document.createElement('tr');
        table.appendChild(rawOne);
        var cellOneA = document.createElement('td');
        cellOneA.textContent = dataArray[index].img;
        rawOne.appendChild(cellOneA);
    
    
        var cellOneB = document.createElement('td');
        cellOneB.textContent = 'car name:' + dataArray[index].carName;
        rawOne.appendChild(cellOneB);
    
        var cellOneC = document.createElement('td');
        cellOneC.textContent = 'car model:' + dataArray[index].yearModel;
        rawOne.appendChild(cellOneC);
    
        
    }
  
}



function checkStorage() {
    if (localStorage.getItem('myForm')) {
        var storage = JSON.parse(localStorage.getItem('myForm'));
        // call the render function 
        data(); 
    }


}







function clearData(event) {
    event.preventDefault();
    localStorage.clear();
}





// saveData(); 

carForm.addEventListener('submit', formData);
clearButton.addEventListener('click', clearData);



