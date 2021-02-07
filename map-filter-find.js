const numbers=[12,34,54,65,66]
// const square=[];
// for(let i=0;i<numbers.length;i++){
//     const number=numbers[i];
//     const result=number*number;
// square.push(result)
// }
// console.log(square)


// const result=numbers.map(function(element){
//     // console.log(element,index,array)
//    return element*element;
  
// })

// const result=numbers.map(x=>x*x)//aray dibe
// console.log(result)


const result=numbers.filter(x=>x>15)//array dibe
console.log(result);

const number=numbers.find(x=>x>15);//ekta value return korbe;
console.log(number)
