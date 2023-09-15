
// function fun2(){
//     console.log("fun2");
// }




// function fun1(){

//     console.log('this is fun1');
//     fun2()
//     console.log('this is my fun');
// }fun1()



// function fun2(){
//     let t=10
//     let s=30
//     let r=t*s
//     console.log(r);
// }


// function fun1(){
//     let y=40
//     let g=50
//     console.log(y-g);
//     fun2()
//     console.log("division",80/6);
// }fun1()




function fun2(){
    let mark=prompt("enter mark")
    if(mark>=35){
        document.write("you are pass","<br>")
    }else{
        document.write("you fail","<br>")
    }
}


function fun1(){
    let age=prompt("enter your age")
    let voter=prompt("do you have voter id")
    if(age>=18){
        document.write("you are eligible","<br>")
    }else{
        document.write("you cant","<br>")
    }

    fun2()

    if(voter="yes"){
        document.write("yo can vote","<br>")
    }else{
        document.write("ou can not vote","<br>")
    }

}fun1()