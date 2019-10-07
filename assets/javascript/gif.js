var animal =["Cat","Dog","Rabbit","Monkey","Lion","Tiger","Bear"]

function displayAnimalInfo(){
    
   var topics = $(this).attr("data-name")
   var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=1cBKXxYLRE9xRI7BWIUjTB2xHdAv7KT8&limit=10";
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
     animalImage.addclass(".img","data-state", "still");

    // animalImage.attr("data-still", results[i].images.downsized_still.url);
    // animalImage.attr("data-animate", results[i].images.downsized.url);

     console.log(results[i].images.downsized_still.url);
     
     console.log(animalImage);
     gifDiv.append(p);
     gifDiv.append(animalImage);
    //  var state = $(this).attr("data-state");
    //  if (state === "still") {
    //     $(this).attr("src", $(this).attr("data-animate"));
    //     $(this).attr("data-state", "animate");
    // } else {
    //     $(this).attr("src", $(this).attr("data-still"));
    //     $(this).attr("data-state", "still");
         $(".gif-appear-here").prepend(gifDiv);
    // }
   } // for loop
}) // response
}


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

  // $("#button-view").on("click",function(){

  // })
  //  $(".gif").on('click',function(){
  //     var x = $(this).attr("data-name");
   //     console.log(x)
// //        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=1cBKXxYLRE9xRI7BWIUjTB2xHdAv7KT8&limit=10";
// //          console.log(queryURL);
// //         $.ajax({
// //             url : queryURL,
// //            method : "GET",
// //        }).then(function(response){
// //            // $("#add-animal").text(JSON.stringify(response));
      //   });


// //    })
  // var submit =function(){
     $("#add-animal").on("click",function(event){       
          event.preventDefault();
        var y = $("#animal-input").val().trim();
        animal.push(y);
        console.log(animal)


        randerButtons();
    })

// //     }
// //    var displayGif = function(){
// //       var btnVal = $(this).data("name");
// //        console.log(btnVal);

// }


    $(document).on("click",".gif",displayAnimalInfo);

    randerButtons();
      //  submit();
 
