import './App.css';
import { LayoutCatalog } from './features/Catalog/components/LayoutCatalog';
import { SearchBar } from './features/Search/components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <LayoutCatalog />
    </div>
  );
}

export default App;
