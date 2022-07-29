$(".arrow p").hover(function(){
   $(this).next(".submenu").toggle("fast");
   $(this).toggleClass("close");
});
$(".moviment").hover(function(){
   $(this).next(".moviment").toggle("fast");
   $(this).toggleClass("shadow-sm shadow-lg");
});