

window.addEventListener('load', ()=>{
  const loadwraper = document.querySelector(".loaderwrapper");
  const loader =  document.querySelector(".loader");
  const loadertext = document.querySelector(".loadertexth1");
    setTimeout(()=>{
  
      loadertext.style.transform = "translateY(0px)";
    },500)
    
    setTimeout(()=>{
      loader.style.opacity = 0;
      loadertext.style.opacity = 0;
    },1000)
    
    setTimeout(()=>{
      loadwraper.style.transform = "translateY(100vh)";
    },1100)
  
  });

  // con.addEventListener("click",()=>{
  //   document.querySelector(".loaderwrapper").style.transform = "translateY(100vh)";
  // })