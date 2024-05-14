const drplinks = document.querySelectorAll(".drp_year");

let activeDrplink = null;

drplinks.forEach((drplink) => {
  drplink.addEventListener("click", () => {
    const anualreportwrapper = drplink.closest('.anualreportwrapper');
    if (!anualreportwrapper) return; // if not found anualreportwrapper, exit

    const pdfemb = anualreportwrapper.querySelector(".pdfemb");

    if (activeDrplink) {
      activeDrplink.style.background = "";
      activeDrplink.style.color = "white";
    }

    if (activeDrplink !== drplink) {
      pdfemb.style.height = "100vh";
      pdfemb.src = drplink.getAttribute("data-pdf");
      console.log("inside pdf");
      // drplink.style.background = "#309255";
      drplink.style.color = "black";
      activeDrplink = drplink;
    } else {
      pdfemb.style.height = "0px";
      pdfemb.src = "";
      activeDrplink = null;
    }
  });
});
