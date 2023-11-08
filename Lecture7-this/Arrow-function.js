const user = {
    salute: "",
    greet: function(){
        this.salute = 'Hello',
        console.log(this.salute);

        // changing to arrow function - same as its surrounding environment
        const setFrench = (newSalute) =>{
            this.salute = newSalute;
        }
        setFrench('Bonjour');
        setFrench.bind(this, 'Bonjour')();
        setFrench.call(this, 'Bonjour');
        setFrench.apply(this, ['Bonjour']);
        console.log(this.salute);
    }

}
user.greet();

// Another example on arrow function
function foo(){
    console.log(this);
}

const baz = (a,b) => console.log(this,a,b);
baz.call('123', 'Hi','Sue');  // output will be [Window, Hi, Sue] , this won't change to 123 because of arrow function

