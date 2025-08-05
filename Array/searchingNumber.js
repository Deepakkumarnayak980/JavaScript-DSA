function serchingNumbers(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return`index of ${arr[i]} is ${i}`
        }
    }
    return -1;
}
let arr=[1,2,3,5,7,4];
console.log(serchingNumbers(arr,8));
