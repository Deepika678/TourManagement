import React, { Component } from 'react'

class CustomerWelcome extends Component {
    add(){
        this.props.history.push('issues/createissue')
    }
    displayTour(){
        this.props.history.push('/tour/alltour');
    }
    render() {
        return (
            <div>
                <div className="jumbotron">
                <h1>Welcome Customer!!</h1>
                </div>
                <button className="btn btn-info" onClick={this.add.bind(this)}>Add Issue</button>
                <button className="btn btn-info" onClick={this.displayTour.bind(this)} style={{marginLeft: "10px"}}>Display tour</button><br/>
                                    
            </div>
                
        
        )
    }
}

export default CustomerWelcome
