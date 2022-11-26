const num= [4,7, 8,2,3,9]
const output = [];

// old method
//     for(let i=0 ; i<num.length ; i++){
//         let element = num[i];
//         const result=  element * element;
//         output.push(result)
//     }
// console.log(output);


const map = num.map(function(element){ // map fun three perameter elemet,index,array
      return element * element ;
})
console.log(map);

//arrow fun map method
const square= num.map(element => element * element);
console.log(square);

// filter method 
const bigger = num.filter(el => el >5) ;
console.log(bigger);