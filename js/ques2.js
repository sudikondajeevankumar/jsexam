var Integers = function(x, y, max) {
    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    }
    let arr = [],res = []
    let maxi = x===1 ? 0 : Math.round(getBaseLog(x,max-1))
    let maxj = y===1 ? 0 : Math.round(getBaseLog(y,max-1))
    for(i=0;i<=maxi;i++) {
        for(j=0;j<=maxj;j++) {
            let sum = Math.pow(x,i) + Math.pow(y,j)
            if(sum<=b) {
                arr.push(sum)
            } else {break}
        }
    }
    for(i=0;i<arr.length;i++) {
        if(res.includes(arr[i])) {continue};
        res.push(arr[i])
    }
     console.log(res);
    return res
   
};
console.log(Integers(10,10));


