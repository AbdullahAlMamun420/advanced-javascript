const nums=[5,32,56,3,43,55,45,65];

// const result=nums.slice(2,5)//index 2 thake index5 er age porjonto sorabe but array poriborton korbena

const result=nums.splice(2,4,33,54)//2 thake 4 ta element bad dibe ,array poriborton korbe 33 54 add korbe
console.log(result)
console.log(nums)

const arrayjoin=nums.join(" ")

console.log(arrayjoin)