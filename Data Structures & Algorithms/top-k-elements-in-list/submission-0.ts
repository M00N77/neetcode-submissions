class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numsList = new Map<number,number>();
        
        for(let i = 0;i<nums.length;i++){
            const number = nums[i];
            if(numsList.has(number)){
                numsList.set(number, numsList.get(number) + 1);
            } else { 
                 numsList.set(number,1)
            }
        }

        const buckets:number[][] = Array.from({length:nums.length + 1},()=>[]);
        for(const [num,freq] of numsList){
            buckets[freq].push(num)
        };
        const result =[];
        let counter = k;
        for(let freq = nums.length; freq>=0;freq--){
            for(const num of buckets[freq]){
                if(result.length < k){
                    result.push(num)
                } 
            }
        }
        return result
    }
}
