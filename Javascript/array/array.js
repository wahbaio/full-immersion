//take an array x and print elements in reverse order
function printReverse(x){
    for(i=x.length;i>=0;i--){
    console.log(x[i]);
    }
}

//take an array x and return true if all elements are the same
function isUniform(x){
    var same=true;
    
//y is the single element of the array
    x.forEach(function(y){
            if(y!==x[0]){
//exit at the first occurrence if false
            same=false;
        }})
     
    return same;   
    }

/*
function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}
*/

//take an array x and sum the elements
function sumArray(x){
    var sum=0;
    for(i=0;i<x.length;i++){
    sum+=x[i];
}
    console.log(sum);
}

//take an array x and find the greatest number
function max(x){
    var max=0;
    for(i=0;i<x.length;i++){
    if(x[i]>max){max=x[i]}
}
    console.log(max);
}
