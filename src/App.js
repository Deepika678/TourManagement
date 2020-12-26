import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListAllIssues from './components/ListAllIssues';
import UpdateIssues from './components/UpdateIssues';
import ViewIssueById from './components/ViewIssueById';
import HeaderComponent from './components/HeaderComponent';
import StaffWelcome from './components/StaffWelcome';
import AddIssue from './components/AddIssue';



function App() {
  return (
    
        <Router>
             <HeaderComponent/> 
              <div className="container">
                  <Switch> 
                         <Route path = "/welcomestaff" exact component = {StaffWelcome}></Route>
                         <Route path = "/issues/allissue" exact component = {ListAllIssues}></Route>
                         <Route path = "/issues/createissue" exact component = {AddIssue}></Route>
                         <Route path = "/issues/updateissue/:issueId" exact component = {UpdateIssues}></Route> 
                        <Route path = "/issues/:issueId" exact component = {ViewIssueById}></Route>  
                  </Switch>
              </div>
           
      </Router> 
    
      
      );
      
    
      
    
  
}

export default App;
