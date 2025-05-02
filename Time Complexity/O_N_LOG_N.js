let Main = (n) =>{
    for(let i = 1; i<=n;i++){ // O(N)
        let x=i;
        while(x>0){ // O(log(N))
            let digit = x%10;
            console.log(digit);
            x = Math.floor(x / 10);
            console.log(x);
        }
    }
}
Main(10)      //TODO O(NlogN) time complexity