function showabout() {
  $("#about_container").css("display", "inherit");
  $("#about_container").addClass("animated slideInLeft");
  setTimeout(function () {
    $("#about_container").removeClass("animated slideInLeft");
  }, 800);
}
function closeabout() {
  $("#about_container").addClass("animated slideOutLeft");
  setTimeout(function () {
    $("#about_container").removeClass("animated slideOutLeft");
    $("#about_container").css("display", "none");
  }, 800);
}
function showwork() {
  $("#work_container").css("display", "inherit");
  $("#work_container").addClass("animated slideInRight");
  setTimeout(function () {
    $("#work_container").removeClass("animated slideInRight");
  }, 800);
}
function closework() {
  $("#work_container").addClass("animated slideOutRight");
  setTimeout(function () {
    $("#work_container").removeClass("animated slideOutRight");
    $("#work_container").css("display", "none");
  }, 800);
}
function showcontact() {
  $("#contact_container").css("display", "inherit");
  $("#contact_container").addClass("animated slideInUp");
  setTimeout(function () {
    $("#contact_container").removeClass("animated slideInUp");
  }, 800);
}
function closecontact() {
  $("#contact_container").addClass("animated slideOutDown");
  setTimeout(function () {
    $("#contact_container").removeClass("animated slideOutDown");
    $("#contact_container").css("display", "none");
  }, 800);
}
function showphotos() {
  closework();
  $("#photos_container").css("display", "inherit");
  $("#photos_container").addClass("animated slideInRight");
  setTimeout(function () {
    $("#photos_container").removeClass("animated slideInRight");
  }, 800);
}
function closephotos() {
  showwork();
  $("#photos_container").addClass("animated slideOutRight");
  setTimeout(function () {
    $("#photos_container").removeClass("animated slideOutRight");
    $("#photos_container").css("display", "none");
  }, 800);
}

function magnify(imglink) {
  console.log("magnify");
  // $("#photos_container").addClass("animated fadeOut");
  // $("#img_here").css("background",`url('${imglink}') center center`);
  // $("#magnify").css("display","flex");
  // $("#magnify").addClass("animated fadeIn");
  // setTimeout(function(){
  //     $("#magnify").removeClass("animated fadeIn");
  // },800);
}

function closemagnify() {
  // $("#magnify").addClass("animated fadeOut");
  // setTimeout(function(){
  //     $("#magnify").css("display","none");
  //     $("#magnify").removeClass("animated fadeOut");
  //     $("#img_here").css("background",`url('') center center`);
  // },800);
}

setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
    $("#box").css("display", "none");
    $("#about").removeClass("animated fadeIn");
    $("#contact").removeClass("animated fadeIn");
    $("#work").removeClass("animated fadeIn");
  }, 1000);
}, 1500);

function redirectToSpotify() {
  // Redirect to the Spotify playlist URL
  window.location.href =
    "https://open.spotify.com/playlist/37i9dQZF1E4uE7XrQEJTw4?si=SBDewiYvR6eqXsH250Dudg";
}

function redirectToBirthday() {
  window.location.href = "https://katesbirthday.netlify.app/";
}
