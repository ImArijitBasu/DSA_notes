let Main = (n) => {
    while(n >0){ //TODO O(log(n)) time complexity
        let digit = n%10;
        console.log(digit);
        n = Math.floor(n / 10);
        console.log(n);
    }
}
Main(11254)