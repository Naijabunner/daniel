import { useEffect, useState } from "react";
import img from "../assets/imgTwo.jpg";
import Navbar from "./Nav";
const LandingPg = () => {
  const [count, setCount] = useState(1);

  function transitionGenerator() {
    if (count === 1) {
      return "tran_one";
    } else if (count === 2) {
      return "tran_two";
    } else if (count === 3) {
      return "tran_two";
    } else if (count === 4) {
      return "tran_two";
    } else if (count === 5) {
      return "tran_two";
    } else if (count === 6) {
      return "tran_two ";
    } else if (count === 7) {
      return "tran_three ";
    } else if (count === 8) {
      return "tran_three ";
    }
    else if (count === 9) {
      return "tran_four ";
    }
    else if (count === 10) {
      return "tran_four ";
    }
    else if (count === 11) {
      return "tran_four";
    }
    else if (count === 12) {
      return "tran_four tran_five";
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
    const delay = 800;
    const intervalId = setInterval(() => {
      if (i >= 13) {
        clearInterval(intervalId);
      } else {
        setCount(i);
        i++;
      }
    }, delay);
  };
  console.log(transitionGenerator());
  return (
    <>
      <main
        className={` h-screen w-screen bg-white main ${transitionGenerator()} overflow-hidden`}
      >
        <Navbar />
  {count < 9 && (      <div
          className={` w-[100%] h-screen flex justify-center items-center overflow-hidden relative ${transitionGenerator()}`}
        >
          <div className=" text-5xl font-bold font-sans overflow-hidden relative">
            <h1 className="bg_text text-[10vw]">OUR ADVANTAGES</h1>
          </div>
          <img
            src={img}
            alt=""
            className="w-[25vw] img md:w-[15vw] absolute z-10 rounded-xl shadow-md img_four border-2 border-blue-400"
          />
          <img
            src={img}
            alt=""
            className="w-[25vw] img md:w-[15vw] absolute z-10 rounded-xl shadow-md img_three border-2 border-green-400"
          />
          <img
            src={img}
            alt=""
            className="w-[25vw] img md:w-[15vw] absolute z-10 rounded-xl shadow-md img_two border-2 border-orange-400"
          />
          <img
            src={img}
            alt=""
            className="w-[25vw] img md:w-[15vw] absolute z-10 rounded-xl shadow-md img_one border-2 border-red-400"
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
            <p className=" text-white text-3xl mt-1 mr-2 animate-bounce">↓</p>
          </div>
        </div>)}



        <section className="w-screen h-screen second flex flex-col justify-center items-center text-justify ">
            <div className="  flex justify-start items-end   overflow-hidden relative w-[70%]">
            <div className="con flex justify-end items-center ">
               <h2 className="text-[5vw] mr-3 texOne">REVOLUTIONIZING</h2>
              <div className=" mr-5  flex-col items-center text-sm p-1 rounded-xl bg-gray-300 boxOne">
              <p>
                <span>🧭 </span>
                <span>🧭 </span>
                <span>🧭 </span>
              </p>
              <p>Some other text</p>
            </div>
            </div>
             
            </div>
            <div className=" text-[5vw] w-[70%] overflow-hidden ">
              <div className="deanss ">
                 <div className="texTwo flex justify-start items-center deansWrapper">
                <p className=" bg-blue-200 rounded-3xl text-xl px-2 assitance">Assitance</p>
              <p className="base_color rounded-xl text-xl mr-2 deanTwo">🚌 </p>
              <p >DENTAL</p>
                <div className=" flex justify-center items-center deansWrapperTwo">
                   <p className="base_color rounded-xl text-xl mr-2 ml-2 deanThree">🚌 </p>
              <p className="base_color rounded-xl text-xl deanFour">🚌 </p>
                </div>
             
              <p className="ml-2">CARE</p>
              </div>
              </div>
             
              
            </div>
            <div className="flex justify-end relative items-end text-[5vw] w-[70%] overflow-hidden">
              <p className="texThree">
                WITH TECHNOLOGY
              </p>
            </div>
            <button className="base_color mt-1 btnTwo">
              🗃 
            </button>
            <img src={img} alt="" className="w-[5rem] rounded-3xl absolute bottom-24 right-[20%] popImg" />
            <img src={img} alt="" className="w-[5rem] rounded-3xl absolute top-24 right-[7%] popImg" />
            <img src={img} alt="" className="w-[5rem] rounded-3xl absolute bottom-24 left-[7%] popImg" />
            {/* footer */}
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
            
        </section>
        <section className="w-screen h-screen third flex justify-center items-center ">
          <div className="w-[50%] h-[100vh] flex-col flex justify-center ">
            <div className=" flex items-center justify-start icons">
              <p className="bg-gray-400 mx-1  p-1 rounded-full">🚌 </p>
              <p className="bg-gray-400 mx-1  p-1 rounded-full">🚌 </p>
              <p className="bg-gray-400 mx-1  p-1 rounded-full">🚌 </p>
            </div>
<div className="overflow-hidden last_text">
  <p className="text-[5vw]">
    EXPLORE OUR
  </p>
</div>
<div className="overflow-hidden last_text">
  <p className="text-[5vw]">
    SERVICE. MAKE
  </p>
</div>
<div className="overflow-hidden last_text">
  <p className="text-[5vw]">
   YOUR SMILE SHINE
  </p>
</div>
<div className="">
 <button className="text-[1rem] m-2 w-[20vw] h-[10vh]  base_color rounded-full border-none text-sm text-white px-2 py-1">
  some text
 </button>
 <button className="text-[1rem] w-[20vw] h-[10vh] m-2 bg-white border-[1px] border-solid rounded-full text-sm border-black px-2 py-1">
  some text
 </button>
</div>
          </div>
          <div className="w-[50%] h-[100vh] flex justify-center items-center text-3xl">
      <h5 >COMING SOON!! <br /> Abeg</h5>
          </div>


        </section>
      </main>
    </>
  );
};

export default LandingPg;
