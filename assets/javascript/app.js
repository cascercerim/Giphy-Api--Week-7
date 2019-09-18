
//Make an array to loop through tv shows
//add api to be able to search for any gif
//Add buttons through jquery - working buttons
//Add an input search bar to search other movies 
//Make sure it works
//Make sure giphy's pop up 3 in a row on web page
//Add rating for giphs
//Make sure pictures can be clicked to animate then be clicked to un-animate 

 $(document).ready(function(){
    

    var shows = [
        'Hey-arnold', 
        'Spongebob', 
        'New-girl',
        'Friends',
        'Stranger-things',
        'Full-house',
        'Dr.pimple-popper',
        'The-big-bang-theory',
        'Modern-family',
        'How-I-Met-Your-Mother',
        'American-idol',
        'Saturday-day-night-live',
        'Jimmy-fallon',
        'NCIS',
        'Greys-anatomy',
        'Double-dare'
        ];

        // could wrap in a function to call
       //loops through array of tv-shows
       for (var i = 0; i < shows.length; i++){
        var button = $("<button>").text(shows[i]);// shows text on the button 
        console.log(button);
        button.attr("data-name", shows[i]);
        button.addClass("tv-btn"); //class added
        
        $("#button-view").append(button); //adds button to html 
    }
    

    
    //api call to gif's 
    $(document).on("click", ".tv-btn", function(){
        
        var tvShow = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvShow + "&api_key=0DFbYPoL3Baw4PRlHmIqhxNJaIILMRD5";
     
        // ajax get request
        $.ajax({
            url:queryURL,
            method: "GET"
         })
        //  after data comes back from api
         .then(function(response) { 
           
            //  storing results in results variable
            var results = response.data;
             console.log(results);

            var container = $("<div class= 'results-container'>");

            // looping over results area
            for(var i = 0; i < results.length; i++){
                console.log(results);
                var resultsDiv = $("<div class= 'container-result'>");

                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var showImg = $("<img class='result'>");
                showImg.attr("src",results[i].images.fixed_height.url);
                showImg.attr("data-state","animated");
                showImg.attr("data-animated",results[i].images.fixed_height.url);
                showImg.attr("data-still",results[i].images.fixed_height_still.url);
                console.log(showImg);

                resultsDiv.prepend(showImg);
                resultsDiv.prepend(p);
                container.prepend(resultsDiv);
           
    }

    $("#show-group").prepend(resultsDiv);
        
        });
        });

         $(document).on("click", ".result",function(){
            var state = $(this).attr("data-state");
           

            if(state === "animated"){
                // put the src of the new still image 
                $(this).attr("src", $(this).attr("data-still"))
                // change the state to still 
                $(this).attr("data-state", "still" );
            }else{
                // put the src of the new animated image 
                $(this).attr("src", $(this).attr("data-animated"))
                // change the state to animated 
                $(this).attr("data-state", "animated" );

            }

         })
            
            // Adds new show when submitted
                  $("#new-show").on("click" ,function(a){
                     a.preventDefault();
                     var showExist = false;
                  if(shows.indexOf($("#add-show").val()) ===0){
                     showExist = true;
                  }
        
                if($("#add-show").val() !== "" && showExist === false){
                    //grab input from text-box and add it to array of tv-shows
                     var newShow = $("#new-show").val().trim();
                     //tv show added to array 
                     shows.push(newShow);
                     // button has text added to it 
                     var button = $("<button>").text(newShow);
                    // adds buttons to html
                     button.attr("data-show",newShow);
                     button.addClass("tv-btn");
                     $("#button-view").append(button);
            
             }
                 $("#add-show").val("");
                
                });        

            }); 