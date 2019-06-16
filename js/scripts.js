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

    if (seekAgeMin <= 30 && seekAgeMax >= 30) {
      $("#maleContestants30").prepend("<b>");
      $("#maleContestants30").append("</b>");
      $("#femaleContestants30").prepend("<b>");
      $("#femaleContestants30").append("</b>");
      $("#nonbinaryContestants30").prepend("<b>");
      $("#nonbinaryContestants30").append("</b>");
      // why is this not actually appending, coming at the end of the div? before/after tags don't seem to work either -- they *both* show up when I insert only <b> (as a string!), and neither shows up when I only request to insert </b> ... why can't I control this?
    } else if (seekAgeMin <= 31 && seekAgeMax >= 31) {
      $("#maleContestants31").prepend("<b>");
      $("#maleContestants31").append("</b>");
      $("#femaleContestants31").prepend("<b>");
      $("#femaleContestants31").append("</b>");
      $("#nonbinaryContestants31").prepend("<b>");
      $("#nonbinaryContestants31").append("</b>");
      // realizing that this strategy doesn't work (regardless of inefficiency) because after "if" statement, "else if" statements don't run at all, so even if the first one worked to highlight the 30-year-old divs, the others wouldn't run. need to rethink this.
    } else if (seekAgeMin <= 32 && seekAgeMax >= 32) {
      $("#maleContestants32").prepend("<b>");
      $("#maleContestants32").append("</b>");
      $("#femaleContestants32").prepend("<b>");
      $("#femaleContestants32").append("</b>");
      $("#nonbinaryContestants32").prepend("<b>");
      $("#nonbinaryContestants32").append("</b>");
    } else if (seekAgeMin <= 33 && seekAgeMax >= 33) {
      $("#maleContestants33").prepend("<b>");
      $("#maleContestants33").append("</b>");
      $("#femaleContestants33").prepend("<b>");
      $("#femaleContestants33").append("</b>");
      $("#nonbinaryContestants33").prepend("<b>");
      $("#nonbinaryContestants33").append("</b>");
    } else if (seekAgeMin <= 34 && seekAgeMax >= 34) {
      $("#maleContestants34").prepend("<b>");
      $("#maleContestants34").append("</b>");
      $("#femaleContestants34").prepend("<b>");
      $("#femaleContestants34").append("</b>");
      $("#nonbinaryContestants34").prepend("<b>");
      $("#nonbinaryContestants34").append("</b>");
    } else if (seekAgeMin <= 35 && seekAgeMax >= 35) {
      $("#maleContestants35").prepend("<b>");
      $("#maleContestants35").append("</b>");
      $("#femaleContestants35").prepend("<b>");
      $("#femaleContestants35").append("</b>");
      $("#nonbinaryContestants35").prepend("<b>");
      $("#nonbinaryContestants35").append("</b>");
    } else {
      alert("Sorry, we can only point out matches between 30 and 35.")
    }
    event.preventDefault();
  });

});
