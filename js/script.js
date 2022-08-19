// raw javascript start
const mode = document.querySelector(".mode");
const body = document.querySelector("body");
const mode_icon = document.querySelector(".mode_icon");
let image=0;
mode.addEventListener("click", function(){
body.classList.toggle("darkmode");
// images-cng-start
if
  (image === 0){
    mode_icon.setAttribute("src","images/sun-01.svg")

    image = 1
  }
  else
  {
    mode_icon.setAttribute("src","images/moon.svg")

    image = 0
  }
// images-cng-end

})
// raw javascript end

// sticky menu start
let menu_area = document.getElementById("menu_area");
window.addEventListener ("scroll",function(){
  let value =window.scrollY
 if (value > 100) {
  menu_area.classList.add ("sticky")
  
 } else {
 menu_area.classList.remove ("sticky")
 }
})
// sticky menu end

feather.replace()
$(function(){
    $(".projects_btn button  ").click(function(){
        $("button").removeClass("active"),
        $(this ).addClass("active"),
        console.log("tulin") 
    }) 

    $('.feedback_slider').slick({
       arrows:true,
       prevArrow:'.arrow_left',
       nextArrow:'.arrow_right',
       dots:true,
       button:false,

      });

    })
$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 575,
        settings: {
           arrows:false,
           slidesToShow: 1,
           slidesToScroll: 1
        }
      }
    ]
     
})
var mixer = mixitup('.protfolio_filtter');

// video_js
new VenoBox({
    selector: '.venobox',
    maxWidth:"900px",
    spinner:'flow'
  });