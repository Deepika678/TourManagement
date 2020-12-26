import React, { Component } from 'react'
import IssueService from '../services/IssueService'


class AddIssue extends Component {
    constructor(props) {
        super(props)
        this.state={
            issueDescription:'',
            issueStatus:'',
           /*  userId:'' */
          
        }
        this.saveIssue=this.saveIssue.bind(this)
        this.changeissueDescription=this.changeissueDescription.bind(this)
        this.changeissueStatus=this.changeissueStatus.bind(this)

    }
    
    
    changeissueDescription= (event) => {
            this.setState({issueDescription: event.target.value});
    }
    /* changeuserId= (event) => {
        this.setState({userId: event.target.value});
     } */
    changeissueStatus=()=>{
        this.setState({issueStatus:'Unresolved'});
    }
    saveIssue = (e) => {
      
        e.preventDefault();
        let issue = {issueDescription: this.state.issueDescription, issueStatus: this.state.issueStatus /* userId: this.state.userId */};
        console.log('issue => ' + JSON.stringify(issue));
        IssueService.createIssue(issue).then( res => {
            this.props.history.push('/');}
           );
    
    }

    
    caancel(){
        this.props.history.push('/issues/allissue');
    }
   

    render() {
        
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Add Issue</h3>
                                <div className = "card-body">
                                <form>
                                        <div className = "form-group">
                                            <label> Issue Description: </label>
                                            <input placeholder="what is your issue?"  className="form-control" 
                                                value={this.state.issueDescription} onChange={this.changeissueDescription}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Issue status: </label>
                                            <input placeholder="Unresolved"  className="form-control" 
                                                value={this.state.issueStatus} onChange={this.changeissueStatus} />
                                        </div>
                                       {/*  <div className = "form-group">
                                            <label> User Id: </label>
                                            <input placeholder="Enter userId"  className="form-control" 
                                                value={this.state.userId.userId} onChange={this.changeuserId}/>
                                        </div> */}
                                        <button className="btn btn-success" onClick={this.saveIssue}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel}  style={{marginLeft: "10px"}}>Cancel</button>
                                        
                                    </form>
                                    
                                        
                                    
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }

    
   
}
export default AddIssue