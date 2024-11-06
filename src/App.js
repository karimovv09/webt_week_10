import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p><strong>1. What is a framework?</strong></p>
      <p> A framework is a pre-built, structured environment that provides tools, libraries, and guidelines to simplify the development process. Frameworks help developers by offering reusable code for common tasks, allowing them to focus on the unique parts of their application.</p>
      <p><strong>2. Differences and advantages of frameworks?</strong></p>
      <h2>React</h2>
  <h3>Advantages</h3>
  <ul>
    <li>Component-Based: Allows for reusable and modular code.</li>
    <li>Virtual DOM: Efficiently updates and renders components, improving performance.</li>
    <li>Large Ecosystem: Extensive libraries and tools, such as Redux for state management.</li>
    <li>Flexibility: Can integrate with other libraries or frameworks for complex needs.</li>
    <li>Community Support: Backed by Facebook with excellent community resources.</li>
  </ul>


  <h3>Differences</h3>
  <ul>
    <li>A JavaScript library developed by Facebook, focusing mainly on building user interfaces. It uses JSX for templating and requires additional libraries for routing and state management (like Redux).</li>
  </ul>

  <h2>Angular</h2>
  <h3>Advantages</h3>
  <ul>
    <li>Comprehensive: Provides built-in tools for routing, state management, and HTTP requests.</li>
    <li>Two-Way Data Binding: Syncs model and view automatically for real-time updates.</li>
    <li>Dependency Injection: Improves modularity and testability.</li>
    <li>CLI: Angular CLI enables quick project scaffolding and building.</li>
    <li>Enterprise-Ready: Preferred for enterprise applications due to robustness and structure.</li>
  </ul>

  <h3>Differences</h3>
  <ul>
    <li>A comprehensive MVC (Model-View-Controller) framework developed by Google, using TypeScript. It provides everything needed for a complete app, including routing, dependency injection, and form handling, making it more complex to learn but suited for large applications.</li>
  </ul>

  <h2>Vue</h2>
  <h3>Advantages</h3>
  <ul>
    <li>Simplicity: Beginner-friendly, especially for small to medium projects.</li>
    <li>Two-Way Data Binding: Similar to Angular, supports two-way data binding.</li>
    <li>Progressive: Can enhance specific parts of an app or be used as a full framework.</li>
    <li>Reactive System: Efficiently updates the DOM for smooth user interactions.</li>
    <li>Great Documentation: Detailed, beginner-friendly documentation.</li>
  </ul>

  <h3>Differences</h3>
  <ul>
    <li>A progressive framework that can function as a library or a full framework, developed by independent developer Evan You. It uses HTML-based templates and is easier to learn, making it suitable for smaller projects or gradual adoption in larger ones.</li>
  </ul>
    </div>
  );
}

export default App;
