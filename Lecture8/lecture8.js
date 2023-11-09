// animal has methods
let animal = {
    walk: function() {
    if (!this.isSleeping) {
    alert(`I walk`);
    }
    },
    sleep: function() {
    this.isSleeping = true;
    }
    };
    let rabbit = Object.create(animal);
    rabbit.name = "White Rabbit";
    // modifies rabbit.isSleeping
    rabbit.sleep();
    console.log("Rabbit: " + rabbit.isSleeping); // true
    animal.sleep();
    console.log("Animal: " + animal.isSleeping); // undefined (no such property in the prototype)