import './App.css';
import React, {useState} from 'react';
import { useStateValue } from './Components/StateProvider/StateProvider';

// COMPONENTS
import ListInput from './Components/ListInput/ListInput';
import List from './Components/List/List';

function App() {  


  const [{todoList}, dispatch] = useStateValue();

  return (
    <div className="App">
      <h1>WELCOME, GUEST!!</h1>
      <ListInput />

      <div className="table_index">
        <h4 className="sl">Sl.No.</h4>
        <h4 className="task">Task</h4>
        <h4 className="deadline">Deadline</h4>
        <h4 className="button-remove"></h4>
      </div>

      {todoList.map((elem, i) => {
        return <List title={elem.task} key={i} id={i} deadline={"2.12.2022"}/>
      })}
    </div>
  );
}

export default App;
