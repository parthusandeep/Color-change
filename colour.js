let getColor=()=>{
    let randomNumber= Math.floor(Math.random()*16777215);
    let random="#"+ randomNumber.toString(16);
    document.body.style.background=random;
    // console.log(randomNumber,random)
    // let code= 
    document.getElementById("color-code").innerText=random;
    // code.innerText=random;
}
document.getElementById("btn");
btn.addEventListener("click",getColor);
// getColor();