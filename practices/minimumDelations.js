function minimumDeletions(word, k) {
    const freqMap = {};
    for (let char of word) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    const freqs = Object.values(freqMap).sort((a, b) => a - b);
    const maxFreq = freqs[freqs.length - 1];

    let minDeletions = Infinity;

    for (let target = 1; target <= maxFreq; target++) {
        let deletions = 0;
        for (let freq of freqs) {
            if (freq < target) {
                deletions += freq;
            } else if (freq > target + k) {
                deletions += freq - (target + k);
            }
        }
        minDeletions = Math.min(minDeletions, deletions);
    }

    return minDeletions;
}
