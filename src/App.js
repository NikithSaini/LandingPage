import NavBar from "./Navbar";
import "./styles.css";
import Imgtxt from "./Imgtxt";
import SearchBar from "./SearchBar";
import Intropara from "./intropara";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Imgtxt />
      <SearchBar />
      <Intropara />
    </div>
  );
}
