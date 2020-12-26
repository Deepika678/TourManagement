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
            <div className="jumbotron">
                <h1>Welcome Staff!!</h1>
                <button className="btn btn-info" onClick={this.display.bind(this)}>View Issues</button>
                <button className="btn btn-info" onClick={this.add.bind(this)} style={{marginLeft: "10px"}}>Create Issues</button>
              </div>                      
            </div>
        )
    }
}

export default StaffWelcome
