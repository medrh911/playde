function de() {
    

r=Math.floor(Math.random()*6)+1
var rd="dim"+r+".png"
i1=document.querySelectorAll("img")[0];
i1.setAttribute("src",rd)



r2=Math.floor(Math.random()*6)+1
var rd2="dim"+r2+".png"
i1=document.querySelectorAll("img")[1];
i1.setAttribute("src",rd2)



if(r>r2){
    document.querySelector("h1").innerHTML="1 win"

}
if(r<r2){
    document.querySelector("h1").innerHTML="2 win"

}
if(r==r2){
    document.querySelector("h1").innerHTML="down"
}
}