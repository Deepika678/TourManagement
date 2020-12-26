import React, { Component } from 'react'


class StaffWelcome extends Component {
     display(){
       this.props.history.push('/issues/allissue'); 
    } 
    add(){
        this.props.history.push('issues/createissue')
    }
    render() {
        return (
            <div>
            
            <div className="jumbotron"><h1 className="text-center">Welcome Staff!!</h1></div>
                
            <button className="btn btn-info" onClick={this.display.bind(this)} style={{marginBottom: "10px"}}>View Issues</button><br/>
            <button className="btn btn-info" onClick={this.add.bind(this)} style={{marginBottom: "10px"}}>CreateIssue</button> 
            </div>                      
        
        )
    }
}

export default StaffWelcome
