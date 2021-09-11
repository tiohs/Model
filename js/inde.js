const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');

const file = fs.createWriteStream("file.jpg");
const request = http.get("https://backend.unikomodels.com/wp-content/uploads/2020/06/BOOK-Adriana-Mockovciakova-66-150x150.jpg", 
  function(response) {
    response.pipe(file);
});