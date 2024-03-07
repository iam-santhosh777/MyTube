import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>Home</div>
    }
  ]
)
function App() {
  return (
    <Provider store={store} >
    <div>
        {/* <h1 className="text-red-500 font-bold text-3xl">Welcome to My Youtube Project</h1> */}
        <Header />
        <Body />
        {
          /***
           * Head
           * Body
           *    - sidebar 
           *            - sidebar menu Items (home, shorts, trending, subscriptions, liked videos)
           *    - main container
           *            - buttons list (All, Music, Games, Telugu videos, English videos, Hindi videos, Etc..)
           *            - videos container 
           *                  - videos (cards)
           * 
           * 
           * 
           * 
           * 
           * 
           */
        }
    </div>
    </Provider>
  );
}

export default App;
