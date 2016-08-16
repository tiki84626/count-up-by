$(document).ready(function() {
  $("form").submit(function(event) {
    var countTo = parseInt($("input#count-to").val());
    var countBy = parseInt($("input#count-by").val());

    if (countBy <= countTo && countBy > 0) {

      alert(countBy);

    } else {

    }

    event.preventDefault();
  });
});
