import { Axios } from 'axios';
import React,{Component} from 'react';
import { Accordion,Card, Button } from 'react-bootstrap';

class Statedata extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //        stateData : {}
    //     }
    // }
    // componentDidMount(){
    //     Axios.get("https://data.covid19india.org/state_district_wise.json").then(response=>{
    //           response.data
    //           this.setState({stateData:response.data});
    //     });
    // }
    render(){
        return(
            <div >
               List of states in India 
            </div>
        )
    }
}
export default Statedata;