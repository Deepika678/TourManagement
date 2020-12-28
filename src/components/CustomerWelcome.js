import React, { Component } from 'react'

class CustomerWelcome extends Component {
    add(){
        this.props.history.push('issues/createissue')
    }
    render() {
        return (
            <div>
                <div className="jumbotron">
                <h1>Welcome Customer!!</h1>
                </div>
                <button className="btn btn-info" onClick={this.add.bind(this)}>Add Issue</button>
                                    
            </div>
                
        
        )
    }
}

export default CustomerWelcome
