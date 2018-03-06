// import './css/main.css';

console.log('Hello, World!');

let app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['item one', 'item two'],
  selectedOption: null,
  showOptionList: true,
};

function onFormSubmit(e) {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    console.log(`submitted ${option}`);

    if (!option.match(/^\s+$/)) {
      app.options.push(option);
      renderApp();
    }

    e.target.elements.option.value = '';
  }
}

function onMakeDecision() {
  const rNum = Math.floor(Math.random() * app.options.length);
  console.log(rNum);
  document.getElementById('selected-option').textContent = app.options[rNum];
}

function onRemoveAll() {
  app.options = [];
  renderApp();
}

function optionsList() {
  return app.options.map(
    (option, index) => <li key={`option-${index}`}>{option}</li>
  );
}

function onToggleHideList() {
  app.showOptionList = !app.showOptionList;
  renderApp();
}

const renderApp = () => {
  let template = (
    <div>
      <h1 style={{color: 'green'}}>{app.title}</h1>

      <button
        onClick={onMakeDecision}
        disabled={!app.options.length}
      >What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <button onClick={onToggleHideList}>
        {app.showOptionList ? 'Hide' : 'Show'}
      </button>
      
      <h2 id="selected-option">{app.selectedOption ? app.selectedOption : 'no option selected'}</h2>

      <p>{app.subtitle}</p>

      <ol style={{display: `${app.showOptionList ? 'block' : 'none'}`}}>
        {optionsList()}
      </ol>

      {app.showOptionList && (
        <div>
          <p>Hey! I'm visible now!</p>
        </div>
      )}

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" placeholder="some text" />
        <input type="submit" value="Add Option" />
      </form>

    </div>
  );
  
  ReactDOM.render(template, root); 
}

renderApp();