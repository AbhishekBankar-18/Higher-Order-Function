let cl= console.log;
//lastIndexNumber = array.length - 1
// To create an array 'doubleAges' in which we have to double the value of elements in 'ages' array & push the elements of 'ages' array in 'doubleAges'.
let ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];
// let doubleAges = [];
//1. for loop
// for(let i = 0; i < ages.length; i++){
//     doubleAges.push(ages[i] * 2)
// }
// Higher order Function >> A function which accpets another function as parameter/ argument
// callBack function >> a function which is passed as a parameter/ argument to another function

// 2. forEach >> 
//arrayName.forEach(callBackFunction(parameter){
//   //it will print each & every element of array   
// })

// ages.forEach(function(age){
//     doubleAges.push(age * 2)
// })

// 3. forEach using arrow (=>) function
// ages.forEach((age) => {
//     doubleAges.push(age * 2)
// })
// cl(doubleAges);

// 1. Map Method of Higher order function
// it returns a new array
// length of new array === length of given array
// useCase of map method >> 
// if you have a given array & by using it, you want to create a new array with same functionality to each & every element of given array

 ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];
//  arrayName.map(callBackFunction(para){
//     return  para it gives each & every value of given array
//  })

// let doubleAges = ages.map(function(age){
//     return age * 2
// })

// let doubleAges = ages.map((age)=>{
//     return age * 2
// })

let doubleAges = ages.map (age => age * 2)
cl(doubleAges);

// to get square root
ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];
// let sqrtAges = [];

// for(i = 0; i < ages.length; i++){
//     sqrtAges.push(Math.sqrt(ages[i]))
// }

// ages.forEach(function(age){
//     sqrtAges.push(Math.sqrt(age))
// })

// let sqrtAges = ages.map(function(age){
//     return Math.sqrt(age)
// }) 

let sqrtAges = ages.map(age => Math.sqrt(age))
 cl(sqrtAges);

 let companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// To write only names of companies in new array

// let compayNames = [];

// for(let i = 0; i < companies.length; i++){
//     compayNames.push(companies[i].name)
// }

// companies.forEach(function(comp){
//     compayNames.push(comp.name)
// })

// companies.forEach(comp => compayNames.push(comp.name))

// let compayNames = companies.map(function(comp){
//     return comp.name
// })

// let compayNames = companies.map(comp => {
//     return comp.name
// })

let compayNames = companies.map(comp => comp.name)

cl(compayNames);

// To change the name of key and write new object in given array

//[{compName : 'Company One', start : 1981}, {compName : 'Company two', start : 1992}]

let compStart = [];
// for (let i = 0; i < companies.length; i++){
//     compStart.push({
//         compName : companies[i].name,
//         start : companies[i].start
//     })
// }

// companies.forEach(function(comp){
//     compStart.push({
//         compName : comp.name,
//         start : comp.start
//     })
// })

// companies.forEach(comp => 
//     compStart.push({
//         compName : comp.name,
//         start : comp.start
//     })
//     )

// compStart = companies.map(function(comp){
//     return {
//         compName : comp.name,
//         start : comp.start
//     }
// })

compStart = companies.map(comp => ({
    compName : comp.name,
       start : comp.start
}))
cl(compStart);

 companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let compDuration = [];

// for( let i = 0; i < companies.length; i++){
//     compDuration.push({
//         compName : companies[i].name,
//         duration : companies[i].end - companies[i].start
//     })
// }

// companies.forEach(function(comp){
//     compDuration.push({
//         compName : comp.name,
//         duration : comp.end - comp.start   
//     })
// })

// companies.forEach(comp => compDuration.push({
//     compName : comp.name,
//       duration : comp.end - comp.start
// }))

// compDuration = companies.map(comp => {
//     return {
//         compName : comp.name,
//         duration : comp.end - comp.start
//     }
// })

compDuration = companies.map(comp => ({
     compName : comp.name,
     duration : comp.end - comp.start
 }))
 cl(compDuration);

// filter

// use cases of filter
// If you have given a array with one given condition 
// you have to create a array of element (of given array), whoose elements satrify the given condtion
// filter returns array
// length of new array is may or may not be qual to given array

 ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];

//  let adultAges = [];
//  for(let i = 0; i <= ages.length; i++){
//     if(ages[i] >= 18){
//         adultAges.push(ages[i])
//     }
//  } 

// ages.forEach(age => {
//     if(age >= 18){
//         adultAges.push(age)
//     }
// })

// let adultAges = ages.filter(function(age){
//     if(age >= 18){
//         return true
//     }else{
//         return false
//     }
// })

// let adultAges = ages.filter(function(age){
//     return age >= 18;
// })

let adultAges = ages.filter(age => age>= 18)

 cl(adultAges);

 companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//  let compRetail = [];
