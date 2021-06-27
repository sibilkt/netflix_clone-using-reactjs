import React, { useContext, useEffect, useState } from 'react'
import axios from '../../axios'
import { imgUrl, APT_KEY } from '../../Constants/constants'
import YouTube from 'react-youtube';

import './Rowpost.css'
import { useHistory } from 'react-router-dom';
import {CardsContext} from '../../Context/MovieCardContext'

function Rowpost(props) {
    const [cards, setCards] = useState([])
    const [utubeUrl, setUtubeUrl] = useState('')
    const {card,setCard} = useContext(CardsContext)
    const history = useHistory()
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setCards(response.data.results)
            
        }).catch((err) => {
            alert('Network Error')
        })
    }, [props.url])
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
                setUtubeUrl(response.data.results[0].key)
            }
            else {
                alert('There is no data associated with the selected item!  Please try another item')
            }

        }).catch((error) => {
            alert('please try another item')
        })
    }
    const seeMore = (data) => {
        setCard(data)
        history.push('/movie_details');
        console.log(card);
    }
    return (
        <div className="text">
            <h2>{props.title}</h2>
            <div className="row">

                <div className="posters">

                    {cards.map((obj, index) => {
                        return (
                            <div className="new">
                                <img className={props.issmall ? 'issmall' : 'poster'} onClick={() => playHndl(obj.id)} alt="" src={`${imgUrl + obj.backdrop_path}`}></img>
                                <h3 className="down">{props.issmall ? obj.title : obj.name}</h3>
                                <h5 className="downleft"
                                    onClick={()=>{seeMore(obj)}}>Popularity:{obj.popularity}</h5>
                            </div>
                        )
                    }
                    )
                    }
                </div>
                {utubeUrl && <YouTube videoId={utubeUrl} opts={opts} />}
            </div>

        </div>
    )
}

export default Rowpost