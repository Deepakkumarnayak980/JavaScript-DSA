function largestNumber(nums){
    let largest=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i] >largest){
            largest =nums[i]
        }

    }
    return largest;
}
let nums=[7,8,5,45,32,32,-56]
console.log(largestNumber(nums));
