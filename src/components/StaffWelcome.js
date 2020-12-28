import React, { Component } from 'react'


class StaffWelcome extends Component {
     display(){
       this.props.history.push('/issues/allissue'); 
    } 
    
    render() {
        return (
            <div>
            
            <div className="jumbotron"><h1 className="text-center">Welcome Staff!!</h1></div>
                
            <button className="btn btn-info" onClick={this.display.bind(this)} style={{marginBottom: "10px"}}>View Issues</button><br/>
            
            </div>                      
        
        )
    }
}

export default StaffWelcome
