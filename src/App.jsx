/** @format */

import "./App.css";
import Signup from "./Signup";

function App() {
  return (
    <>
      <div className='container flex items-center justify-center min-h-dvh bg-lime-100 min-w-full select-none'>
        <div className='w-4/5 sm:w-3/5 flex items-center justify-center shadow-md shadow-lime-800 h-full border border-sky-500 rounded-lg overflow-hidden'>
          <Signup></Signup>
          <div
            className='hidden lg:block lg:w-1/2 h-full bg-cover overflow-hidden rounded-r-lg '
            // style={{
            //   backgroundImage: `url('https://images.herzindagi.info/image/2024/Jan/Best-Laptops-Under-50000-2.jpg')`,
            // }}
          >
            {/* <div className="h-96 max-h-full"></div> */}
            {" "}
            <img className="lg:h-[405px]"
              src='https://images.herzindagi.info/image/2024/Jan/Best-Laptops-Under-50000-2.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