//  for(let i = 0; i < companies.length; i++){
//     if(companies[i].category.toLowerCase().trim() === 'retail'){
//         compRetail.push(companies[i])
//     }
//  }

// companies.forEach(comp=> {
//     if(comp.category.toLowerCase().trim() === 'retail'){
//         compRetail.push(comp)
//     }
// })

// let compRetail = companies.filter( comp => {
//     return comp.category.toLowerCase().trim() === 'retail'
// })

 let compRetail = companies.filter( comp => comp.category.toLowerCase().trim() === 'retail')
 cl(compRetail);

//atleast for 10

let compAtLeast10 = [];

// for(let i = 0; i < companies.length; i++){
//     if(companies[i].end - companies[i].start <= 10){
//         compAtLeast10.push(companies[i])
//     }
// }

// companies.forEach(comp => {
//     if(comp.end - comp.start <= 10){
//         compAtLeast10.push(comp)
//     }
// })

compAtLeast10 = companies.filter(comp =>comp.end - comp.start <= 10 )
 cl(compAtLeast10);
 companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

 // [{compName : "Company one", duration 22}] and who started in 80s (1980 to 1989)

//  let comp80s = [];

//  companies.forEach(comp => {
//     if(comp.start >= 1980 && comp.start <= 1989){
//         comp80s.push({
//             compName : comp.name,
//             duration : comp.end - comp.start
//         })
//     }
//  })

let comp80s = companies.filter(comp=>comp.start >= 1980 && comp.start <= 1989). map(comp=>({
            compName : comp.name,
            duration : comp.end - comp.start
}))
cl(comp80s);

//[{compName : "Company Name", lifeSpan : "1983 - 2000"}] and comp.categorty === finance

// let compFinance = [];
// for(let i = 0; i <  companies.length; i++){
//     if(companies[i].category.toLowerCase().trim() === 'finance'){
//         compFinance.push({
//             compName : companies[i].name,
//             lifeSpan : `${companies[i].start} - ${companies[i].end}`
//         })
//     }
// }

// companies.forEach(comp=>{
//     if(comp.category.toLowerCase().trim() === 'finance') {
//         compFinance.push({
//             compName : comp.name,
//             lifeSpan : `${comp.start} - ${comp.end}`
//         })
//     }
// })

let compFinance = companies
                    .filter(comp => comp.category.toLowerCase().trim() === 'finance' )
                    .map( comp => ({compName : comp.name, lifeSpan : `${comp.start} - ${comp.end}`}))
cl(compFinance);

// [{compName : 'Company Name', category : 'finance'}] && comp which run atleast for 10 years

// let compRunAt10 = [];

// for(let i = 0; i < companies.length; i++){
//     if(companies[i].end - companies[i].start >= 10){
//         compRunAt10.push({
//             compName : companies[i].name,
//             category : companies[i].category
//         })
//     }
// }

// companies.forEach(comp => {
//     if(comp.end - comp.start >= 10){
//         compRunAt10.push({
//             compName : comp.name,
//             category : comp.category
//         })
//     }
// })

//  let compRunAt10 = companies.filter(comp =>comp.end - comp.start >= 10){

//  }

// cl(compRunAt10);

//find method
// use case of find method
// we have given an array with one condition
// and we know only one object can pass the condition
// find method writes object

companies = [
    { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: "2", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: "4", category: "RetAil", start: 1989, end: 2010 },
    { name: "Company Five", id: "5", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: "8", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: "9", category: " retail ", start: 1981, end: 1989 }
];
 let givenId = 4;
 let getObj; 

// companies.forEach(comp => {
//     if(Number(comp.id) === givenId){
//         getObj = comp
//     }
// })

// getObj = companies.find(comp => {
//     return +comp.id === givenId
// })

getObj = companies.find(comp => +comp.id === givenId)

cl(getObj);

// reduce

ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];

// let totalAges = 0;
// ages.forEach(age => {
//     // totalAges = totalAges + age;
//     totalAges += age;
// })

 let totalAges = ages.reduce((accum,nextValue) => accum = accum + nextValue)
cl(totalAges);

//Muliply 

// let multiAges = 1;
// ages.forEach(age => multiAges *= age);

let multiAges = ages.reduce((multi, nextAge) => multi *= nextAge)

cl(multiAges);

companies = [
    { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: "2", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: "4", category: "RetAil", start: 1989, end: 2010 },
    { name: "Company Five", id: "5", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: "8", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: "9", category: " retail ", start: 1981, end: 1989 }
];

//[{compName : "Company One", duration : 22}]
let compNameDur = companies.reduce((accum, comp)=> {
    accum.push({
        compName : comp.name,
        duration : comp.end - comp.start
    });
    return accum
}, [])
cl(compNameDur);

let totalAgesOfComp = companies.reduce((total, comp) => {
    return total += comp.end - comp.start
},0)
cl(totalAgesOfComp);
