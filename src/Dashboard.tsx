import React from "react"
import Films from "./Films"
import FilmsUHD from "./FilmsUHD"
import HeaderGroup from "./HeaderGroup"
import TvShows from "./TvShows"
import WatchListFilms from "./WatchListFilms"
const Dashboard = () => {
    return <>
    <HeaderGroup/>
    <Films />
    <FilmsUHD />
    <TvShows />
    <WatchListFilms />
    </>
}

export default Dashboard


