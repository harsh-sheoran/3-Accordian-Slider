let accordian = document.querySelectorAll(".full-part");
let firstimg = document.querySelector(".accord-img");
let firsttxt = document.querySelector(".accord-para");
firstimg.style.transform = "rotate(180deg)";
firsttxt.style.display = "block";
accordian.forEach(element => {
    let img = element.querySelector(".accord-img");
    let clicable = element.querySelector(".top-part");
    let txt = element.querySelector(".accord-para");
    clicable.addEventListener("click", () => {
        accordian.forEach(otherelement => {
            if (otherelement !== element) {
                let othertxt = otherelement.querySelector(".accord-para");
                let otehrimg = otherelement.querySelector(".accord-img");
                othertxt.style.display = "none";
                otehrimg.style.transform = "rotate(0deg)";
            }
        });
        let disp_text = window.getComputedStyle(txt).display;
        if (disp_text === "none") {
            txt.style.display = "block";
            img.style.transform = "rotate(180deg)";
        } else {
            txt.style.display = "none";
            img.style.transform = "rotate(0deg)";
        };
    });
});

$('.slick-slider-container').slick({
    dots: false,
    infinite: true,
    arrow: true,
    prevArrow: ".slick-slider-btn-left",
    nextArrow: ".slick-slider-btn-right",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                autoplay: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
            }
        }
    ]
});

$('.parentBox').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1000,
    pauseOnHover: true,
    cssEase: 'linear',
});

$(".slider-1").slick({
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "Linear",
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 6,
                autoplay: true,
                speed: 3000,
                slidesToScroll: 1,
                autoplaySpeed: 0,
                cssEase: "Linear",
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 0,
                cssEase: "Linear",
                speed: 1000,
            },
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplaySpeed: 0,
                cssEase: "Linear",
            },
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplaySpeed: 0,
                cssEase: "Linear",
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplaySpeed: 0,
                cssEase: "Linear",
            },
        },
    ],
});

$(".slider-2").slick({
    autoplay: true,
    centerMode: true,
    centerPadding: "555px",
    slidesToShow: 1,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 3000,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "1050px",
            },
        },
        {
            breakpoint: 2800,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "890px",
            },
        },

        {
            breakpoint: 2500,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "760px",
            },
        },
        {
            breakpoint: 2300,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "680px",
            },
        },
        {
            breakpoint: 2000,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "550px",
            },
        },
        {
            breakpoint: 1700,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "370px",
            },
        },
        {
            breakpoint: 1500,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "270px",
            },
        },
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "200px",
            },
        },
        {
            breakpoint: 850,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            },
        },
    ],
});

let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}