const animal = {
    eats:true,
    
};


let rabbit = {
    jump:true,
}
 rabbit = Object.create(animal);  // this creates an empty object, sets [[Prototype]] to animal and assigns empty object to rabbit
 console.log(rabbit);
