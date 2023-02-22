import { RESTAURANT_LIST_SUCCESS,RESTAURANT_LIST_FAIL } from '../constants/restaurantConstants'
import axios from 'axios'
//work as  asynchronous function when async
export const listRestaurants = () =>async (dispatch)=>{
     
    try{
        //destructuring the data  apifetch
        const { data } = await axios.get('/restaurants.json')

        dispatch({
            type:RESTAURANT_LIST_SUCCESS,payload : data.restaurants
        })
     }
     catch (error) {

        dispatch(
            {
                type:RESTAURANT_LIST_FAIL,payload : error
            }
        )

     }

}