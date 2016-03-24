/**
 * Created by R_Wesselmann on 11.03.2016.
 */
var count = $('*').length;

$("#p_id").dblclick(function () {
    this.innerHTML="Changed paragraph by an ID selector.";
});


$(".p_class").hover(function () {
    this.innerHTML="paragraph via a class selector.";
});

$("#p_this").find("p").click(function(){
    this.innerHTML="Changed specific paragraph via a this selector." ;
});

$(":button, #p_id2").click(function () {
    alert("Elements: " + count);
});

$("#p_contains").find("p:contains('1')").css("background", "grey");
$("#p_contains2").find("p:contains('martin')").css("background", "grey");

$("#p_even").find("p:even").css("background", "grey");

$("#p_odd").find("p:odd").css("background", "grey");