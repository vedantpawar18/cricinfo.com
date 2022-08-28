import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MatchDetail from './Components/ScorePage/MatchDetail';
import { Scorecard } from './Pages/Scorepage/Scorecard';

import News from './Pages/News';
import Footer from './Pages/Footer';
import { SchedualFilter } from './Components/Schedual/SchedualFilter';


function App() {


  return (
    <div className="App">
<Scorecard/>

</div>
)
}

export default App;
