// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import RecipeList from "./pages/RecipeList"
import AddNewRecipe from './pages/NewRecipe';
import RecipeDetail from './pages/RecipeDetail';
import PlanContext from './contexts/PlanContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Planner from './pages/Planner';
import TagsContextProvider from './contexts/TagsContext';
import Settings from './pages/Settings';

function App() {

  return (
    <Router>
      <PlanContext>
        <TagsContextProvider>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<RecipeList />} />
              <Route path="/add" element={<AddNewRecipe/>} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="/planner" element={<Planner />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </TagsContextProvider>
      </PlanContext>
    </Router>
  );
}

export default App;
