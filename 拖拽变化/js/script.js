var max = 6, // Set max value
    initvalue = 4, // Set the initial value
    icon = "fa-fire", // Set the icon (https://fontawesome.com/icons)
    target = document.querySelectorAll('[data-value]'),
    listIcon = document.getElementById("labels-list");

  // Function to update du value

  function updateValue(target, value){
    target.forEach(function(currentIndex) {
      currentIndex.dataset.value =  value;
    });
  }

  // Init the number of item with the initial value settings

  for (i = 0; i < max; i++) { 
    var picto = "<i class='fas "+ icon +"'></i>";
    $(".labels").append(picto);
  }

  updateValue(target, initvalue);

  // Update the slider on click

  $('.fas').on( "click", function(){
    var index = $(this).index() + 1;
    $( "#range-slider" ).slider( "value", index );
    updateValue(target, index);
  });


  // Init the slider

  $( "#range-slider" ).slider({
    range: "min",
    value: initvalue,
    min: 1, 
    max: max, 

    slide: function( event, ui ) {                     
      updateValue(target, ui.value);
    }
  });