import React ,{ useEffect } from "react";
import TopBox from './Components/TopBox/TopBox.js'
import BottomBox from './Components/BottomBox/BottomBox.js'
import useDark from "./Context/darkTheme.jsx";


function App() {
  const {theme, setTheme} = useDark()

  const darkTheme = ()=>{
    setTheme("dark")
  }
  const lightTheme = ()=>{
    setTheme("light")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(theme);
  },[theme])

  return (
    <div className="w-[1445px] h-[1778px] bg-[rgba(247,_247,_248,_1)] dark:bg-[rgba(41,43,50,1)]">
      <button onClick={theme === "light" ? darkTheme : lightTheme} className='relative top-[10px] left-[1300px] w-[100px] h-[40px] rounded-[50px] bg-[black] text-[white] hover:scale-[120%] dark:bg-[white] dark:text-[black]'>
        {theme === "light" ? `Dark` : `Light`}
      </button>
      <TopBox />
      <BottomBox />
    </div>
  );
}

export default App;
