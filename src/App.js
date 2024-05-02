// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import NavBar from "./NavBar";
import RecipeList from "./RecipeList"
import AddNewRecipe from './NewRecipe';

const viewOptions = Object.freeze({
  LIST: "LIST",
  RECIPE: "RECIPE",
  ADDNEW: "ADDNEW",
  PLANNER: "PLANNER"
})

function App() {
  const [view, setView] = useState(viewOptions.LIST)

  return (
    <div className="App">
      <NavBar viewOptions={viewOptions} setView={setView}/>
      {view === viewOptions.LIST && <RecipeList />}
      {view === viewOptions.ADDNEW && <AddNewRecipe/>}
      {/* {view === viewOptions.RECIPE} */}
      {/* {view === viewOptions.PLANNER} */}
    </div>
  );
}

export default App;
