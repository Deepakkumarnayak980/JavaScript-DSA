function negativeNumber(nums){
    let count =[]
    for(let i=0;i<nums.length;i++){
        if(nums[i] <0){
           count ++
        }
    }
    return count
}

let nums=[-1,2,-3,-34,4,-5,6]
console.log(negativeNumber(nums));

