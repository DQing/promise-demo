var p1 = new Promise(function(resolve, reject) {
    throw 'Uh-oh!';
});

p1.catch(function(e) {
    console.log(e); // "Uh-oh!"
});