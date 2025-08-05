function secondlargest(arr){
if(arr.length <2){
    return "Array  should have atleasrt 2 elements"
}

    let firstlargest=-Infinity;
    let secondlargest=-Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstlargest){
            secondlargest=firstlargest;
            firstlargest=arr[i]
        }
        else if(arr[i] >secondlargest && arr[i] !=firstlargest){//check the duplicate number 
            secondlargest=arr[i]
        }
    }
    return secondlargest;
}
let arr=[-1,2,-21,-23,-23]
console.log(secondlargest(arr));
