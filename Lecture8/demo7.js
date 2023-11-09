// animal has methods
let animal = {
    walk: function() {
    if (!this.isSleeping) {
    //alert(`I walk`);
    }
    },
    sleep: function() {
    this.isSleeping = true;
    }
    };
    const rabbit = Object.create(animal);
    rabbit.name = "White Rabbit";
    // modifies rabbit.isSleeping
    rabbit.sleep();
    console.log(rabbit);
    console.log((rabbit.isSleeping)); // true
    console.log(animal.isSleeping); // undefined (no such property in the prototype)