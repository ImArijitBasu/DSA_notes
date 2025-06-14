function fun(obj){
    obj.value = 20
}

function main(){
    let obj = { value: 10};
    fun(obj)
    console.log(obj.value);

}
main()

// void function(int * &p){
//     p = null;
// }
// int main(){
//     int val = 10;
//     int* ptr =& val;
//     function(ptr);
//     cout<<val<<endl;
//     return 0;
// }