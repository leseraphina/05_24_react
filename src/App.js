import AddInfo from "./components/AddInfo";
import AddWrite from "./components/AddWrite";
import './App.css';
import { useCallback, useState, useEffect } from "react";


function App() {
  const [list,setList] = useState([]);
  const fetchData = useCallback(
    () => {
      fetch('./data.json')
      .then(response => response.json())
      .then(data => setList(data))
    },[]
  )
  useEffect(fetchData,[fetchData])
  return (
   <div id="box">
    <AddWrite 
      onSendData = {(myData) => setList([...list,myData])} 
      lastId = {list.reduce((max,item) =>Number(item.id) > max ? Number(item.id) : max,0)} />
    <div id="list">
      <ul>
        {list.map(
          listItem => (
            <AddInfo 
              key={listItem.id}
              listItem = {listItem} 
              onDelete = {myId => setList(list.filter(item => item.id !== myId))}
              />
          )
        )}
       
      </ul>
    </div>
   </div>
  );
}

export default App;
