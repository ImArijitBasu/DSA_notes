var divideString = function(s, k, fill) {
    const n = s.length;
    const ans = []; 
    for(let i = 0; i < n; i += k) ans.push(s.slice(i,i+k)); 
    ans[ans.length - 1] = ans[ans.length - 1].padEnd(k, fill);
    return ans;
};