/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
    // s = s.reverse();
    // 투 포인터.
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // let temp = s[left]
        // s[left] = s[right];
        // s[right] = temp;
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};