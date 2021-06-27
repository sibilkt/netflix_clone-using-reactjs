import React, { useContext } from 'react'
import { CardsContext } from '../../Context/MovieCardContext'
import { imgUrl } from '../../Constants/constants'
import NavBar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import './MovieDetails.css'


function MovieDetails() {
    const { card } = useContext(CardsContext)
    console.log(card);
    return (
        <div className="movie">
            <NavBar />
            <div className="movie_info_box">

                <div className="title-poster">
                    <img className="title_poster_img" src={`${imgUrl + card.poster_path}`} alt=""></img>
                </div>
                <div className="title_poster_sec_row">
                    <div className="title_details">
                        <h1>Lusifer</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MovieDetails
