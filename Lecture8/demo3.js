const animal = {
    eats:true,
    walk: function(){
        console.log('animal walking....');
    }
};


let rabbit = {
    jump:true,
}
 rabbit = Object.create(animal);  // this creates an empty object, sets [[Prototype]] to animal and assigns empty object to rabbit
 //rabbit.walk();
 rabbit.jump =true;
 console.log(rabbit.walk());//, rabbit.eats, rabbit.jump);

