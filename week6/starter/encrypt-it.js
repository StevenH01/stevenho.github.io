/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    // part 1
    console.log("Window loaded!");

    // part 2
    const encryptButton = document.getElementById("encrypt-it");
    const resetButton = document.getElementById("reset");

    encryptButton.addEventListener("click", handleEncryptClick);
    resetButton.addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  // pt2
  function handleEncryptClick() {
    // pt2
    console.log("Button clicked!");

    // pt 4
    const inputText = document.getElementById("input-text").value;
    const resultArea = document.getElementById("result");
    const encryptedText = shiftCipher(inputText);

    resultArea.textContent = encryptedText;
  }
  
  // pt 3
  function handleReset() {
    const inputText = document.getElementById("input-text");
    const resultArea = document.getElementById("result");

    inputText.value = "";
    resultArea.textContent = "";
  }

  // pt 4
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] < "a" || text[i] > "z") {
        result += text[i]; // Non-alphabetic characters stay the same
      } else if (text[i] === "z") {
        result += "a"; // Handle wrapping from 'z' to 'a'
      } else {
        const letter = text.charCodeAt(i);
        result += String.fromCharCode(letter + 1); // Shift letter by 1
      }
    }

    return result;
  }


})();
