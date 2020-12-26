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
     this.viewIssue = this.viewIssue.bind(this);
    
    }
    
    editIssue(issues){
        this.state.issues.map(issue=>
            this.props.history.push({
                pathname:`/issues/updateissue/${issue.issueId}`,
                state:{
                    issue:issue
                }
            })

        )
        
    }  
    
    /* editIssue(issue){
        this.props.history.push({
                pathname:`/issues/updateissue/${issue.issueId}`,
                state:{
                    issue:issue
                }
            })

    } */
    
    
    viewIssue(issues){
        this.state.issues.map(issue=>
            this.props.history.push({
                pathname:`/issues/${issue.issueId}`,
                state:{
                    issue:issue
                }
            })

        )
        
    }
    
    logout(){
        this.props.history.push('/welcomestaff');
    }
    

    componentDidMount(){
        IssueService.getIssues().then((res) => {
            this.setState({ issues : res.data});
        });
    }
     update=()=>{
        return  <button onClick={ () => this.editIssue(this.state.issues)} className="btn btn-info">Update </button>
        }
     view=()=>{
         return  <button onClick={ () => this.viewIssue(this.state.issues)} className="btn btn-info">View </button> 

     }
    
   
    
    render() {
        const columns = [
            { dataField: 'issueId', text: 'Issue Id', sort: true },
            { dataField: 'issueDescription', text: 'Issue Description', sort: true },
            { dataField: 'issueStatus', text: 'Issue Status', sort: true },
            { dataField: 'userId.userId', text: 'Customer Id', sort: true },
            { formatter: this.update},
            { formatter: this.view}
            
          ];
          
        
          const defaultSorted = [{
            dataField: 'issueId',
            order: 'asc'
          }];
    
       const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        }
      });
        
        
        return (
            <div>
                 <div ><h2 className="text-center" >Issue List</h2></div>
                <BootstrapTable bootstrap4 keyField='issueId' data={this.state.issues} columns={columns} defaultSorted={defaultSorted} pagination={pagination} /> 
                {/* <div className = "row">
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
                                             {/* <td align="center"> { issue.userId.userId}</td>  
                                             <td>
                                                 <button onClick={ () => this.editIssue(issue)} className="btn btn-info">Update </button>
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewIssue(issue.issueId)} className="btn btn-info">View </button> 
                                             </td> 
                                             
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table> </div> */}
                       <button  className="btn btn-success"  style={{marginLeft: "500px"}}onClick={this.logout.bind(this)} >Logout</button>
                            

            </div>
        )
    }
}

export default ListAllIssues
