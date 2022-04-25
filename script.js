var displayTimeEl = $(".container");
var nine = document.getElementById("9");
var ten = document.getElementById("10");
var eleven = document.getElementById("11");
var twelve = document.getElementById("12");
var one = document.getElementById("13");
var two = document.getElementById("14");
var three = document.getElementById("15");
var four = document.getElementById("16");
var five = document.getElementById("17");
// var mySave = document.querySelector(".saveBtn");
//var saveBtn = document.getElementById('#saveBton');
var currenTime = parseInt(moment().format("HH"));
var timeDisplayEl = $("#currentDay");

function displayTime() {
  var rightNow = moment().format("dddd, MMMM Do YYYY, hh:mm a");
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

console.log(currenTime);

if (currenTime === 9) {
  nine.classList.add("present");
  console.log("present");
} else if (currenTime < 9) {
  nine.classList.add("future");
  console.log("future");
} else if (currenTime > 9) {
  nine.classList.add("past");
  console.log("past");
}
console.log(nine);

if (currenTime === 10) {
  ten.classList.add("present");
  console.log("present");
} else if (currenTime < 10) {
  ten.classList.add("future");
  console.log("future");
} else if (currenTime > 10) {
  ten.classList.add("past");
  console.log("past");
}
console.log(ten);

if (currenTime === 11) {
  eleven.classList.add("present");
  console.log("present");
} else if (currenTime < 11) {
  eleven.classList.add("future");
  console.log("future");
} else if (currenTime > 11) {
  eleven.classList.add("past");
  console.log("past");
}
console.log(eleven);

if (currenTime === 12) {
  twelve.classList.add("present");
  console.log("present");
} else if (currenTime < 12) {
  twelve.classList.add("future");
  console.log("future");
} else if (currenTime > 12) {
  twelve.classList.add("past");
  console.log("past");
}
console.log(twelve);

if (currenTime === 13) {
  one.classList.add("present");
  console.log("present");
} else if (currenTime < 13) {
  one.classList.add("future");
  console.log("future");
} else if (currenTime > 13) {
  one.classList.add("past");
  console.log("past");
}
console.log(one);

if (currenTime === 14) {
  two.classList.add("present");
  console.log("present");
} else if (currenTime < 14) {
  two.classList.add("future");
  console.log("future");
} else if (currenTime > 14) {
  two.classList.add("past");
  console.log("past");
}
console.log(two);

if (currenTime === 15) {
  three.classList.add("present");
  console.log("present");
} else if (currenTime < 15) {
  three.classList.add("future");
  console.log("future");
} else if (currenTime > 15) {
  three.classList.add("past");
  console.log("past");
}
console.log(three);

if (currenTime === 16) {
  four.classList.add("present");
  console.log("present");
} else if (currenTime < 16) {
  four.classList.add("future");
  console.log("future");
} else if (currenTime > 16) {
  four.classList.add("past");
  console.log("past");
}
console.log(four);

if (currenTime === 17) {
  five.classList.add("present");
  console.log("present");
} else if (currenTime < 17) {
  five.classList.add("future");
  console.log("future");
} else if (currenTime > 17) {
  five.classList.add("past");
  console.log("past");
}
console.log(five);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var myDAta = $(this).siblings(".description").val();

    //this the parent
    var myTime = $(this).parent().attr("id");

    localStorage.setItem(myTime, myDAta);
  });
  $("#1st .description").val(localStorage.getItem("1st"));
  $("#2nd .description").val(localStorage.getItem("2nd"));
  $("#3rd .description").val(localStorage.getItem("3rd"));
  $("#4th .description").val(localStorage.getItem("4th"));
  $("#5th .description").val(localStorage.getItem("5th"));
  $("#6th .description").val(localStorage.getItem("6th"));
  $("#7th .description").val(localStorage.getItem("7th"));
  $("#8th .description").val(localStorage.getItem("8th"));
  $("#9th .description").val(localStorage.getItem("9th"));
});
