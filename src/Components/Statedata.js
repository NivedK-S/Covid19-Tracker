import React,{Component} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';

class Statedata extends Component{
    constructor(){
        super();
        this.state={
            stateData : {}
        }
    }
    componentDidMount(){
        axios.get("https://data.covid19india.org/state_district_wise.json").then(Response=>{
          Response.data
          this.setState({stateData:Response.data})
        });
    }
    render(){
        let keys=Object.keys(this.state.stateData);
        return(
            <div className='row'>
                <div className='col-md-12'>
            <Accordion defaultActiveKey="0">
                {
                    keys.map((itm,ky)=>{
                      let districts= this.state.stateData[itm].districtData;
                      let district_keys = Object.keys(districts);
                      
                        return(
                            <Accordion.Item eventKey="0">
        <Accordion.Header>{itm}</Accordion.Header>
        <Accordion.Body>
         <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <td>District</td>
                    <td>Confirmed</td>
                    <td>Active</td>
                    <td>Recovered</td>
                    <td>Deaths</td>
                </tr>
            </thead>
            <tbody>

            </tbody>
         </table>
        </Accordion.Body>
      </Accordion.Item>

                      )    
                    })
                }

      
    </Accordion>
    </div>
    </div>

        )
    }
}

export default Statedata;