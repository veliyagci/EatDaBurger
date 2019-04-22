$(document).ready(function() {

    // Add Burger to Database Button
    $("#addBurger").on("click", function(){
      console.log("Add Burger Button Clicked");
  
      // Create an Object to be Sent to the Backend
      let burger = {
        "burger_name": $(burgerName).val(),
        "devoured": $(burgerName).data("eaten")
      };
  
      $.post("/api/burger", burger).done((response)=>{
        console.log("Created a New Burger!");
        // Reload the page to get the updated list
        location.reload();
      });
  
    }); // End of Create New Burger
  
    // Update Burger from Database Button
  
    $(".burgerBlock").on("click", function(){
      console.log("Button Clicked");
  
      const burgerID = $(this).data("id");
      const devoured = $(this).data("eaten");
  
      const burgerUpdate = {
        "devoured": devoured
      };
  
      console.log("button id is " + burgerID);
  
      $.ajax("/api/burger/" + burgerID, {
        type: "PUT",
        data: burgerUpdate
      }).done((response)=>{
        console.log("Burger Updated");
        location.reload();
      });
  
    }); // End of Devour it Button
  
  });