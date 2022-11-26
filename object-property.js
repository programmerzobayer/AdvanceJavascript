const student = [
    {id:40 ,name:"jubayer"},
    {id:23 ,name:"ratul"},
    {id:25 ,name:"Aafi"}
];

const  names = student.map(el => el.name);
const  Ids = student.map(el => el.id);
const  IdsFilter = student.filter(el => el.id < 40);
const  IdsFind = student.find(el => el.id < 40);
console.log(names);
console.log(Ids);
console.log(IdsFilter);
console.log(IdsFind);