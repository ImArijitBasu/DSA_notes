let Main = (n) => {
    for(let i =1; i<Math.sqrt(n);i++){ //TODO O(SQRT(N)) time complexity
        if(n%i ==0){
            console.log(i);
            if(n/i !== i){
                console.log(n/i);
            }
        }
    }
}
Main(36)