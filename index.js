const receivesAFunction = function(callback) {
    let Spy = 'Hello';

    callback(Spy);
}

// solved first part


function returnsANamedFunction () {
//return 'before all';
     return function sally() {}
} 

//returnsANamedFunction(function() {return 'before all'; }); 

function returnsAnAnonymousFunction() {
    return function() {}
}
