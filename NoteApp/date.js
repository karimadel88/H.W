const f1 = function (a,b){
    return arguments[a]+arguments[b];
}

const f2 = (a,b) => arguments[0]+arguments[1];
console.log(f1());
console.log(f2(5,6))