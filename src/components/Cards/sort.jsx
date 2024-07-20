"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSolidLike } from "react-icons/bi";

const Sortsection = ({ movies }) => {
  const [sort, setsort] = useState(movies);

  const sortMovies = (filter) => {
    let sortmovies = [];
    switch (filter) {
      case "release_date":
        sortmovies = [...movies].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;

      case "popularity":
        sortmovies = [...movies].sort((a, b) => b.popularity - a.popularity);
        break;

      case "vote_average":
        sortmovies = [...movies].sort(
          (a, b) => b.vote_average - a.vote_average
        );
        break;

      default:
        break;
    }
    setsort(sortmovies);
  };
  return (
    <section className="section1">
      <select
        onChange={(e) => sortMovies(e.target.value)}
        name="sort"
        id="sort"
      >
        <option value="">-sort-</option>
        <option value="release_date">release date</option>
        <option value="popularity">popularity</option>
        <option value="vote_average">ratings</option>
      </select>

      <div className="cards">
        {sort.map((movie, index) => (
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

export default Sortsection;
