class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsHash = new Map<number,number>();
        const result : number[] = [] 

        for(let i = 0; i<nums.length;i++){
            const num = nums[i];
            const need = target - num

            if(numsHash.has(need)){
                const firstNum = i;
                const secondNum = numsHash.get(need);
                result.push(firstNum,secondNum)
                return result
            } else{
                numsHash.set(num,i)
            }
        }
        return result
    }
}
