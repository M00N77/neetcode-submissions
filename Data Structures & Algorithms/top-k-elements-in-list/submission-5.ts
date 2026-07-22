class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numsList = new Map<number,number>();

        for(const num of nums){
            if(numsList.has(num)){
                numsList.set(num,numsList.get(num)+1);
            } else { 
                numsList.set(num,1)
            }
        }
        const bucket: number[][] = Array.from({ length: nums.length+1 }, () => []);
        for(const [num,qur] of numsList){
            bucket[qur].push(num);
        }
        const result : number[] = [];

        for(let i = nums.length;i>0;i--){
            for(const num of bucket[i]){
                result.push(num)
                if(result.length===k) return result
            }
        }
        return result
}
}