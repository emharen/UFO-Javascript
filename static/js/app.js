// from data.js
var Data = data;


// Get a reference to the table body
var table = d3.select("tbody");

// Step 1: Loop Through `Data` and console.log each object
Data.forEach(function(UFO) {
    console.log(UFO);
    var row = table.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });



// Getting a reference to the button on the page
var button = d3.select("#filter-btn");


//on click
button.on("click", function(){

    //prevent from refreshing
    d3.event.preventDefault();

    // Getting a reference to the input element on the page 
    var inputField = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputField.property("value");

    var filteredData= Data.filter(dates=>dates.datetime==inputValue);
    console.log(filteredData);

    
    table = d3.select("tbody");

   
    table.html("");
 

    filteredData.forEach(function(fill) {
      var row = table.append("tr");
      Object.entries(fill).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
      });
    });

      // Select the input value from the form
    var shape = d3.select("#myInput").node().value;
    console.log(shape);

      // clear the input value
    d3.select("#myInput").node().value = "";

    var filteredData2= Data.filter(dates=>dates.shape==shape);
    console.log(filteredData2);


});