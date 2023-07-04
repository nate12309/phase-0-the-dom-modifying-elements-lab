// index.js

// 1) Remove the <main> element with id 'main'
const mainElement = document.querySelector('#main');
mainElement.remove();

// 2) Create a 'newHeader' variable and assign it to an <h1> node
const newHeader = document.createElement('h1');

// 3) Assign the id 'victory' to the 'newHeader' element
newHeader.id = 'victory';

// 4) Set the text content of 'newHeader' to include "YOUR-NAME is the champion"
const yourName = "Nate Horne"; // Replace with your actual name
newHeader.textContent = `${yourName} is the champion`;

// Append the 'newHeader' element to the document body
document.body.appendChild(newHeader);

// test/indexTest.js

require('./helpers.js');

describe("index.html", () => {
  describe("after index.js is processed", () => {
    // Declare newHeader variable outside the tests to make it accessible to all of them
    let newHeader;

    beforeEach(() => {
      // Clear the document body before each test
      document.body.innerHTML = '';
      
      // Load index.js file
      require('../index.js');
      
      // Assign the value of newHeader from the global scope to the local variable
      newHeader = document.querySelector('h1');
    });

    it("no longer has DOM node 'main#main'", () => {
      expect(document.querySelector('main#main')).to.not.exist;
    });

    it("has a 'newHeader' variable that points to an <h1> node", () => {
      expect(newHeader.nodeName).to.eql("H1");
    });

    it("the 'newHeader' variable that points to the <h1> node has an id of 'victory'", () => {
      expect(newHeader.id).to.eql("victory");
    });

    it("the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text \"Nate Horne is the champion\" inside it", () => {
      expect(newHeader.innerHTML).to.include("is the champion");
    });

  });
});
