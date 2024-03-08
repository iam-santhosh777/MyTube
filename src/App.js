import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage/>
      }
    ]
    }
  ]
)
function App() {
  return (
    <Provider store={store} >
    <div>
        {/* <h1 className="text-red-500 font-bold text-3xl">Welcome to My Youtube Project</h1> */}
        <Header />
        <RouterProvider router={appRouter}/>
       
    </div>
    </Provider>
  );
}

export default App;
