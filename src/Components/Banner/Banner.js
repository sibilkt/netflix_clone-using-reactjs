import React, { useContext, useEffect, useState } from 'react'
import { APT_KEY, imgUrl } from '../../Constants/constants'
import { trending } from '../../urls'
import axios from '../../axios'
import './Banner.css'
import YouTube from 'react-youtube'


function Banner() {
    const [movie, setmovie] = useState()
    const [youtubeVid, setYoutubeVid] = useState('')
    useEffect(() => {
        axios.get(trending).then((response) => {

            // var movieItem=response.data.results[Math.floor(Math.random()*response.data.results.length)]
            // setmovie(movieItem)
            setmovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
        })
    }, [])
    const opts = {
        height: '390',
        width: '640',
        left: '250',
        playerVars: {
            // http://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    const playHndl = (id) => {
        
        axios.get(`/movie/${id}/videos?api_key=${APT_KEY}&language=en-US`).then((response) => {

            if (response.data.results.length !== 0) {
                console.log(response.data.results);
                setYoutubeVid(response.data.results[0].key)
            }
            else {
                alert('The trailer Unavailable!')
            }

        }).catch((error) => {
            alert('please try another item')
        })

    }

    return (
        <div style={{ backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})` }} className='banner'>
            <div className='grid-container' >
                <div className='content' >
                    <h1 className='title'>{movie ? movie.title : ""}</h1>
                    <div className='banner_buttons' >
                        <button className='button' onClick={() => playHndl(movie.id)} >Play</button>
                        <button className='button' >My list</button>
                    </div>
                    <h1 className='description'>{movie ? movie.overview : ""}</h1>
                </div>
                <div className='content'>
                   {youtubeVid && <button onClick={()=>setYoutubeVid('')}></button>}
                    {youtubeVid && <YouTube videoId={youtubeVid} opts={opts} />}
                </div>
                
            </div>

            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner;