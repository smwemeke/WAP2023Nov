function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if(password == "rockstar") ok();
    else fail();
}

    let user = {
        name: 'john',

        loginOk() {
            console.log(this);
            console.log(`${this.name} logged in`);
        },

        loginFail() {
            console.log(this);
            console.log(`${this.name} failed to login` );
        },

};
//askPassword(user.loginOk, user.loginFail);

// using wrapper
askPassword(function() {user.loginOk()}, function() {user.loginFail()});

//using call + wrapper
askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));

//using apply + wrapper
askPassword(() => user.loginOk.apply(user) , () => user.loginFail.apply(user));

//using bind + wrapper
askPassword(() => user.loginOk.bind(user) , () => user.loginFail.bind(user));