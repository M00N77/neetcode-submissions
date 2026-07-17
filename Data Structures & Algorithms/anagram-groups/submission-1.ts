class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]) {
        const list = new Map<string,string[]>();
        for(let i = 0; i<strs.length;i++){
            const word : string = strs[i]
            const sortWord = word.split('').sort().join('');
            if(list.has(sortWord)){
                list.set(sortWord,[...list.get(sortWord),word])
            } else { 
                list.set(sortWord,[word])
            }
        }
        return [...list.values()];
    }
}
