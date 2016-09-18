function getQuote() {
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
    type: 'POST',
    date: {},
    dataType: 'json',
    success: function(data) {
      $(".quote").html(data.quote);
      $(".author").html(data.author);
    },
    error: function(err) {
      $(".quote").html("Sorry, but I was unable to share my wisdom with you");
      $(".author").html("His Noodly Appendage");
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "3T8e1FS15TmshsaKSckTq1Gzo8emp1rTmoCjsnXXvF56gRhPAf")
    }
  });
};

$(document).ready(function() {
  getQuote();

  $("#twitter").on("click", function() {
    console.log("clicked on twitter");
  });

  $("#tumblr").on("click", function() {
    console.log("clicked on tumblr");
  });

  $("#reload").on("click", function() {
    getQuote();
  })
});
