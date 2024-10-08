import { getMovies } from "@/src/utils/api";
import SearchResults from "@/src/app/movies/search/searchResults";

const Searchpage = async ({ searchParams }) => {
  const qparams = searchParams.query;
  const allmovies = await getMovies(qparams);
  return (
    <>
      <SearchResults qparams={qparams} movie={allmovies} />
    </>
  );
};

export default Searchpage;
