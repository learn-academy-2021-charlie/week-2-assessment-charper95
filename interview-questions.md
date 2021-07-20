# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is iteration?

  Your answer: Iteration is doing a certain task over and over again until a certain condition is met. Loops are a type of iteration. In a loop a piece of code will run over and over again as long as a certain condition remains true. When the the condition is false the iteration ends.

  Researched answer: Iteration is doing a certain task over and over again until a certain condition is met. Loops are a type of iteration. In a loop a piece of code will run over and over again as long as a certain condition remains true. When the the condition is false the iteration ends. We use for loops when we know how many times we want the code block to run. In a for loop, it will iterate for a set amount of times. This is done with a counter that will increment or decrement until the condition is met. Another type of iteration is a while loop. You use a while loop when you don't know how many many times you want the code block to run. The while loop will iterate forever while the condition is true until the condition becomes false.



2. The built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The built in method .map() takes the predefined parameters of value, index, and array. Value is a required parameter, while index and array are optional.

  Researched answer: The .map method actually takes two predefined parameters. The first parameter which is required is a call back function that is called for every element of an array and returns a value which is added to the new array. The call back function takes 3 predefined parameters of it's own. The parameters of value, index, and array. Value is a required parameter, while index and array are optional. The second parameter which is optional is a this argument parameter. The this argument is a value passed into the function as its this value.



3. What is object destructuring?

  Your answer: Object destructuring is a type of expression in Javascript that allows you to separate values from arrays and properties from objects and assign them as variables. It is a convenient way to access values that are in an array or object.

  Researched answer: The destructuring assignment is a syntax in javascript that acts as an expression. It makes it possible to separate values from arrays and properties from objects and assign them to specific variables. These variables can be recalled whenever for convenient use. The destructuring assignment starts with the variable keyword, list the names of the elements of an array or names of the properties of an object within curly braces, and finally the names are assigned a variable name which can be recalled whenver needed.



4. What is the difference between an object and a class?

  Your answer: Classes are blueprints for objects. Classes are a type of function that is used in creating objects. Classes set up the properties and methods that the objects of the specific class will have. Objects are real things that are abstracted from classes. Classes don't truly exist. Classes are just prototypes of an object.

  Researched answer: Classes are blueprints for objects. Javascript uses something called prototypal inheritance. Classes don't actually exist. A class is not a thing, a class is a type of thing. It sets up rules for how an instance of an object is going to behave. It is a template for creating objects. An object is an instance of a class, while classes are logical entities, objects are physical entities. The class is declared once, while an object created as many times as required.



5. Why would you use the method super()?

  Your answer: You use the super() method inside the constructor() method of a child class to superimpose the properties of the parent class onto the child class. It is used to create inheritance of a parent class.

  Researched answer: You use the super() method inside the constructor() method of a child class to superimpose the properties of the parent class onto the child class. It is used to create inheritance of a parent class. In order to call the parent classes methods, you would use the super.<methodName>  syntax. The super() method references the parent class, and when a child classes is created, superimposes the properties of the constructor() method into the child class along with any new properties of the child class.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting is a behavior of Javascript that by default acts as if variable and function declarations were at the top of the page or current scope. The declarations are hoisted to the top. They are not literally put at the top, but by default Javascript assumes that they are.

  Researched answer: Hoisting is a behavior of Javascript that by default acts as if variable and function declarations were at the top of the page or current scope. The declarations are hoisted to the top. They are not literally put at the top, but by default Javascript assumes that they are. What actually happens is during the compile phase when running the code, are put into the memory and are treated as if they were at the top of the scope, but in reality remain where you typed them in the code.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. React: React is a free and open-source library of Javascript for building User Interfaces or User Interface Components for webpages, mobile webpages, or mobile apps.

2. React lifecycle methods: React lifecycle methods are the events that happen to a React Component from its beginning to its end. React components go through a series of events known as mounting, update, and unmount. The most common lifecyle method is render() that renders a component to the user interface during the mounting and updating of a component.

3. React state: React state is an object that stores the dynamic data of a React component and determines how it renders and behaves.

4. Component invocation/call: In React you can nest components which will allow you to call react component inside the return method of another component. This allows for building more complex applications.

5. DOM Events: DOM Events which stands for Document Object Model Events are indications that something has reacted, or is reacting, and caused by user interactions or by the browser. DOM allows Javascript to react to HTML events.
