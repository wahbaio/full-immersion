function isEven(number){
    if(number%2===0){
        return true;
    } else {return false;}
}

function factorial(number){
    var factorial=1;
    for(i=1;i<=number;i++){
        factorial=factorial*i;}   
    return factorial;
}

function kebabToSnake(string){
    var snake=string.replace(/-/gi,"_");
    return snake;
}

