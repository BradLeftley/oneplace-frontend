import React from "react"
import Films from "./Films"
import HeaderGroup from "./HeaderGroup"
import TvShows from "./TvShows"
import WatchListFilms from "./WatchListFilms"
const Dashboard = () => {
    return <>
    <HeaderGroup/>
    <Films />
    <TvShows />
    <WatchListFilms />
    </>
}

export default Dashboard


