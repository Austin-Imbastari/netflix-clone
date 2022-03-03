import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import requests from "../api";

function Banner() {
    const [movie, setMovie] = useState([]);
    const bgImg = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <Header
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <BannerContents>
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                <BannerButton>
                    <button>Play</button>
                    <button>My List</button>
                </BannerButton>
                <Description>
                    <h1>{truncate(movie?.overview)}</h1>
                </Description>
            </BannerContents>
            <div className='banner--fadeBottom' />
        </Header>
    );
}

const Header = styled.div`
    color: white;
    object-fit: contain;
    min-height: 448px;
    .banner--fadeBottom {
        height: 10rem;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(37, 37, 37, 0.61),
            #111
        );
    }
`;
const BannerContents = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    min-height: 190px;
    h1 {
        font-size: 3rem;
        font-weight: 800;
        padding-bottom: 0.3rem;
    }
`;
const BannerButton = styled.div`
    button {
        cursor: pointer;
        color: white;
        outline: none;
        border: none;
        font-weight: 700;
        border-radius: 0.2vw;
        padding-left: 2rem;
        padding-right: 2rem;
        margin-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: rgba(51, 51, 51, 0.5);
    }

    button:hover {
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
`;
const Description = styled.div`
    min-height: 80px;
    width: 45rem;

    h1 {
        line-height: 1.3;
        padding-top: 1rem;
        font-size: 1.2rem;
    }
`;

export default Banner;
