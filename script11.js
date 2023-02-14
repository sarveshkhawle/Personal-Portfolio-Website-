console.log("helllooooo");
document.querySelector('.devvv').classList.remove("shrinksidebar");
document.querySelector('.cross').style.display ='none';  
document.querySelector('.hamburger').addEventListener("click" , ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarcancle')
        document.querySelector('.noshrinksidebar').classList.toggle('shrinksidebar')
    
    if(document.querySelector('.sidebar').classList.contains('sidebarcancle') ){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
        document.querySelector('.shrinksidebar').classList.remove("shrinksidebar");
        document.querySelector('.noshrinksidebar').classList.add("noshrinksidebar");

        
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        
        setTimeout(()=>{
            
            document.querySelector('.cross').style.display = 'inline'
        },250);
    } 
});    

// document.querySelector('.shrinksidebar').style.remove('margin-left');  
// document.querySelector('.shrinksidebar').style.display ='none';  
// document.querySelector('.shrinksidebar').classList.toggle('noshrinksidebar')
// document.querySelector('.hamburger').addEventListener("click" , ()=>{

//     if(document.querySelector('.shrinksidebar').classList.contains('noshrinksidebar') ){
//         document.querySelector('.shrinksidebar').style.display='none'
//         document.querySelector('.noshrinksidebar').style.display='inline'
        
//     }
//     else{
        
//         document.querySelector('.noshrinksidebar').style.display='none'
//         document.querySelector('.shrinksidebar').style.display='inline'
//     } 
// });     
