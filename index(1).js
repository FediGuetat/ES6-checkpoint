/*______________________________________________________________________ 
var pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  function getAge(pet) {
    return new Date().getFullYear() - pet.bornOn;
  }
*/



/*_________________________________________________________________________ 
var petsWithAge = [];
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    pet.age = getAge(pet);
  
    petsWithAge.push(pet);
  }
 console.log(petsWithAge);

 /*_________________________________________________________________________ 


  var dogs = [];
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.type === "dog") {
      dogs.push(pet);
    }
  }
  console.log(dogs);


/*_________________________________________________________________________ 

  var jasper;
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.name === "Jasper") {
      jasper = pet;
    }
  }
  console.log("Jasper is " + jasper.age + " years old");


/*_________________________________________________________________________ 


const jasper;
 return pets.find((pet)=>{
    return pet.name==name;
 })
 console.log("Jasper is " + jasper.age + " years old");  


 
/*_____________________________________________________________________________________ */

let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];
const getAge = (pet) => { return new Date().getFullYear() - pet.bornOn };



pets.forEach((pet) => { pet.age = getAge(pet) })
console.log(pets)



const dogs = pets.filter(pet => pet.type === "dog");
console.log(dogs)



let Jasper = pets.find(pet => pet.name === "Jasper")
console.log(`Jasper 3omrou ${ Jasper.age } snin`)



/*______________________________________________________________________________________*/