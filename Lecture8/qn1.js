class User {
    static name = 'Default';
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
 
    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
        } else {
            this._name = value;
        }
    }
}
let john = new User("John");
console.log(john);
