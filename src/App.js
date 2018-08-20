import React, { Component} from 'react';
import ReactDOM from 'react-dom';
var zipcodes = require('zipcodes');


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            zipcode: "",
            isValid: "",
            response: " ",
        }
        this.handleIVZsubmit = this.handleIVZsubmit.bind(this);

    }

    handleIVZsubmit(){
        let entry = document.getElementById("pvSubmit").value
        let valid = zipcodes.lookup(entry);
        let output;
        if(valid){output = "valid"}
        if(!valid){output = "invalid"}
        this.setState({
            zipcode: document.getElementById("pvSubmit").value,
            isValid: output,
            response: valid,
        })
    }
    render() {
        return(
            <div>
                <h1> Zip Code Validator </h1>
                <h2><a href="https://www.npmjs.com/package/zipcodes"> Zip Code Lookups:</a> </h2>
                <div>
                    <input type="text" id="pvSubmit" />
                    <input type="submit" value="Submit" onClick={this.handleIVZsubmit}/>
                    <h3><b>Your entry is: </b>
                        {this.state.isValid=="valid"&&<span style={{color: "green"}}>{this.state.isValid}</span>}
                        {this.state.isValid=="invalid"&&<span style={{color: "red"}}>{this.state.isValid}</span>}
                    </h3>
                    <h4><b>Response:</b> <pre>{JSON.stringify(this.state.response , null, 2) }</pre></h4>
                </div>
            </div>
        );
    }
}

export default App;
