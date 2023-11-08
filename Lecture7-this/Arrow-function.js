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