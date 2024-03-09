import { useEffect, useState } from "react";
import img from "../assets/imgTwo.jpg";
import Navbar from "./Nav";
const LandingPg = () => {
  const [count, setCount] = useState(0);

  function transitionGenerator() {
    if (count === 1) {
      return "tran_one";
    } else if (count === 2) {
      return "tran_two";
    } else if (count === 3) {
      return "tran_three";
    } else if (count === 4) {
      return "tran_four ";
    } else if (count === 5) {
      return "tran_five ";
    } else if (count === 6) {
      return "tran_six ";
    } else if (count === 7) {
      return "tran_six ";
    } else if (count === 8) {
      
    }
    // return "transition_five ";
  }
  useEffect(() => {
      play();
    
  }, []);
  // useEffect(()=>{
  //      playScreen()

  // },[])
  const play = () => {
    let i = count;
    const delay = 1000;
    const intervalId = setInterval(() => {
      if (i >= 9) {
        clearInterval(intervalId);
      } else {
        setCount(i);
        i++;
      }
    }, delay);
  };
  return (
    <>
      <main className="h-screen w-screen bg-white ">
        <Navbar/>
        <div className={` w-[100%] h-screen flex justify-center items-center overflow-hidden relative ${"tran_one"}`}>
          <div className=" text-5xl font-bold font-sans overflow-hidden relative">
            <h1 className="bg_text text-[10vw]">
              OUR ADVANTAGES
            </h1>
          </div>
          <img
            src={img}
            alt=""
            className="w-[25vw] md:w-[15vw] absolute z-10 rounded-xl shadow-md img_one"
          />
          <img
            src={img}
            alt=""
            className="w-[25vw] md:w-[15vw] absolute z-10 rounded-xl shadow-md img_two"
          />
          <img
            src={img}
            alt=""
            className="w-[25vw] md:w-[15vw] absolute z-10 rounded-xl shadow-md img_three"
          />
          <img
            src={img}
            alt=""
            className="w-[25vw] md:w-[15vw] absolute z-10 rounded-xl shadow-md img_four"
          />
          <div className="footer absolute bottom-1 flex justify-between items-center h-10 text-black text-sm w-screen ">
            <p className="ml-5">some text</p>
            <div className=" mr-5 flex flex-col items-center">
              <p>
                <span>🧭 </span>
                <span>🧭 </span>
                <span>🧭 </span>
              </p>
              <p>Some other text</p>
            </div>
          </div>
          <div className="arrow_wrapper absolute bottom-0 h-[10vmin] w-[20vmin] bg-gray-400 half_circle flex justify-center items-center">
                <p className=" text-white text-3xl mt-1 mr-2 animate-bounce">
                ↓
                </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPg;
