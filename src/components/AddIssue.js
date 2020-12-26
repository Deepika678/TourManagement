import React, { Component } from 'react'
import IssueService from '../services/IssueService'


class AddIssue extends Component {
    constructor(props) {
        super(props)
        this.state={
            issueDescription:'',
            issueStatus:'Unresolved',
            userId:2
           
           
          
        }
        this.saveIssue=this.saveIssue.bind(this)
      
 

    }
    changeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value 
        })
    }
    

    /* changeissueStatus=()=>{
        this.setState({issueStatus:'Unresolved'});
    } */
    saveIssue = (e) => {
      
        e.preventDefault();
        let issue = {issueDescription: this.state.issueDescription, issueStatus: this.state.issueStatus ,userId:{userId:this.state.userId }};
        console.log('issue => ' + JSON.stringify(issue));
        IssueService.createIssue(issue).then( res => {
            console.log(res)
            window.alert("Issue is added Successfully with issueID " + res.data.issueId);
         } );
    
    }

    
    cancel(){
        this.props.history.push('/');
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
                                <form method="post">
                                        <div className = "form-group">
                                            <label> Issue Description: </label>
                                            <input placeholder="what is your issue?"  className="form-control" name="issueDescription" 
                                                value={this.state.issueDescription} onChange={this.changeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Issue status: </label>
                                            <input placeholder="Unresolved"  className="form-control" name="issueStatus"
                                                value={this.state.issueStatus} onChange={this.changeHandler} />
                                        </div>
                                         <div className = "form-group">
                                            <label> User Id: </label>
                                            <input  className="form-control" name="userId"
                                                value={this.state.userId} onChange={this.changeHandler}/>
                                        </div>   
                                        <button className="btn btn-success" onClick={this.saveIssue}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}  style={{marginLeft: "10px"}}>Cancel</button>
                                        
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