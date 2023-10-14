var header = document.getElementById("sticky-wrapper");
var sticky = header.offsetTop;
function makeHeaderSticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("is-sticky");
    } else {
        header.classList.remove("is-sticky");
    }
}
function login() {
    alert("เข้าสู่ระบบสำเร็จ");
    window.location.href = "/index.html";
}

window.onscroll = function () {
    makeHeaderSticky();
};
$(document).ready(function() {
    $('#carouselExampleAutoplaying').carousel({ interval: 1000 }); 
  });
  