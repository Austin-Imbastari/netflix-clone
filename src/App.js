import React from "react";
import requests from "./api";
// Styles
import GlobalStyles from "./styles/Global.styles";
//Components
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";

function App() {
    return (
        <>
            <GlobalStyles />
            <Nav />
            <Banner />
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title='TRENDING NOW' fetchUrl={requests.fetchTrending} />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Action' fetchUrl={requests.fetchActionMovies} />
            <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
            <Row
                title='Documentary'
                fetchUrl={requests.fetchDocumentariesMovies}
            />
        </>
    );
}

export default App;
