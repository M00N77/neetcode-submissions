class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsHash = new Set<number>();

        for(let i = 0; i<nums.length;i++){
            const number : number = nums[i]
            if(numsHash.has(number)){
                return true
            }
            numsHash.add(number)
        }
        return false
    }
}
