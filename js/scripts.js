$(document).ready(function() {
  $("form").submit(function(event) {
    var countTo = parseInt($("input#count-to").val());
    var countBy = parseInt($("input#count-by").val());
    var output = [];

    if (countBy <= countTo && countBy > 0) {
      for (var index = countBy; index <= countTo; index += countBy) {
        output.push(index);
      }
    }

    alert(output);

    event.preventDefault();
  });
});
