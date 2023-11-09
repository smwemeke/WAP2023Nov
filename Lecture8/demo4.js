const animal = {
    name:  'Default',
    eats:true,
    walk: function(){
        console.log(`${this.name} is walking`);
    }
};

const  rabbit = Object.create(animal);  // this creates an empty object, sets [[Prototype]] to animal and assigns empty object to rabbit
 rabbit.jump = true;
 rabbit.name = 'Cotton Rabbit';


 rabbit.walk() // Output: Cotton Rabbit is walking
 const longEar = Object.create(rabbit);
 longEar.earLength = 90;

 longEar.walk();
 console.log(longEar.eats, longEar.jump);
