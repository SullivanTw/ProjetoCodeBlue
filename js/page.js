$(".d-flex p").click(function(){
   $(this).next(".submenu").toggle("fast");
   $(this).toggleClass("open");
});
$(".moviment").hover(function(){
   $(this).next(".moviment").toggle("fast");
   $(this).toggleClass("shadow-sm shadow-lg");
});