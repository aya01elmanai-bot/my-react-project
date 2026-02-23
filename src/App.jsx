const courseTitle = "Advanced Web Development";

const studentName = "Eya Elmanai";

function sayHello() {
  return "Hello, " + studentName + "!";
}

function App() {
  const student = {
    name: "Eya Elmanai",
    age: 20,
    track: "Web Development",
  };

  return (
    <div>
      <h1>first trial</h1>
      <p>{studentName}</p>
      <h2>Step 1</h2>
      <p>Q: Why must React components start with a capital letter?</p>
      <p>A: React uses the capital letter to tell components apart from regular HTML tags. A lowercase tag like div is HTML, but App is a React component.</p>
      <p>Q: What error do you get if you return two sibling elements?</p>
      <p>A: You get a parse error saying adjacent JSX elements must be wrapped in an enclosing tag.</p>

      <h2>Step 2</h2>
      <p>{studentName}</p>
      <p>Q: What happens if you remove the curly braces around the variable?</p>
      <p>A: JSX treats it as plain text and prints the word studentName instead of the value.</p>
      <p>Q: Can JSX read JavaScript directly without curly braces?</p>
      <p>A: No, curly braces are required to embed any JavaScript expression in JSX.</p>

      <h2>Step 3</h2>
      <p>{courseTitle}</p>
      <p>Q: Why is courseTitle accessible inside the component even though it is defined outside?</p>
      <p>A: Because of JavaScript scope rules — inner scopes can access variables from outer scopes.</p>
      <p>Q: When might this be a bad idea in a real application?</p>
      <p>A: When multiple components share and modify the same variable, it leads to unpredictable bugs.</p>

      <h2>Step 4</h2>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <p>Q: What type of expression is allowed inside curly braces?</p>
      <p>A: Any valid JavaScript expression such as variables, function calls, math, and ternary operators. Statements like if or for are not allowed.</p>

      <h2>Step 5</h2>
      <p>Q: Why does React use htmlFor instead of for?</p>
      <p>A: Because for is a reserved keyword in JavaScript, so JSX uses htmlFor to avoid conflicts.</p>
      <label htmlFor="name">Enter your name:</label>
      <input type="text" id="name" />

      <h2>Step 6</h2>
      <p>Q: Can React render an object directly? Why does rendering the whole object cause an error?</p>
      <p>A: No. React cannot render objects directly. It throws an error saying objects are not valid as a React child. You must access individual properties.</p>
      <p>{student.name}</p>
      <p>{student.age}</p>
      <p>{student.track}</p>

      <h2>Step 7</h2>
      <p>Q: What is the difference between sayHello and sayHello()?</p>
      <p>A: sayHello without parentheses is just a reference to the function and renders nothing. sayHello() calls the function and renders its returned value.</p>
      <p>{sayHello()}</p>

      <h2>Step 8 - Reflection</h2>
      <p>1. One thing I understand well: how JSX uses curly braces to embed JavaScript expressions inside HTML-like code.</p>
      <p>2. One thing still confusing: deciding when a variable should live inside versus outside a component.</p>
      <p>3. One mistake I made and fixed: I tried rendering the whole student object directly and got an error, then fixed it by accessing each property individually.</p>

      <h2>Step 9</h2>
      <p>Q: Why are small descriptive commits important?</p>
      <p>A: They make it easy to track changes, understand project history, revert specific updates, and collaborate with others effectively.</p>
    </div>
  );
}

export default App;