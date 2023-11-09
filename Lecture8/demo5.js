const animal = {
    eats:true,
    walk: function(){
        console.log('animal walking....');
    }
};

const  rabbit = Object.create(animal);  // this creates an empty object, sets [[Prototype]] to animal and assigns empty object to rabbit
 rabbit.jump = true;

 const longEar = Object.create(rabbit);
 longEar.earLength = 90;

 longEar.walk = function(){
    console.log('LongEar Walking')
 }

 longEar.walk();
 console.log(longEar.eats, longEar.jump);
