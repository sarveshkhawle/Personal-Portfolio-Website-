console.log("helllooooo")
document.querySelector('.cross').style.display ='none';   

// addEventListener(event , function , capture ) // capture optional 
document.querySelector('.hamburger').addEventListener("click" , ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarcancle')

    if(document.querySelector('.sidebar').classList.contains('sidebarcancle') ){
         document.querySelector('.ham').style.display = 'inline'
         document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(()=>{

            document.querySelector('.cross').style.display = 'inline'
        },250);
    } 
});     