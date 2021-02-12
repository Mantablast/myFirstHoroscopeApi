$(document).ready(function() {
  console.log("Horoscopes and stuff");
  $('form').on('submit', function(event) {
  event.preventDefault()
})

// $('button').on('click', function() {
//   console.log("A button was clicked!")
// })
$('form.button').on('click', function() {
  $('form').slideUp(1000)

  // $('p').slideDown(2000)
  // $('p').fadeOut(1000)
})
$('h3').fadeOut(1000)
$('h3').fadeIn(1000)
$('h3').fadeOut(1000)
$('h3').fadeIn(1000)
$('h3').fadeOut(1000)
$('h3').fadeIn(1000)

// $('p').slideDown(5000)
$('img').hide(0)
$('img').fadeIn(1000)


$('.circle ~ button').on('click', function() {
  $('.circle').toggleClass('green');
})
$('.aries').on('click', function() {
  $('.results').append(horoResult.horoscope, horoResult.date, horoResult.sign);

})
var horoResult = {
  horoscope: "Feeling moody, Aries? You can chalk it up to today’s tough angle between the moon and volcanic Pluto. Put extra effort into not projecting your tension and frustration onto those around you, especially when dealing with your so-called opponents. If you’ve got social plans this evening, it might be best to bow out. Why force yourself to go through the motions when all you really want to do is curl up with your Kindle or catch up with the Kardashians?",
  date: "November 2, 2020",
  sign: "Aries"
}
var date = new Date();
  console.log(date.toLocaleString())
// var students = [{ name: 'Bob', grade: 'A-' }, { name: 'Dylan', grade: 'B+' }]

for (var i = 0; i < horoResult.length; i++) {
    console.log(horoResult)
}


$('.buttonForm').on('click', function(event) {
  event.preventDefault();
  $('.results').toggleClass('highlight')
  // $('.yourSign').remove();
  var searchName = $('.submitForm').val();
  // for(var i = 0; i < horoSigns.length; i++) {
    // if(searchName === horoSigns [i].name) {
      // console.log("Found")
      // $('.results').html("<div><h2>" + "Horoscope for " + horoSigns[i].name + "</div></h2>")
      // return true;
      $.get('http://horoscope-lhl.herokuapp.com/horoscopes/' + searchName , function(returnedData) {
        console.log(returnedData)
        var $results = $(".results")
        $(this).parent().remove()
        $results.append("<p> Your Weekly Horoscope: " + returnedData.sign)
      // }) else {
      // console.log("Try again")
      // $('.results').html("<div><h2>" + "Results were not found.  Please try again " + "</div></h2>")
    })
})



var horoSigns = [
  {"name":"Aries"},
  {"name":"Taurus"},
  {"name":"Gemini"},
  {"name":"Cancer"},
  {"name":"Leo"},
  {"name":"Virgo"},
  {"name":"Libra"},
  {"name":"Scorpio"},
  {"name":"Sagittarius"},
  {"name":"Capricorn"},
  {"name":"Aquarius"},
  {"name":"Pisces"},
]

});
