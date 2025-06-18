var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let res = [];
    
    for (let i = 0; i < nums.length; i += 3) {
        let group = nums.slice(i, i + 3);
        if (group[2] - group[0] > k) return [];
        res.push(group);
    }

    return res;
};
