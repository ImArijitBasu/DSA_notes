let Main = (n) =>{ 
    for(let i = 0; i<n;i++){ //TODO O_N*N time complexity
        console.log("hello");{
            for(let j = 0; j<i;j++){
                console.log("world");
            }
        }
    }

}
Main(10)