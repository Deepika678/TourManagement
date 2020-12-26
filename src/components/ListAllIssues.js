import React, { Component } from 'react'
import IssueService from '../services/IssueService'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';

class ListAllIssues extends Component {
    constructor(props) {
        super(props)

        this.state = {
                issues : []
        }
        
        
     this.editIssue = this.editIssue.bind(this);
    
    }
    
    editIssue(issue){
        this.props.history.push({
            pathname:`/issues/updateissue/${issue.issueId}`,
            state:{
                issue:issue
            }
        });
    }
    viewIssue(issueId){
        this.props.history.push(`/issues/${issueId}`);
    }
    logout(){
        this.props.history.push('/');
    }
    

    componentDidMount(){
        IssueService.getIssues().then((res) => {
            this.setState({ issues : res.data});
        });
    }
   
    
    render() {
    
        
        
        return (
            <div>
                 <div ><h2 className="text-center" >Issue List</h2></div>
                  <div className = "row">
                        <table   className = "table table-striped table-bordered" >

                            <thead>
                                <tr>
                                    <th > Issue Id</th>
                                    <th > Issue Description</th>
                                    <th > Issue Status</th>
                                    <th > Customer Id</th>  
                                    <th > Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.issues.map(
                                        issue => 
                                        <tr key = {issue.issueId}>
                                             <td align="center"> { issue.issueId} </td>
                                             <td> {issue.issueDescription}</td>   
                                             <td> { issue.issueStatus}</td>
                                             <td></td>
                                             {/* <td align="center"> { issue.userId.userId}</td>  */}  
                                             <td>
                                                 <button onClick={ () => this.editIssue(issue)} className="btn btn-info">Update </button>
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewIssue(issue.issueId)} className="btn btn-info">View </button> 
                                             </td> 
                                             
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table> 
                       <button  className="btn btn-success"  style={{marginLeft: "500px"}}onClick={this.logout.bind(this)} >Logout</button>
                            </div>

            </div>
        )
    }
}

export default ListAllIssues
