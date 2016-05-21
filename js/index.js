$(function(){
    var caidan=$(".caidan");
    var mainR=$(".main-right");
    caidan.click(function(){
        mainR.slideToggle();
    });
    console.log(mainR)
})