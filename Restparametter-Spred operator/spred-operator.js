function fun5(a,s,d,f,g,h,j){
    console.log(a,s,d,f,g,h,j);
}let g=["ananan",4567,5678,5678,5678,5678,56789]
fun5(...g)



function fun(){
    console.log("anand");
    return function fun1(){
        console.log("suresh");
        return function fun2(){
            console.log("shejul");
            return function fun3(){
                console.log("fakirrao");
            }
        }
    }
}fun()()()()