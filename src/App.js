import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListAllIssues from './components/ListAllIssues';
import UpdateIssues from './components/UpdateIssues';
import ViewIssueById from './components/ViewIssueById';
import HeaderComponent from './components/HeaderComponent';
import StaffWelcome from './components/StaffWelcome';
import AddIssue from './components/AddIssue';
import CustomerWelcome from './components/CustomerWelcome';
import CreateTour from './components/CreateTour';
import DisplayAllTour from './components/DisplayAllTour';
import UpdateTourPackage from './components/UpdateTourPackage';
import DeleteTourPackage from './components/DeleteTourPackage';
import DisplayTourForCustomer from './components/DisplayTourForCustomer';



function App() {
  return (
    
        <Router>
             <HeaderComponent/> 
              <div className="container">
                  <Switch> 
                         <Route path = "/welcomestaff" exact component = {StaffWelcome}></Route>
                         <Route path = "/welcomecustomer" exact component = {CustomerWelcome}></Route>
                         <Route path = "/issues/allissue" exact component = {ListAllIssues}></Route>
                         <Route path = "/tour/all" exact component = {DisplayAllTour}></Route>
                         <Route path = "/tour/alltour" exact component = {DisplayTourForCustomer}></Route>
                         <Route path = "/tour/update/:packageId" exact component = {UpdateTourPackage}></Route>
                         <Route path = "/tour/delete/:packageId" exact component = {DeleteTourPackage}></Route>
                         <Route path = "/tour/createnewpackage" exact component = {CreateTour}></Route>
                         <Route path = "/issues/createissue" exact component = {AddIssue}></Route>
                         <Route path = "/issues/updateissue/:issueId" exact component = {UpdateIssues}></Route> 
                        <Route path = "/issues/:issueId" exact component = {ViewIssueById}></Route>  
                  </Switch>
              </div>
           
      </Router> 
    
      
      );
      
    
      
    
  
}

export default App;
