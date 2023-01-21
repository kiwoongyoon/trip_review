import './App.css';
import header from './components/header';
import select_nation from './components/select';

function App() {
  return (
    <div className="App">
      {header()}
      <body>
        <div className='select'>
          {select_nation()}
          <div className='select_city'>
            
          </div>
        </div>
        <div className='selected_city'/>
      </body>
    </div>
  );
}

export default App;