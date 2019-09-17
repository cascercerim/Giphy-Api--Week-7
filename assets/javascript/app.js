//Make an array to loop through movies 
//add api to be able to search for any gif
//Add buttons through jquery - working buttons
//Add an input search bar to search other movies 
//Make sure it works
//Make sure giphy's pop up 3 in a row on web page
//Add rating for giphs
//Make sure pictures can be clicked to animate then be clicked to un-animate 
// $(document).ready(function(){
    

    var shows = [
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


    

    
    //api call to gif's 
    $(document).on("click", ".tvShow-button", function(){
        
        var tvShow = $(this).attr("data-show");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvShow + "&api_key=0DFbYPoL3Baw4PRlHmIqhxNJaIILMRD5";
        
        
        
        $.ajax({
            url:queryURL,
            method: "GET"
         }).done(function(response) { 
            var results = response.data;
            console.log(response);

            
            var container = $("<div class= 'results-container'>");

            for(var i = 0; i < results.length; i++){
                var resultsDiv = $("<div class= 'container-result'>");

                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var showImg = $("<img class='result'>");

                resultsDiv.prepend(showImg);
                resultsDiv.prepend(p);
                container.prepend(resultsDiv);
           
    }
    $("#show-group").prepend(resultsDiv);
        
        });
        });
        $(document).on("click", ".result",function(){

        })
                //loops through array of tv-shows
                for (var i = 0; i < shows.length; i++){
                    console.log(shows);
                    var button = $("<button>").text(shows[i]);// shows text on the button 
                    console.log(button);
                    button.attr("data-name", shows[i]);
                    button.addClass("tv-btn"); //class added
                    console.log(button);
                    $("#button-view").append(button); //adds button to html 
                }
            
            
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

