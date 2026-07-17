class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
         const sortWords = new Map<string,string[]>();
         for(let word of strs){
            const sorted = word.split('').sort().join('');
            if(sortWords.has(sorted)){
                sortWords.get(sorted).push(word)
            } else { 
                sortWords.set(sorted,[word])
            }
         }
        return [...sortWords.values()]
    }
    
}
