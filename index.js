let sidenavbar_btn = document.querySelector(".navbar-toggle")
let sidenavbar=document.querySelector(".side-nav-bar")
let sidenavbar_close=document.querySelector(".x-icon i")



sidenavbar_btn.addEventListener("click",()=>{
    sidenavbar.style.left="0%"
})
sidenavbar_close.addEventListener("click",()=>{
    sidenavbar.style.left="-50%"
})


// --------------
var product_container=document.querySelector(".product")
var search=document.querySelector('#search')
console.log(search)
var product_box=product_container.querySelectorAll(".product-box")
console.log(product_box)

search.addEventListener("keyup",()=>{
    let event_value=event.target.value.toUpperCase()
   
    console.log(event_value)
    for(count=0;count<product_box.length;count++){
        let productname=product_box[count].querySelector("p").innerText
        
        console.log(productname)
        console.log(productname.toUpperCase().indexOf(event_value))
        if(productname.toUpperCase().indexOf(event_value)<0){
             product_box[count].style.display="none" 
         }
         else{
             product_box[count].style.display="block"
         }
    }

})
