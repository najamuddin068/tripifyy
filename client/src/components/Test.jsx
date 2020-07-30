import React, { Component } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import { MDBInput, MDBBtn } from 'mdbreact'
import { connect } from 'react-redux'
import axios from 'axios'
class Test extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        axios({
            "method":"GET",
            "url":"https://tripadvisor1.p.rapidapi.com/locations/search",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key":"e7ef4b7f4fmsha84c81451e000f5p1cc531jsnfbb458282400",
            "useQueryString":true
            },"params":{
            "location_id":"1",
            "limit":"30",
            "sort":"relevance",
            "offset":"0",
            "lang":"en_US",
            "currency":"USD",
            "units":"km",
            "query":"pattaya"
            }
            })
            .then((response)=>{
              console.log(response)
            })
            .catch((error)=>{
              console.log(error)
            })
    }
    render() {
        return (
            <div>
               Hello 
            </div>
        )
    }
}


export default (Test)