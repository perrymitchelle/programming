console.log("Hello world");

const y = 2.5
const x = "Boris Johnson"
const w = false
let f;

// const x = 5
console.log("type of y =" ,typeof y)
console.log("type of x", typeof x)
console.log("type of w", typeof w)
console.log("type of f", typeof f)
console.log("type of s", typeof s)

function display() {
const dateofbirth = document.querySelector
document.querySelector('#dob').value = "2023-02-20";
}
//let document.getElementById('dob').value = "2023-02-20";
//primitive data types
//numbers
//strings
//Boolean
//null
//Array
let myArr = ["mitchell", "andrea", "nicarno", 2,4]
console.log(myArr[2])
console.log(myArr[myArr.length-1])
console.log(typeof myArr)
//unshift Array method
console.log("before")
console.log(myArr)

myArr.unshift('mary')
console.log('after')
console.log(myArr)

console.log([...myArr, 'mary'])

const cities = ["tokyo", "cairo", "los angeles", "paris", "seattle"]
console.log("before slicing", cities)
const newCities = cities.slice(2)
console.log("after slicing", newCities)

const startEndoption = cities.slice(2,4)
console.log("start and end option", startEndoption)

//splicing
const months =["Jan","March", "April", "June"]
console.log("original array", months)
months.slice(1, 0, "Feb")
console.log("splice with three param", months)
months.splice(4, 0, "May")
console.log("adding may", months)
months.splice(6, 5, "July", "Aug", "Sept", "Oct", "Nov", "Dec")
console.log("Remaining months", months)

//looping through an array
const numbers =[1,2,3,4,5,6,7,8,9,10]

// for(let i=0; i<numbers.length; i++){
//   if(numbers[1] % 3 === 0){
//        console.log(numbers [i])
//    }
// }

const myString = "lois"
// console.log(myString.toUpperCase())

function addition(){
    let addNum = 4+3
}

function onlyNum(arr) {
    let newArr =[]
    for(let i=0; i <arr.length; i++){
        if(typeof arr[i] === 'number'){
            newArr.unshift(arr[i])
        }
    }
    return newArr
}
console.log(onlyNum(myArr))

function filterARR(arr){
    const newArr = arr.filter((item)=>typeof item ==='number')
}