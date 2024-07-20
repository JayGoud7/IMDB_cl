import { getMovieDetails, getSimilarMovies } from "@/src/utils/api";
import { ImFire } from "react-icons/im";

import Link from "next/link";
import Image from "next/image";

const Detailpage = async ({ params }) => {
  const MovieDetails = await getMovieDetails(params.id);
  const SimilarMovies = await getSimilarMovies(params.id);

  return (
    <section className="similar_sec">
      <div className="details">
        <div className="img-div2">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              MovieDetails.backdrop_path || MovieDetails.poster_path
            }`}
            width={220}
            height={330}
            alt="image-moviess"
            priority={true}
          />
        </div>

        <div className="desc-2">
          <h3>{MovieDetails.title}</h3>
          <div className="col-2">
            <span>{MovieDetails.release_date}</span>
            <span>{MovieDetails.original_language}</span>
            <span>
              {" "}
              <ImFire className="fir" />
              {MovieDetails.popularity}
            </span>
          </div>
          <div className="col-genre">
            {MovieDetails.genres.map((genre, index) => {
              return (
                <span key={index} className="genre">
                  {genre.name}
                </span>
              );
            })}
          </div>
          <div className="overview">
            <h4>{MovieDetails.overview}</h4>
          </div>
        </div>
      </div>

      {/* {similarmovies} */}
      <h2>similar movies</h2>
      <div className="cards">
        {SimilarMovies.map((movie, index) => {
          return (
            <div key={index} className="cards_inner">
              <Link href={`/movies/${movie.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${
                    movie.poster_path || movie.backdrop_path
                  }`}
                  width={220}
                  height={330}
                  alt="image-movies"
                  priority={true}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Detailpage;
