import './App.css'
import React, {useCallback, useEffect, useState, useRef,memo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([
    {
      name: "css",
      status: true,
    }
  ]);
  const [trueCount, setTrueCount] = useState(0);
  const [falseCount, setFalseCount] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("useeffect");
    document.title = `home ${count}`;
  }, [count]);

  console.log("return");

  useEffect(() => {
    let trueCount = 0;
    let falseCount = 0;
    todo.forEach(item => {
      if (item.status === true) {
        trueCount++;
      } else {
        falseCount++;
      }
    });
    setTrueCount(trueCount);
    setFalseCount(falseCount);
  }, [todo]);

  const handleAdd = () => {
    const newItem = {
      name: text,
      status: false
    };
    setTodo([...todo, newItem]);
  }
  const cachedFn = useCallback(HeaderCl, []);

  const HeaderCl=()=>{
    setCount(prevCount => prevCount + 1);
  }
  return (
    <>
      <Header HeaderCl={cachedFn}/>
      <h1>{count}</h1>
      
      <h1>List Todo</h1>
      <input type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <p>true: {trueCount}, false: {falseCount}</p>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item.name} | {item.status.toString()}</li>
        ))}
      </ul>

      
    </>
  
  );
 
}
const Header= memo (function Header({HeaderCl}){
  return <>
    <h1> Header</h1>
    <button className="btn btn-primary"
        onClick={(HeaderCl)}
      >Count</button>

  </>
})
export default App;
