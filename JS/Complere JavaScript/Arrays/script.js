let arr=[1,2,3,4,5];
// console.log(arr);
// console.log(arr.length);
// //typeof arr;  => object (0 index: value, 1st index: value)

// //Arrays are mutable as we can change value at any index
// //strings are immutable

// //Looping over array
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// //for of loop
// for(let ele of arr){
//     console.log(ele);
// }


// //print average of studnet's marks
// let marks=[85, 97, 44, 37, 76, 60];
// let sum=0;
// for(let mark of marks){
//     sum+=mark;
// }
// console.log("Average of student's marks is "+ sum/marks.length);

// //For a given array with prices of products. every product have 10% offer, print array after applying offre on each price of various products
//let products=[250, 645, 300, 900, 50];
// for(let j =0; j< products.length ;j++){

//     let offerPrice= (products[j]*(10/100));
//     products[j]=products[j]-offerPrice;
// }
// console.log(`Products price after applying offer : ${products}`); //updated array with offer price



// //Methods in arrays
// let p=[250, 645, 300, 900, 50];
// //push: add to end
// p.push(800,900,1000);
// console.log(p); //[250, 645, 300, 900, 50, 800, 900, 1000]

// //pop : delete from end
// p.pop();
// console.log(p);  //[250, 645, 300, 900, 50, 800, 900]

// //toString
// console.log(p.toString());

// //concat
let strArr=['A','B','C'];
// console.log(p.concat(strArr));

// //Splice method: Does changes in original method splice(add, remove, replace)
// //e.g. splice(2,2,'D','E')  => 2 is start index, 2 elemnets need to delete, D and E need to add
// //strArr will become ['A','B','D','E']
// strArr.splice(2,2,'D','E');
// console.log(strArr);
// //we can use splice for different operations like remove, delete, replace


//Practice
let companies=['Boloomberg', 'Microsoft', 'Uber','Google', 'IBM','Netflix'];
console.log(companies.shift()); //remove first comoany from array
companies.splice(2,1,'Ola');
console.log(companies); //replace Uber with ola
companies.push('Amazon')
console.log(companies); //add Amazon at end




