$(document).ready(function() {
  $("#playerInfo").submit(function(event) {
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var status = $("select#status").val();
    var openness = $("select#openness").val();
    var contestant = name

    console.log("name is " + name);
    console.log("age is " + age);
    console.log("gender is " + gender);
    console.log("status is " + status);
    console.log("openness is " + openness);

    if (status === "single" && gender === "male") {
      $("#maleContestants" + age).append("<br><span class=" + age + ">" + name + ", " + age + "/m </span>");
    } else if (status === "single" && gender === "female") {
      $("#femaleContestants").append("<br><span class=" + age + ">" + name + ", " + age + "/f </span>");
    } else if (status === "single" && gender === "nonbinary") {
      $("#nonbinaryContestants").append("<br><span class=" + age + ">" + name + ", " + age + "/n </span>");
    } else if (status === "single" && gender === "other") {
      $("#nonbinaryContestants").append("<br><span class=" + age + ">" + name + ", " + age + "/other </span>");
    }
// next step is to make the append(ages) not just strings, but separate divs named uniquely such that if contents match the inputs on the second form, they will get highlit in some way
    event.preventDefault();
    // I know it didn't work without it... but why again do I need to use event.preventDefault?
  });
  $("#playerSeeking").submit(function(event) {
    var seekAgeMin = $("input#ageMin").val();
    var seekAgeMax = parseInt($("input#ageMax").val());
    var seekGender = $("input[name=gender]").val();

    console.log("age max is " + seekAgeMin);
    console.log("age min is " + seekAgeMax);
    console.log("gender is " + seekGender);

    if (seekAgeMin < 33 && seekAgeMax > 33) {
      $("#maleContestants33").prepend("<b>");
      // $("#maleContestants33").append("</b>");
      // why is this not actually appending, coming at the end of the div? before/after tags don't seem to work either -- they *both* show up when I insert only <b> (as a string!), and neither shows up when I only request to insert </b> ... why can't I control this?
    }
    // else if (xx) {
    //   xx;
    // }
    event.preventDefault();
  });

});
