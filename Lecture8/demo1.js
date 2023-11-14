const animal = {
    eats:true,
};

// const rabbit ={
//     jump:true,
// };

//console.log(rabbit);

let rabbit = Object.create(animal);
//rabbit.__proto__ =animal; // [[Prototype can be set using __proto__]]

rabbit.jump = true;
console.log(rabbit);