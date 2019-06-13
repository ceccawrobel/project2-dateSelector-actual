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

    if (status === "single" && gender === "male") {
      $("#maleContestants").append("<br>" + name + ", " + age + "/m");
    } else if (status === "single" && gender === "female") {
      $("#femaleContestants").append("<br>" + name + ", " + age + "/f");
    } else if (status === "single" && gender === "nonbinary") {
      $("#nonbinaryContestants").append("<br>" + name + ", " + age + "/n");
    }
// next step is to make the append(ages) not just strings, but separate divs named uniquely such that if contents match the inputs on the second form, they will get highlit in some way
    event.preventDefault();
    // I know it didn't work without it... but why again do I need to use event.preventDefault?
  });
});
