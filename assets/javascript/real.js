//Make an array to loop through movies 
//add api to be able to search for any gif
//Add buttons through jquery - working buttons
//Add an input search bar to search other movies 
//Make sure it works
//Make sure giphy's pop up 3 in a row 
//Add rating for pictures
//Make sure pictures can be clicked to animate then be clicked to un-animate 


var shows =[
    'How-I-Met-Your-Mother',
    'Black-mirror', 
    'Spongebob', 
    'New-girl',
    'Friends',
    'Stranger-things',
    'Full-house',
    'Dr.pimple-popper',
    'The-big-bang-theory',
    'Modern-family',
    'American-idol',
    'Saturday-day-night-live',
    'Jimmy-fallon',
    'NCIS',
    'Greys-anatomy',
    'Double-dare'
    ];
    
    
    function displayShowInfo() {
    
        var tvShow = $(this).attr("data-name");
        var queryURL = "https://www.omdbapi.com/?t=" + tvShow + "&apikey=trilogy";
    
        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
    
          // Creating a div to hold the movie
          var tvDiv = $("<div class='tv-show'>");
    
          // Storing the rating data
          var rating = response.Rated;
    
          // Creating an element to have the rating displayed
          var pOne = $("<p>").text("Rating: " + rating);
    
          // Displaying the rating
          tvDiv.append(pOne);
    
          // Storing the release year
          var released = response.Released;
    
          // Creating an element to hold the release year
          var pTwo = $("<p>").text("Released: " + released);
    
          // Displaying the release year
          tvDiv.append(pTwo);
    
          // Storing the plot
          var plot = response.Plot;
    
          // Creating an element to hold the plot
          var pThree = $("<p>").text("Plot: " + plot);
    
          // Appending the plot
          tvDiv.append(pThree);
    
          // Retrieving the URL for the image
          var imgURL = response.Poster;
    
          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);
    
          // Appending the image
          tvDiv.append(image);
    
          // Putting the entire movie above the previous movies
          $("#buttons-view").prepend(tvDiv);
        });
    
      }
    
      // Function for displaying movie data
      function renderButtons() {
    
        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();
    
        // Looping through the array of movies
        for (var i = 0; i < shows.length; i++) {
    
          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("tv-btn");
          // Adding a data-attribute
          a.attr("data-name", shows[i]);
          // Providing the initial button text
          a.text(shows[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }
    
      // This function handles events where a movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var tvShow = $("#buttons-view").val().trim();
    
        // Adding movie from the textbox to our array
        shows.push(tvShow);
    
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
    
      // Adding a click event listener to all elements with a class of "movie-btn"
      $(document).on("click", ".movie-btn", displayShowInfo);
    
      // Calling the renderButtons function to display the intial buttons
      renderButtons();
    