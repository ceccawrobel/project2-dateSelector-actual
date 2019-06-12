$(document).ready(function() {
  $("#playerInfo").submit(function(event) {
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var status = $("select#status").val();
    var openness = $("select#openness").val();

    console.log("name is " + name);
    console.log("age is " + age);
    console.log("gender is " + gender);
    console.log("status is " + status);
    console.log("openness is " + openness);

    event.preventDefault();
    // I know it didn't work without it... but why again do I need to use preventDefault?
  });
});
