class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length!==t.length) return false
        const letters = new Map<string,number>();

        for(let i=0;i<s.length;i++){
            const letter = s[i];

            if(letters.has(letter)){
                letters.set(letter,letters.get(letter)+1);
            } else { 
                letters.set(letter,1);
            }
        }

        for(let i = 0; i<t.length;i++){
            const letter = t[i];
            if(letters.has(letter)){
                letters.set(letter,letters.get(letter)-1);
                if(letters.get(letter)===0){
                    letters.delete(letter)
                }
            } else{
                return false
                break
            }
        }

        return true
    }
}
