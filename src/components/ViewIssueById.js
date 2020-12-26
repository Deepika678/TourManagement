import React, { Component } from 'react'
import IssueService from '../services/IssueService'

class ViewIssueById extends Component {
    constructor(props) {
        super(props)

        this.state = {
            issueId: this.props.match.params.issueId,
            issue: {},
            
           
           
        }
    }
    
    componentDidMount(){
        IssueService.getIssueById(this.props.location.state.issue.issueId).then( res => {
            console.log(this.state);
            this.setState({issue: res.data});
           
        })
       
        
    
    }
    
    cancel(){
        this.props.history.push('/issues/allissue');
    }

    render() {
        if(!this.state.issue.userId){
            return null
        }
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Issue Details</h3>
                   
                    <div className = "card-body" key = {this.state.issue.issueId}>
                        <div className = "row">
                            <label> Issue Id: </label>
                            <div> { this.state.issue.issueId}</div>
                        </div>
                        <div className = "row">
                            <label> IssueDescription </label>
                            <div> { this.state.issue.issueDescription}</div>
                        </div>
                        <div className = "row">
                            <label> Issue Status: </label>
                            <div> { this.state.issue.issueStatus}</div>
                        </div>
                        <div className = "row">
                            <label> Customer Id: </label>
                          <div>{ this.state.issue.userId.userId}</div>  
                         </div>
                    </div>
                    <button className="btn btn-success" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Go Back</button>

                </div>
            </div>
        )
    }
}

export default ViewIssueById