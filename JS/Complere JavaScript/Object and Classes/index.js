//Normal object
const obje = {
    fullName : "Sakshi Jinnewar",
    printName: function(){
        console.log("My name is ", this.fullName);
    },
};

obje.printName();

//JS object have a special property called as prototype which contain properties and functions to implement on an onject
//prototype is itself a object


//Similarly array contains a prototype which contains all properties and functions to implement on array
//that means prototype contains inherited method and functions for that particy=ular data structure

//WE can mae our own prototype as follow
const employee={
    taxCal: function(){
        console.log("Tax rate is 10%")
    },

}

const sakshi={
    salary: 50000,

};

sakshi.__proto__ = employee;  //setting protoype of sakshi equal to employee so that sakshi can use employee's taxCalc function
//In this way we inherited employee's methods into sakhi object
//prototypoe is a  reference to an abject


//Suppose object has a method same as method in its prototype then priority will be of its own method




//Class in JS



