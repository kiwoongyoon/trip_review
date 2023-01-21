import React, { useState } from 'react';

import './App.css';
import header from './components/header';
import {select_nation,select_city} from './components/select';

function App() {
  const [currunt_nation, set_current_nation] = useState("1")
  return (
    <div className="App">
      {header()}
      <body>
        <div className='select'>
          {select_nation([currunt_nation, set_current_nation])}
          {select_city(currunt_nation)}
          <div>
            지도지도지도<br/>지도지도지도넣기<br/>
            지도지도지도<br/>지도지도지도넣기<br/>
            지도지도지도<br/>지도지도지도넣기<br/>
            지도지도지도<br/>지도지도지도넣기<br/>
            지도지도지도<br/>지도지도지도넣기<br/>
            지도지도지도<br/>지도지도지도넣기<br/>
          </div>
        </div>
        <div className='selected_city'/>
        <h1>{currunt_nation} 여행 후기!</h1>
        <div className='review_board'>
          <div className='review_board_content'>
            리뷰리뷰리뷰<br/>현위치기준리뷰<br/>
          </div>
          <div className='review_board_search'>
            테그, 별점 기준 검색창<br/>
            테그, 별점 기준 검색창<br/>
          </div>
        </div>
      <h1>{currunt_nation} 여행 매칭!</h1>
      <div className='matching_board'>

      </div>
      </body>
    </div>
  );
}

export default App;