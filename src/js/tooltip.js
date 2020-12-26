function getData(info, top, left) {
  top -= 56;
  var data = $(info).attr("data-info");
  content = createElement(data, "DIV");
  $(content).css({ top: top, left: left });
  $("body").append(content);
}

function createElement(data, el) {
  var newEl = document.createElement(el),
    text = document.createElement("P");

  newEl = $(newEl).addClass("tooltip");
  text = $(text).text(data);
  newEl = $(newEl).append(text);
  return newEl;
}

$(".interrogation").mouseover((e) => {
  var pos = $(e.target).position();
  getData(e.target, pos.top, pos.left);
});

$(".interrogation").mouseleave(function (e) {
  $(".tooltip").remove()
});

