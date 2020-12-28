import React, { Component } from 'react'
import TourPackageService from '../services/TourPackageService'


class CreateTour extends Component {
    constructor(props) {
        super(props)
        this.state={
            packageName:'',
            description:'',
            daysCount:'',
            nightsCount:'',
            packageType:'',
            hotelName:'',
            tripPrice:''
        }
       
     }
    changeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value 
        })
    }
    
    saveTour = (e) => {
      
        e.preventDefault();
        let tour = { packageName: this.state.packageName,description:this.state.description,
        daysCount:this.state.daysCount,
        nightsCount:this.state.nightsCount,
        packageType:this.state.packageType,
        hotelName:this.state.hotelName,
        tripPrice:this.state.tripPrice};
        console.log('Tour => ' + JSON.stringify(tour));
        TourPackageService.createTour(tour).then( res => {
            console.log(res);
            window.alert("Tour is added Successfully for " + res.data.packageName);
         } );
    
    }

    
    cancel(){
        this.props.history.push('/welcomestaff');
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
                                            <label> Package Name: </label>
                                            <input  className="form-control" name="packageName" 
                                                value={this.state.packageName} onChange={this.changeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input   className="form-control" name="description"
                                                value={this.state.description} onChange={this.changeHandler} />
                                        </div>
                                         <div className = "form-group">
                                            <label> DaysCount </label>
                                            <input  className="form-control" name="daysCount"
                                                value={this.state.daysCount} onChange={this.changeHandler}/>
                                        </div> 
                                        <div className = "form-group">
                                            <label> NightsCount </label>
                                            <input  className="form-control" name="nightsCount"
                                                value={this.state.nightsCount} onChange={this.changeHandler}/>
                                        </div> 
                                        <div className = "form-group">
                                            <label> PackageType </label>
                                            <input  className="form-control" name="packageType"
                                                value={this.state.packageType} onChange={this.changeHandler}/>
                                        </div> 
                                        <div className = "form-group">
                                            <label> HotelName </label>
                                            <input  className="form-control" name="hotelName"
                                                value={this.state.hotelName} onChange={this.changeHandler}/>
                                        </div> 
                                        <div className = "form-group">
                                            <label> TripPrice </label>
                                            <input  className="form-control" name="tripPrice"
                                                value={this.state.tripPrice} onChange={this.changeHandler}/>
                                        </div>   
                                        <button className="btn btn-success" onClick={this.saveTour}>Save</button>
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
export default CreateTour