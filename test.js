function demo(n) {
     const result = [0]

    // Iterate through numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        // Count the number of set bits by right-shifting and checking the last bit
        result[i] = result[i >> 1] + (i & 1);
    }

    return result;
};

console.log(demo(2))
