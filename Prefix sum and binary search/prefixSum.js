function bruteForce() {
  let N = 6,
    Q = 3;
  let A = [6, 4, 2, 7, 2, 7];
  let Queries = [
    [1, 3],
    [3, 6],
    [1, 6],
  ];

  for (let i = 0; i < Q; i++) {
    let [L, R] = Queries[i];
    console.log([L, R]);
    console.log([L - 1, R - 1]);
    let sum = 0;
    for (let j = L - 1; j <= R - 1; j++) {
      sum += A[j];
    }
    console.log(sum);
  }
}
// bruteForce();

function prefixSum() {
  let N = 6,
    Q = 3;
  let A = [6, 4, 2, 7, 2, 7];
  let Queries = [
    [1, 3],
    [3, 6],
    [1, 6],
  ];

  let Prefix = [];
  Prefix[0] = A[0];

  for (let i = 1; i < N; i++) {
    Prefix[i] = A[i] + Prefix[i - 1];
  }
  for (let i = 0; i < Q; i++) {
    let [L,R] = Queries[i];
    let sum;
    if(L === 1){
      sum =Prefix[R-1]
    }
    else{
      sum = Prefix[R-1] - Prefix[L-2];
    }
    console.log(sum);
  }
}
prefixSum();

