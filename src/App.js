import React from "react";
import Category from "./component/Category";
import AddCatagory from "./component/AddCatagory";
import Mainnav from "./component/Mainnav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
 {path:'',Component:Mainnav,children:[
  {path:'/category',Component:Category},
  {path:'/add-category',Component:AddCatagory}
 ]}
])  
const App = () => {
  
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
};

export default App;
