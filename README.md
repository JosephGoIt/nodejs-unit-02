# nodejs-unit-01
 Web application serving static web pages.

 The main.js contains custom codes for routing user requests to serve specific content.

Here's the file structure of the project (on monosnap)
https://monosnap.com/file/XXVhIBatyRnmpazNPhUPojluhcgwUV

How to test.

1. Run the Server Locally
First, make sure you have the required dependencies installed and your server is ready to run:
Ensure that you have http-status-codes installed. You can install it using:
npm install http-status-codes
Ensure that the necessary files and folder structure (views, public/images, etc.) are in place.
Once you have the dependencies and files set up, start the server by running the following command in your project directory:
node main.js
If everything is configured correctly, you should see a message like:
The server is listening on port number: 3000
2. Testing with the Browser
Open a browser and go to http://localhost:3000. This should load the content from views/index.html.
Similarly, you can test the following URLs:
http://localhost:3000/courses.html — To load the courses page.
http://localhost:3000/contact.html — To load the contact page.
3. Testing with Postman or Curl
For POST routes, you can use Postman or Curl to send requests and check the server responses.
Postman:
Open Postman.
Set the method to POST.
Use the following URLs to send POST requests and verify the responses:
http://localhost:3000/ — Should respond with views/thanks.html.
http://localhost:3000/graph.png — Should respond with the graph image.
http://localhost:3000/people.jpg — Should respond with the people image.
http://localhost:3000/product.jpg — Should respond with the product image.
* Please take note postman cannot really show media file (jpg, png, etc.). What's important here is to see there's a correct response base on request.
screenshot of test result via postman
https://monosnap.com/file/yoOyBMa1FvrTebyh1Bx41Bo4uuOPVA