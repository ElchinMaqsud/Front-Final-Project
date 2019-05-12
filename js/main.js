// Start of slider section
$(document).ready(function () {
    let index = 0;

    $(document).on("click", ".right-arrow", function () {
        index++;
        let ulWidth = $(".slider-ul").innerWidth() / 4;
        if (index === $(".slider-ul li").length) {
            index = 0;
        }
        $(".slider-ul").css({ right: index * ulWidth + "px" });
    })
    $(document).on("click", ".left-arrow", function () {
        let ulWidth = $(".slider-ul").innerWidth() / 4;
        index--;
        if (index < 0) {
            index = $(".slider-ul li").length - 1;
        }
        $(".slider-ul").css({ right: index * ulWidth + "px" })

    })

})
// End of slider section

// Start of click-navbar section
$(document).ready(function () {
    $(".click-navbar-ul").hide();
    $(document).on("click", ".s-nav-menu", function () {
        $(".click-navbar-ul").slideToggle();
    })
})
// End of click-navbar section

// Start of info section
$(document).on("click","#tab .s-tab li",function(e)
{
    e.preventDefault();
    $("#tab .s-tab li.active").removeClass("active");
    $(this).addClass("active");
    $("#tab .s-tab-info.active").removeClass("active");
    let activeLiId = $(this).attr("data-id");
    let activeInfoId = $(`#tab .s-tab-info[data-id="${activeLiId}"]`);
    activeInfoId.addClass("active");
});

let number = 1;
$(document).on("click","#tab .s-tab-slider .s-arrow-right",function()
{
    $(this).prev().prev().removeClass("color");
    $(this).addClass("color");
    number++;
    let activeLi = $("#tab .s-tab-slider ul li.active");
    activeLi.removeClass("active");
    if(number !== $("#tab .s-tab-slider ul li").length + 1)
    {
        let liNumber = $(`#tab .s-tab-slider ul li[data-number="${number}"]`).addClass("active");
        $("#tab .s-tab-info.active").removeClass("active");
        let activeLiId = $(liNumber).attr("data-number");
        let activeInfoId = $(`#tab .s-tab-info[data-type="${activeLiId}"]`);
        activeInfoId.addClass("active");
    }
    else
    {
        number = 1;
        let liNumber = $(`#tab .s-tab-slider ul li[data-number="${number}"]`).addClass("active");
        $("#tab .s-tab-info.active").removeClass("active");
        let activeLiId = $(liNumber).attr("data-number");
        let activeInfoId = $(`#tab .s-tab-info[data-type="${activeLiId}"]`);
        activeInfoId.addClass("active");
    }
});

$(document).on("click","#tab .s-tab-slider .s-arrow-left",function()
{
    $(this).next().next().removeClass("color");
    $(this).addClass("color");
    number--;
    let activeLi = $("#tab .s-tab-slider ul li.active");
    activeLi.removeClass("active");
    if(number > 0)
    {
        let liNumber = $(`#tab .s-tab-slider ul li[data-number="${number}"]`).addClass("active");
        $("#tab .s-tab-info.active").removeClass("active");
        let activeLiId = $(liNumber).attr("data-number");
        let activeInfoId = $(`#tab .s-tab-info[data-type="${activeLiId}"]`);
        activeInfoId.toggleClass("active");
    }
    else
    {
        number = $("#tab .s-tab-slider ul li").length;
        let liNumber = $(`#tab .s-tab-slider ul li[data-number="${number}"]`).addClass("active");
        $("#tab .s-tab-info.active").removeClass("active");
        let activeLiId = $(liNumber).attr("data-number");
        let activeInfoId = $(`#tab .s-tab-info[data-type="${activeLiId}"]`);
        activeInfoId.toggleClass("active");
    }
});
// End of info section

// Start of footer
$(document).ready(function(){
    $(document).on("click",".scroll-btn",function(){
        $("html").animate({scrollTop:0},1500);
    })
})
// End of footer

// End of index.html

// Start of pages.html
$(document).ready(function(){
    $(document).on("click","#holiday-honeymoon ul li",function(e){
        e.preventDefault();
        $("#holiday-honeymoon ul li.active").removeClass("active");
        $(this).addClass("active");
        $(`.row-holiday-tab`).removeClass("active")
        $(`.row-holiday-tab[data-id='${$(this).attr("data-id")}']`).addClass("active");
        
    })
   
})



