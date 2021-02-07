const student=[
    {id:23,name:"dipjol"},
    {id:24,name:"shakib"},
    {id:44,name:"bappy"},
    {id:76,name:"manna"},
]

// const array=[];
// for(let i=0;i<student.length;i++){
//     const element=student[i];
//     const result=element.name;
//     array.push(result)
   
// }
// console.log(array)

// const studentName=student.map(x=>x.name)
// console.log(studentName)
const bigger=student.filter(s=>s.id>40)
console.log(bigger);
const ids=student.find(s=>s.id>40)
console.log(ids)