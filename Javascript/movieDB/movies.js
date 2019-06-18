var movie1={};
movie1.title="Matrix";
movie1.rating=5;
movie1.hasWatched=true;

var movie2={};
movie2.title="Shrek";
movie2.rating=4.5;
movie2.hasWatched=true;

var movie3={};
movie3.title="Barbie";
movie3.rating=4;
movie3.hasWatched=false;

var movies=([movie1,movie2,movie3]);

//x is the object containig the info of a single movie
/*
movies.forEach(function(x){
    var watched="";
    if(x.hasWatched===true){
        seenOrNot="seen";
    } else seenOrNot="not seen";   
    
    console.log("You have "+seenOrNot+" \""+x.title+"\" - "+x.rating+" stars")
})
*/
//alternative solution
movies.forEach(function(movie){
    console.log(buildString(movie));
})



function buildString(x) {
    var watched = "";
    if (x.hasWatched === true) {
        seenOrNot = "seen";
    }
    else
        seenOrNot = "not seen";
    var string="You have "+seenOrNot+" \""+x.title+"\" - "+x.rating+" stars"    
    return string;
}

