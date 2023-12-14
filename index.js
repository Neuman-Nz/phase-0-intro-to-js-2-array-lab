// Write your solution here!
    
let cats = [];

cats.push('Milo','Otis','Garfield');

function destructivelyAppendCat(name) {    
    cats.push('Ralph');
}

function destructivelyPrependCat(name){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.pop('Garfield');
}

function destructivelyRemoveFirstCat(name){
    cats.shift('Milo');
}

function appendCat(name){
    let newCat = [
        ...cats,'Broom'
    ]
    return newCat
}

function prependCat(name){
    
    let differentCat = [
        'Arnold',...cats
    ]
    return differentCat
   
 }
function removeLastCat(name) {
    const sliceCat = cats.slice(0, -1)
    return sliceCat
}

function removeFirstCat(name) {
    const sliceCat1 = cats.slice(1)
    return sliceCat1
}