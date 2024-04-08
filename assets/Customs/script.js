
const drplinks = document.querySelectorAll(".drp_year");

let activeDrplink = null;

drplinks.forEach((drplink) => {
  drplink.addEventListener("click", () => {
    if (activeDrplink) {
     
      activeDrplink.style.background = "";
      activeDrplink.style.color = "white";
    }

    if (activeDrplink !== drplink) {
    
      document.querySelector(".pdfemb").style.height = "100vh";
      document.querySelector(".pdfemb").src = drplink.getAttribute("data-pdf");
     
      drplink.style.color = "black";
      activeDrplink = drplink; 
    } else {
     
      document.querySelector(".pdfemb").style.height = "0px";
      document.querySelector(".pdfemb").src = "";
      activeDrplink = null; 
    }
  });
});

