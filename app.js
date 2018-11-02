/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value


 */

$(document).ready(function(){

  console.log("before\n", window.localStorage);
  var makeIDGenerator = function(lastID) {
    let currentID = lastID || 0;
    return function() {
      return ++currentID
    }
  }
  //write a utility function
  var iterator = function(array) {

    //clear the .show-text
    $(".show-text").empty();
    //iterate through storage
    for (var i = 0; i < array.length; i++) {
      //append lis as itereate.
      $('.show-text').append("<li data-me='alex' data-key=" + array.key(i) + ">"  + array.getItem(array.key(i)) + "<input class='check' type='checkbox'>" + "</li>")
    }
      //NOTE: run this on page loads and when i add a new item.
  }
   

  // add event listener
  $(".add-text-btn").on("click", function(){
    //$(".show-text").empty();
    //console.log("newID = ", getID());
    var curTextValue = $('#theKey').val(); // reading from <input>
    if (localStorage.length > 0){
      var getID = makeIDGenerator(localStorage.length-1)
      var curKeyValue = "theKey" + getID(); // change to dynamic key?
    } else {
      var getID = makeIDGenerator(localStorage.length-1)
      var curKeyValue = "theKey" + getID()
    }
    localStorage.setItem(curKeyValue, curTextValue,);
    //$('.show-text').append('<li>' + curTextValue + '</li>');
    //console.log(localStorage[0])
    var obj = {}
    obj.key = localStorage
    console.log(obj)
    iterator(localStorage)
    
  });
 
  // remove item from app

  // listen for click event (del)
  $(".clear-cache-btn").on("click", function(){
    // clear local storage
    localStorage.clear();
    $(".show-text").empty();
    
  });

 // $(document).on('dblclick','li', function(){
 //        $(this).toggleClass('strike').fadeOut('slow'); 

 //      });


  $(".edit").on('click', function() {
    console.log()
    if($('input[type=checkbox]').prop('checked')) {
     
      }
    
  })
      
  
    $("ul").on('dblclick', function(){
    console.log(event.target.dataset)

    var itemName = event.target.dataset.key;
    
    for (key in localStorage) {
      if(key ===  itemName)  {
        localStorage.removeItem(key);
      }
    }
    iterator(localStorage)
  })

  
  // $("ul").on('dblclick', function(){
  //   console.log(event)
  //   var itemName = event.target.innerText;
  //   for(var key in localStorage){
      
  //     if(localStorage[key] ===  itemName)  {
  //       localStorage.removeItem(key);
  //     }
  //   }
  //   iterator(localStorage)
  // })


  // $("ul").on('dblclick', function(){
  //   console.log(event)
  //   var itemName = event.path[6].localStorage;
  //   for(var key in localStorage){
  //     for(var key1 in itemName){
  //       console.log(key1)
  //       if(key === key1) {
  //         localStorage.removeItem(key);
  //       }
  //     }
  //   }
  //   iterator(localStorage)
  // })






  iterator(localStorage)
});