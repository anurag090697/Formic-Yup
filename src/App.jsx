/** @format */

import "./App.css";
import Signup from "./Signup";

function App() {
  return (
    <>
      <div className='container flex items-center justify-center min-h-dvh bg-lime-100 min-w-full select-none'>
        <div className='w-3/5 flex items-center justify-center h-fit'>
          <Signup></Signup>
          <div
            className='w-0 lg:w-1/2 max-h-full bg-cover overflow-hidden rounded-r-lg shadow-lg shadow-lime-900'
            // style={{
            //   backgroundImage: `url('https://images.herzindagi.info/image/2024/Jan/Best-Laptops-Under-50000-2.jpg')`,
            // }}
          >
            {/* <div className="h-96 max-h-full"></div> */}
            {" "}
            <img className="h-[363px]"
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
