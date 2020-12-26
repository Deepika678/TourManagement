import React, { Component } from 'react'
import IssueService from '../services/IssueService'


class UpdateIssues extends Component {
    constructor(props) {
        super(props)

        this.updateIssue = this.updateIssue.bind(this);
    }


    updateIssue = (e) => {
      
        e.preventDefault();
        console.log('issue => ' + JSON.stringify(this.props.location.state.issue));
        
        IssueService.updateIssue(this.props.location.state.issue).then( res => {
            this.props.history.push('/issues/allissue');
           });
    
    }
    
    cancel(){
        this.props.history.push('/issues/allissue');
    }
   

    render() {
        
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Issue</h3>
                                <div className = "card-body">
                                    
                                        <button className="btn btn-success" onClick={this.updateIssue}>Resolve</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateIssues