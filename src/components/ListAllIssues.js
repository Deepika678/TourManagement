import React, { Component } from 'react'
import IssueService from '../services/IssueService'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'; 
import ReactPaginate from 'react-paginate' 

class ListAllIssues extends Component {
    constructor(props) {
        super(props)

        this.state = {
            offset:0,
            issues : [],
            orgData:[],
            perPage:5,
            currentPage:0
                
        }
     this.editIssue = this.editIssue.bind(this);
     this.viewIssue = this.viewIssue.bind(this);
     this.clickPageHandler=this.clickPageHandler.bind(this) 
    }
    
    clickPageHandler=(e)=>
    {
        const selectedPage=e.selected;
        const offset=selectedPage*this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset:offset
        },()=>
        {
            this.loadMoreData();
        })
    }

    loadMoreData=()=>
    {
        const data=this.state.orgData
        const slice=data.slice(this.state.offset, this.state.offset+this.state.perPage)
                this.setState(
                    {
                        pageCount:Math.ceil(data.length/this.state.perPage),
                        issues: slice
                    })

    }

    componentDidMount()
    {IssueService.getIssues().then((response) => {
       const data = response.data;
       const slice=data.slice(this.state.offset, this.state.offset+this.state.perPage)
        this.setState({
            pageCount:Math.ceil(data.length/this.state.perPage),
            orgData:response.data,
            issues: slice
        });
    });
    }
  
     
     
     editIssue(issue){
        this.props.history.push({
                pathname:`/issues/updateissue/${issue.issueId}`,
                state:{
                    issue:issue
                }
            })

    }   
    
    
    viewIssue(issueId){
            this.props.history.push({
                pathname:`/issues/${issueId}`,
                state:{
                    issueId:issueId
                }
            })
        
    }
    
    logout(){
        this.props.history.push('/welcomestaff');
    }
    
     
    
   
    
    render() {
        return(
        <div>
            <h2 className="text-center">Issues List</h2>
            <div className="row">
            </div>
            <div className="container"><ReactPaginate previousLabel={"prev"} nextLabel={"next"} breakLabel={"..."} breakClassName={"break me"}
                pageCount={this.state.pageCount} marginPagesDisplayed={2} pageRangeDisplayed={10} onPageChange={this.clickPageHandler}
                containerClassName={"pagination"} subContainerClassName={"pages pagination"} activeClassName={"active"}></ReactPaginate>
                    </div>
                    <div className="container">
                <table className="table table-striped table-bordered">
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
                                             <td align="center"> { issue.userId.userId}</td>  
                                             <td>
                                                 <button onClick={ () => this.editIssue(issue)} className="btn btn-info">Update </button>
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewIssue(issue.issueId)} className="btn btn-info">View </button> 
                                             </td> 
                                             
                                        </tr>
                                    )
                                }
                    </tbody>

                </table>
                </div>
            
       
       <button  className="btn btn-success"  style={{marginLeft: "500px"}}onClick={this.logout.bind(this)} >Logout</button>
          </div>     
        )
        
        
        
        
        
        
        
        
        
        
                            

        
    }
}

export default ListAllIssues
