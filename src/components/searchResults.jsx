"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";

const SearchResults = ({ qparams, movie }) => {
  const [filtered, setfiltered] = useState(movie);
  useEffect(() => {
    setfiltered(movie);
  }, [movie]);

  return (
    <section className="search_result">
      <h2>
        Top Search Result <span>&quot;{qparams}&quot;</span>
      </h2>

      <div className="cards">
        {filtered.map((movie, index) => (
          <Link
            href={`/movies/${movie.id}`}
            key={index}
            className="cards_inner"
          >
            <div className="img-div">
              <Image
                src={`https://image.tmdb.org/t/p/original/${
                  movie.poster_path || movie.backdrop_path
                }`}
                alt="movieimg"
                width={300}
                height={330}
                priority={true}
              />
            </div>
            <div className="desc">
              <h4>{movie.title}</h4>
            </div>
            <div className="modl">
              <span>
                <BiSolidLike />
              </span>
              <span>{movie.vote_count}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
