const animal = {
    eats:true,
};

const rabbit ={
    jump:true,
};

//console.log(rabbit);
rabbit.__proto__ =animal; // [[Prototype can be set using __proto__]]
console.log(rabbit);