function removeDuplicateFromSortedArray(nums){
    let x=0;

    for(let i=0; i<nums.length;i++){
        if(nums[i] > nums[x]){
            x++;
            nums[x]=nums[i]
        }
    }
    return x+1
    
}

let nums = [0,0,1,1,1,2,2,3,3,4]

let result=removeDuplicateFromSortedArray(nums)

console.log(result);

//time complexity-O(n)
//space complexity-O(1)