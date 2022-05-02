(() => {
    const Utils = {
        methods: {
            fibonacci: (n) => {
                const arr = [];
                let n1 = 0, n2 = 1, nextTerm;
                for(let i = 1; i <= n; i++){
                    nextTerm = n1 + n2;
                    n1 = n2;
                    n2 = nextTerm;
                    arr.push(n1);
                }
                return arr;
            },
            palindromo: (s) => {
                return true;
            }
        }
    }
    document.Utils = Utils;
})();