import React from "react";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { SearchResults } from "./pages/searchResults";

function App() {
  const [data, setData] = React.useState(null);

  window.document.title = "Pokemon API | John Mainiero";
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search-results" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
