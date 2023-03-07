import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import style from './Favorites.module.css'
import { filterCards, orderCards } from "../../redux/actions"
import { useEffect } from "react"

const Favorites = (props) => {

    
    const mapFavorites=()=>{
        return props.myFavorites.map((e,i) => <Card id={e.id} key={i} name={e.name} species={e.species} gender={e.gender} image={e.image} onClose={() => {props.onClose(e.id)}}/>)
        
    }
    
    const dispatch = useDispatch()
    const selectOrderHandler = (event) => {
        dispatch(filterCards('None'))
        dispatch(orderCards(event.target.value))
    }
    useEffect(()=>{
        return ()=>{ dispatch(filterCards('none'))
        dispatch(orderCards('ascendente'))
    }
    
    },[dispatch])

    const selectFilterHandler = (event) => {
        dispatch(filterCards(event.target.value))
    }
    return (
    <div>
        <div>
        <select onChange={selectOrderHandler} >
        <option value="order" disabled='disabled'>Order by</option>
        <option value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>  
        </select>
        <select onChange={selectFilterHandler} >
        <option value="filter" disabled='disabled'>Filter by</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="unknown">Unknown</option>
        <option value="Genderless">Genderless</option>
        </select>
        </div>
        <div>
            {   
                mapFavorites()
            }
        </div>
    </div>
    )
}

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)
