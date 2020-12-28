import React, { Component } from 'react'


class StaffWelcome extends Component {
     display(){
       this.props.history.push('/issues/allissue'); 
    } 
    saveTour(){
        this.props.history.push('/tour/createnewpackage'); 
     } 
     displayTour(){
         this.props.history.push('/tour/all');
     }
    render() {
        return (
            <div>
            
            <div className="jumbotron"><h1 className="text-center">Welcome Staff!!</h1></div>
                
           
            <button className="btn btn-info" onClick={this.display.bind(this)} style={{marginBottom: "10px"}}>View Issues</button>
            <button className="btn btn-info" onClick={this.saveTour.bind(this)} style={{marginLeft: "10px"}}>Add tour</button>
            <button className="btn btn-info" onClick={this.displayTour.bind(this)} style={{marginLeft: "10px"}}>Display tour</button><br/>
            
            </div>                      
        
        )
    }
}

export default StaffWelcome
