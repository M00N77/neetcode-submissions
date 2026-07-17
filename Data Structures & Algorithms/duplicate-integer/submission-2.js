class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numbers = {}
        for(let i = 0;i<=nums.length;i++){
            if(numbers[nums[i]]){
                numbers[nums[i]]
                console.log(numbers)
                return true
                console.log(numbers)
            } else{
                numbers[nums[i]]=1
            }
        }
        return false
    }
}
