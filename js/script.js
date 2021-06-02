function OnImageClick(item){
  if($(item).hasClass("active")){
    var elem = $(".lightbox");
    $(elem).html('<img src="' + $(item).attr("src") + '">');
    $(elem).addClass("active");
  } else {
    var line = $(item).parent(".line");
    var slider = $(line).parent(".slider");
    var wind = $(slider).children(".window");
    $(wind).html(
      '<img src="' + $(item).attr("src") +  '" class="active">');
    $(wind).children().bind("click", function() {
      var item = this;
      OnImageClick(item); 
    });
    var image = $(line).children(".clicked");
    $(image).removeClass("clicked");
    $(item).addClass("clicked");
  }
}