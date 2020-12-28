import React, { Component } from 'react'
import TourPackageService from '../services/TourPackageService'
class DeleteTourPackage extends Component {
    constructor(props) {
        super(props)
        this.state={
            packageId: this.props.location.state.packageId,
            packageName:'',
            description:'',
            daysCount:'',
            nightsCount:'',
            packageType:'',
            hotelName:'',
            tripPrice:''
        }

       
    }

    deleteTour = (e) => {
      
        e.preventDefault();
        
        
        TourPackageService.deleteTour(this.props.location.state.packageId).then( res => {
           window.alert("Tour Package Deleted Successfully!")
           });
          
    
    }
    
    cancel(){
        this.props.history.push('/tour/all');
    }
   

    render() {
        
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Tour</h3>
                                <div className = "card-body">
                                
                                        <button className="btn btn-success" onClick={this.deleteTour}>Confirm Delete</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        
                                </div>
                            
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default DeleteTourPackage