const closeIcon=document.querySelector(".close-icon");
const searchbar=document.querySelector(".search-input");
const suggesstion=document.querySelectorAll(".suggesstion");
const body=document.querySelector("body");

function removesuggesstion(e){
  e.preventDefault();
     console.log("Dheeraj verma");
     suggesstion.forEach(eachsuggesstion => {
          eachsuggesstion.style.display="none";
     });
     document.querySelector(".inner-box").style.background="none";
     closeIcon.style.display="none";
     document.querySelector(".search-input").value="";
}

searchbar.addEventListener("click",(e)=>{
     e.preventDefault();
     closeIcon.style.display="block";
     suggesstion.forEach(eachsuggesstion => {
          eachsuggesstion.style.display="flex";
     });
     document.querySelector(".inner-box").style.background="rgba(48,49,52,1)";
     
});
closeIcon.addEventListener("click",(e)=>{
   removesuggesstion(e);
})
document.addEventListener("click",(e)=>{
     if(!e.target.closest(".search-bar")){
          removesuggesstion(e);
     }
    
})