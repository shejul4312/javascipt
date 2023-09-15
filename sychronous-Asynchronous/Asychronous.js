// function fun2(){
//     setTimeout( ()=>{
//         console.log("this is fun2 function");
//     },12000
//     )

//     setTimeout( ()=>{
//         alert("your out")
//     },6000

//     )
// }





// function fun1(){
//     console.log("my name anand");
//      fun2()
//     console.log("my name anand");

// }fun1()


let v=document.getElementById("ib")
let b=document.getElementById("if")


function fun2(){
   setTimeout( ()=>{
   let mark=prompt("enter your mark")
   if(mark<=35){
    v.setAttribute("class","j1")
    // document.write("your faile")
   }else if(mark>=35){
    v.setAttribute("class","j2")
    // document.write("your pass")

   }else{
    document.write("kkk")
   }
   },7000

   )

   setTimeout(()=>{
   let age=prompt("enter your age")
    if(age<=17){
        b.setAttribute("class","a1")
        // document.write("you cant vote")

    }else if(age>=18){
        b.setAttribute("class","a2")
        // document.write("you can vote")

    }else{
        document.write("llll")
    }
   },16000

   )
}

function fun1() {
    document.write("<h1>Your result portal</h1>")
    fun2()
    document.write("<h1>cheak your result</h1>")
    
}fun1()

