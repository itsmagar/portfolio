// var typed=new typed('# so0typed',{
//     strings:['Batman','web developer'],
//     typeSpeed:50,
// }
// );

// alert("hello")
// console.log("helo my dear");

// document.getElementById("test1").style.backgroundColor="blue"
// document.getElementsByClassName("test2").style.backgroundColor="red"

document.getElementById("backbtn").addEventListener("click",function(){
    // console.log("clicked");
    // document.getElementById("hello").style.color="red";
    document.querySelector(".feedback").scrollBy({
        left: -100,
        behavior: "smooth"
    })
})
document.getElementById("rightbtn").addEventListener("click",function(){
    // console.log("clicked");
    // document.getElementById("hello").style.color="red";
    document.querySelector(".feedback").scrollBy({
        left: 100,
        behavior: "smooth"
    })
})

// form validation
function validateform(){
    var name=document.getElementById("name").value;
    if(name.length == 0){
    document.getElementById("name-error").innerHTML= "Name is required";
    return false;
    }else{
        document.getElementById("name-error").innerHTML=""
    }
    if(password1.length==0){
        document.getElementById("password-error").innerHTML="password is required"
        return false;
    }
    if(password1.length < 5){
        document.getElementById("password1-error").innerHTML="Password must contain five character"
        return false;
    }else{
        document.getElementById("password1-error").innerHTML=""
    }
    if(password2.length == 0){
        document.getElementById("password2-error").innerHTML="Password must contain five character"
        return false;
    }else{
        document.getElementById("password2-error").innerHTML=""
    }
    if(password1!=password2){
    document.getElementById("password2-error").innerHTML=""
    return false;
}
}