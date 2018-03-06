
let app = {
  title: 'Indecision App',
  counter: 0,
};

function increment() {
  app.counter += 1;
  renderCounterApp();
  console.log(app.counter);
}

function reset() {
  app.counter = 0;
  renderCounterApp();
  console.log(app.counter);
}

function decrement() {
  --app.counter;
  renderCounterApp();
  console.log(app.counter);
}

const renderCounterApp = () => {
  let template = (
    <div>
      <h1 style={{color: 'green'}}>{app.title}</h1>
      <p>Count: {app.counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );

  ReactDOM.render(template, root);
}

renderCounterApp();
