/*$('arrow-down').each(function(index){
	$(this).addEventListener("click",function() {

		$(this).css("display","block");

	});
});*/

var acc = document.getElementsByClassName("arrow-down");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("arrow-down_rotated");
        var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    });
}

