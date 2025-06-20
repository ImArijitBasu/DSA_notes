var maxDistance = function(s, k) {
    let ans = 0 , n = 0 , so = 0 , e = 0, w = 0;
    for(let i = 0; i<s.length; i++){
        const c = s[i];
        if(c === 'N') n++;
        else if(c === 'S') so++;
        else if(c === 'E') e++;
        else if(c === 'W') w++;

        const x = Math.abs(n - so);
        const y = Math.abs(e - w);
        const MD = x + y;
        const dis = MD + Math.min(2*k , i + 1 - MD );
        ans = Math.max(ans , dis);
    }
    return ans
};