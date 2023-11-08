let user = {
    firstname:'John',
    sayHi: function() {// a function inside an object = method
        console.log(`${this.firstname}`);
}
}
user.sayHi();node