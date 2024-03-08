import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Gridarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 34, 5, 6, 7, 8, 9];
  function transitionGenerator() {
    if (count === 1) {
      return "tansition_one";
    } else if (count === 2) {
      return "transition_two";
    } else if (count === 3) {
      return "transition_three";
    } else if (count === 4) {
      return "transition_four ";
    } else if (count === 5) {
      return "transition_five ";
    }
  }
  const play = () => {
    let i = count;
    const delay = 1000; 
  
    const intervalId = setInterval(() => {
      if (i >= 6) {
        clearInterval(intervalId);
      } else {
        setCount(i);
        i++;
      }
    }, delay);
  };
    
  
  const counter = () => {
    if (count < 5) {
      setCount((cou) => cou + 1);
    }
  };
  return (
    <>
      <div className="btn_wrapper " id="top">
        <button onClick={counter}> transition {count}</button>
        <button onClick={play}> Play all <br />{count}</button>
        <button onClick={() => setCount(0)}> refresh</button>
        <button>
          <a href="#blank">blank page</a>{" "}
        </button>
      </div>

      <main className={`table ${transitionGenerator()}`}>
        <div className="genbox">
          <div className="icon_1">{count > 2 ? "↓" : "↑"}</div>
          <div className="icon_2">{count !== 0 ? "↓" : "Hi"}</div>
        </div>
        <div className="gen2 ">
          <div className="icon_3">{count > 1 ? "↑" : "Hello"}</div>
          <div className="icon_4">👱 </div>
          <p className="note">Thank You</p>
        </div>

        {Gridarr.map((entries, index) => {
          return <div key={index} className="box transition-three"></div>;
        })}
      </main>
      <section id="blank" className="">
        <button>
          <a href="#top">top</a>{" "}
        </button>
      </section>
    </>
  );
}

export default App;
