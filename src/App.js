import Nav from "./Componnents/Nav/Nav";
import React from "react";
import "./App.css"
import Banner from "./Componnents/Banner/Banner";
import {orginals,action, romance} from './url'
import RowPost from "./Componnents/RowPost/RowPost";


function App() {
  return (
    <div className="App">
   <Nav/>
   <Banner/>
   
   <RowPost url={action} title={'Action'} />
   <RowPost url={orginals} title={'Netflix Orginal'} isSmall />
   <RowPost url={romance} title={'Love'} isSmall />
    </div>
  );
}

export default App;
