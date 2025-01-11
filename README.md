- Module 5 Lab Exercise

- Lab 5.1
1. A basic back-end application with multiple web servers running on different ports.
2. The main port is on 3000.
3. First open index.js which control all server
4. An index1.js is port 4000 to make that run it is npm start:two which is a normal server.

- Lab 5.2
  1. The calculatorRoutes create routes for "add", "subtract", "divide", "multiply", mathematical operation.
  2. First run in terminal - npm start - then local host 3000.
  3. To make this routes work write http://localhost:3000/calculator/subtract?num1=anyNumber&num2=anyNumber but "subtract can be changed".
  4. Then it will give the output in browser.
 
- Lab 5.3
  1. It is the calculator.html which is simple UI. It can be add, subtract, multiply and divide.
  2. I have used express.static(public) to show the UI frontend.
  3. It also include css style.
 
- Lab 5.4
  1. It is include in m5lab4_expressapp then go in routes then friends routes, which is lab 4 and need post app.
 
- Lab 5.5
  1. I update the application to use controllers instead - calculatorController
  2. Then in Calculatorroutes the code is sets up a route for the /add path which calls the addNumbers function is imported from a separate file.
 
- Lab 5.6
  1. The app.test.js is to ensure all routes are working successfully and returning the expected response.

