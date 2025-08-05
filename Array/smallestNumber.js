function smallestNumber(arr){
  if(arr.length===0) return null;
    let smallests=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]< smallests){
            smallests =arr[i]
        }
    }
    return smallests;
}
let arr=[]
console.log(smallestNumber(arr));
