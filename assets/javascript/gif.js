var animal =["Cat","Dog","Rabbit","Monkey","Lion","Tiger","Bear","Elephant","Horse","Deer","Fox","Wolf","Giraffe","Zebra","Kangaroo","Raccoon","Sheep","Leopard","Goat","Camel","Gorilla","Cheetah"]

function displayAnimalInfo(){
    
   var topics = $(this).attr("data-name")
   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=1cBKXxYLRE9xRI7BWIUjTB2xHdAv7KT8&limit=10";
   console.log("displayAnimalInfo");
   console.log(queryURL);
   $.ajax({
       url : queryURL,
       method :"GET" 
   }).then(function(response){
    console.log(response);
    console.log(queryURL)
    //storing an array of result in result variable
    var results = response.data;
    console.log(results)
    $("#gif-appear-here").empty();
    //Looping over every result items
    for (var i =0; i<results.length; i++){
     //creating div for gif
        var gifDiv = $("<div>");
     //storing result items rating
     var rating = results[i].rating;
     console.log(rating)
     //creating paragraph tag with result items rating
     var p = $("<p>").text("Rating :" + rating);
    //creating img tag
     var animalImage = $("<img>")   
     //Giving img tag src attribute from result
     animalImage.attr("src", results[i].images.downsized_still.url);
     animalImage.attr("data-state", "still");
     animalImage.attr("class","animal-img");

     animalImage.attr("data-still", results[i].images.downsized_still.url);
     animalImage.attr("data-animate", results[i].images.downsized.url);

  //   console.log(results[i].images.downsized_still.url);  
     console.log(animalImage);
     gifDiv.append(p);
     gifDiv.append(animalImage);
         $(".gif-appear-here").prepend(gifDiv);
    
   } 
})
}
$(document).on("click", ".animal-img", function() {
  var state = $(this).attr("data-state")
  if(state === "still"){
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }

})
   function randerButtons(){
       $("#button-view").empty()

       for (var i=0; i<animal.length; i++){
           var a = $("<button>");
           // a.addClass("animal");
            a.attr("data-name",animal[i]);
            a.attr("class","gif");
            a.text(animal[i]);
            $("#button-view").append(a);
            console.log(a);
       }
   }
     $("#add-animal").on("click",function(event){       
          event.preventDefault();
        var y = $("#animal-input").val().trim();
        animal.push(y);
        console.log(animal)
        randerButtons();
    })
    $(document).on("click",".gif",displayAnimalInfo);
    randerButtons();
 
