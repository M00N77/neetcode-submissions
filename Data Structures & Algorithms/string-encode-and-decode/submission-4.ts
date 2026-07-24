class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = '';
        for(const word of strs){
            result+=`&${word.length}&${word}`
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = [];
        let i=0;
        while(i<str.length){
            const symbol = str[i];
            if(symbol==='&'){
                const start = i;
                const end = str.indexOf('&',i+1);
                const length=Number(str.slice(start+1,end));
                const word = str.slice(end+1,end+length+1)
                result.push(word)
                i = end+length+1;
            } else {i++}
        }
        return result;
    }
}