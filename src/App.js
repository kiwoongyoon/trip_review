import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Edit from './pages/Edit';
import Write from './pages/Write';

const App = ()=>{
  return(
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/articles' element={<Articles/>}/>
      <Route path='/articles/:id' element={<Article/>}/>
      <Route path='/write' element={<Write/>}/>
      <Route path='/edit' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
