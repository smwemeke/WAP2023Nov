const animal = {
    name:  'Default',
    eats:true,
    walk: function(){
        console.log(`${this.name} is walking`);
    },
    setName(newName){
        this.name = newName;
    }
};

const  rabbit = Object.create(animal);  // this creates an empty object, sets [[Prototype]] to animal and assigns empty object to rabbit
 rabbit.jump = true;
 
 rabbit.walk(); // Default is walking
 rabbit.setName('New Cotton Rabbit');

 console.log(animal, rabbit);
