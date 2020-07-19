import axios from 'axios'
import { GET_LOCATION, GET_RESTAURANTS } from './types'

// export const getLocation = location => dispatch => {
    
//     axios({
//         "method":"GET",
//         "url":"https://tripadvisor1.p.rapidapi.com/locations/search",
//         "headers":{
//         "content-type":"application/octet-stream",
//         "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
//         "x-rapidapi-key":"fca2cf2d13msh7a82b7fe587bf5cp109cbajsn6a959d485a68",
//         "useQueryString":true
//         },"params":{
//         "location_id":"1",
//         "limit":"30",
//         "sort":"relevance",
//         "offset":"0",
//         "lang":"en_US",
//         "currency":"USD",
//         "units":"km",
//         "query":location
//         }
//         })
//         .then(res => dispatch({
//           type:GET_LOCATION,
//           payload: res.data.data[0]
//         }))
//         .catch(err => console.log(err))

        
// }

export const getRestaurants = locationId => dispatch => {
  axios({
    "method":"GET",
    "url":"https://tripadvisor1.p.rapidapi.com/restaurants/list",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
    "x-rapidapi-key":"fca2cf2d13msh7a82b7fe587bf5cp109cbajsn6a959d485a68",
    "useQueryString":true
    },"params":{
    "restaurant_tagcategory_standalone":"10591",
    "lunit":"km",
    "restaurant_tagcategory":"10591",
    "limit":"30",
    "currency":"USD",
    "lang":"en_US",
    "location_id":locationId
    }
    })
    .then(res => dispatch({
      type: GET_RESTAURANTS,
      payload: res.data.data
    }))
    .catch(err=> console.log(err))
}

export const getLocation = location => dispatch => {
  axios({
    "method":"GET",
    "url":"https://hotels4.p.rapidapi.com/locations/search",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"hotels4.p.rapidapi.com",
    "x-rapidapi-key":"fca2cf2d13msh7a82b7fe587bf5cp109cbajsn6a959d485a68",
    "useQueryString":true
    },"params":{
    "locale":"en_US",
    "query":location
    }
    })
        .then(res => dispatch({
          type:GET_LOCATION,
          payload: res.data.suggestions
        }))
    .catch((error)=>{
      console.log(error)
    })
}