import { getTrendingMovies } from "@/src/utils/api";

import Sortsection from "./sort";

const Cards = async () => {
  const movies = await getTrendingMovies();

  return (
    <section>
      <Sortsection movies={movies} />
    </section>
  );
};

export default Cards;
