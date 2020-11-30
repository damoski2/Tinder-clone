import react from 'react';
import './App.css';
import { Header, Card, SwipeButton } from './components/index';

function App() {
  return (
    <div className="app">

      {/*Header*/}
      <Header />
     
      {/*TinderCards*/}
      <Card />
      {/*SwipeButton*/}
      <SwipeButton />
    </div>
  );
}

export default App;
