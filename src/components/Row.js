import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import styled from "styled-components";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const baseUrl = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request.data.results;
        }
        fetchData();
    }, [fetchUrl]);

    const handleMovieClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(
                movie?.title || movie?.name || movie?.original_name || ""
            )
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <Rows>
            <h2>{title}</h2>
            <RowPoster>
                {movies.map((movie) => (
                    <Movie key={movie.id}>
                        <img
                            onClick={() => handleMovieClick(movie)}
                            className={isLargeRow && "largeRow"}
                            src={`${baseUrl}${
                                isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            alt={movie.name}
                        />
                    </Movie>
                ))}
            </RowPoster>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </Rows>
    );
}

const Rows = styled.div`
    margin-left: 20px;
`;

const RowPoster = styled.div`
    /* border: 1px solid red; */
    display: flex;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Movie = styled.div`
    /* border: 1px solid purple; */
    display: flex;
    object-fit: contain;
    margin: 0px 10px;
    transition: transform 450ms;

    .largeRow {
        max-height: 400px;
        transition: transform 450ms;
    }
    .largeRow:hover {
        transform: scale(1);
    }

    img {
        max-height: 180px;
        cursor: pointer;
    }

    &:hover {
        transform: scale(1.08);
        opacity: 1;
    }
`;

export default Row;
