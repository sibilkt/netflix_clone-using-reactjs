import {createContext, useState} from 'react'

export const CardsContext = createContext(null)

function Movie({children}){

    const [card, setCard] = useState()
    return (
        <CardsContext.Provider value={{card, setCard}}>
            {children}
        </CardsContext.Provider>
    )
}

export default Movie;