const dynamic_links = document.querySelectorAll(".dynamic_link");

dynamic_links.forEach((dynamic_link) => {
  dynamic_link.addEventListener("click", () => {
    document.querySelector(".loaderwrapper").style.transform =
      "translateY(0vh)";
    // document.querySelector("html").style.overflowY = "hidden";
    setTimeout(() => {
      window.location = dynamic_link.getAttribute("data-link");
    }, 400);
    // console.log(dynamic_link.getAttribute('data-link'))
  });
});