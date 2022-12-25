import { useState } from 'react';
import './App.css';
import TodoContainer from '../components/TodoContainer';
import Navbar from '../components/Navbar';
import MoneyManager from '../components/MoneyManager';
import Head from '../components/MoneyManager/Head';

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <Navbar />
      <Head />
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          type="button"
          onClick={() => toggleTab(1)}
        >
          TODO
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          type="button"
          onClick={() => toggleTab(2)}
        >
          Money Management
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
          <TodoContainer />
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <MoneyManager />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
