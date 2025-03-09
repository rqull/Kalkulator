document.addEventListener("DOMContentLoaded", function () {
  // Wait for the HTML document to finish loading before executing the code inside this function
  document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the HTML element with the id "display"
    let display = document.getElementById("display");

    // Define a global function to append input to the calculator display
    window.appendToDisplay = function (input) {
      // Append the input to the current value of the display element
      display.value += input;
    };

    // Define a global function to calculate the result of the expression in the display
    window.calculate = function () {
      try {
        // Replace commas with periods (for decimal numbers) and evaluate the expression in the display
        display.value = eval(display.value.replace(",", "."));
      } catch (error) {
        // If an error occurs during evaluation, display an error message
        display.value = "Error";
      }
    };

    // Define a global function to clear the calculator display
    window.clearDisplay = function () {
      // Reset the value of the display element to an empty string
      display.value = "";
    };
  });
});
