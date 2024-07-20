import Link from "next/link";
import SearchBar from "./SearchBar";
import Navitems from "./navitems";

const NavBar = () => {
  return (
    <nav>
      <div className="h2">
        <Link href={"/"}>
          <h2>IMDB</h2>
        </Link>
        <span>clone</span>
      </div>

      <SearchBar />
      <Navitems />
    </nav>
  );
};

export default NavBar;
