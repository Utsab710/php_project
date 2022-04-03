function htmlbodyHeightUpdate() {
  var height3 = $(window).height();
  var height1 = $(".nav").height() + 50;
  height2 = $(".main").height();
  if (height2 > height3) {
    $("html").height(Math.max(height1, height3, height2) + 10);
    $("body").height(Math.max(height1, height3, height2) + 10);
  } else {
    $("html").height(Math.max(height1, height3, height2));
    $("body").height(Math.max(height1, height3, height2));
  }
}

$(document).ready(function () {
  htmlbodyHeightUpdate();
  $(window).resize(function () {
    htmlbodyHeightUpdate();
  });
  $(window).scroll(function () {
    height2 = $(".main").height();
    htmlbodyHeightUpdate();
  });
});

var dataList = document.getElementById("json-datalist");
var input = document.getElementById("ajax");

var request = new XMLHttpRequest();

request.onreadystatechange = function (response) {
  if (request.readyState === 4) {
    if (request.status === 200) {
      var jsonOptions = JSON.parse(request.responseText);

      jsonOptions.forEach(function (item) {
        var option = document.createElement("option");
        option.value = item;
        dataList.appendChild(option);
      });

      input.placeholder = "e.g. datalist";
    } else {
      input.placeholder = "Couldn't load datalist options :(";
    }
  }
};
