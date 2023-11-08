const user = {
    salute: "",
    greet: function(){
        const self = this;
        this.salute = 'Hello',
        console.log(self.salute);

        const setFrench = function(newSalute){
            self.salute = newSalute;
        }
        setFrench('Bonjour');
        console.log(this.salute); // 'Bonjour'
        setFrench.bind(this, 'Bonjour')();
        setFrench.call(this, 'Bonjour');
        setFrench.apply(this, ['Bonjour']);
       
    }

}
user.greet();