import React, { Component } from 'react'
import TourPackageService from '../services/TourPackageService'
class DisplayTourForCustomer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tours : []
                
        }
    
    
    }


    logout(){
        this.props.history.push('/welcomecustomer');
    }
    

    componentDidMount(){
        TourPackageService.getTour().then((res) => {
            this.setState({ tours : res.data});
        });
    }

    
   
    
    render() {
        return (
            <div>
                 <div ><h2 className="text-center" >Tour Packages</h2></div>
                        <div className="card-columns col-12">
                        {
                            this.state.tours.map(
                                tour => {
                                    return (
                                        <div className="card bg-light">
                                            <div className="card-body text-center">
                                                <h4 class="card-title">{tour.packageName}</h4>
                                                <p className="card-text">{tour.description}</p>
                                                <p className="card-text">DaysCount : {tour.daysCount}</p>
                                                <p className="card-text">NightCount : {tour.nightsCount}</p>
                                                <p className="card-text">PackageType : {tour.packageType}</p>
                                                <p className="card-text">HotelName : {tour.hotelName}</p>
                                                <p className="card-text">TripPrice : {tour.tripPrice}</p>
                            
                                                
                                            </div>
                                        </div>
                                    )
                                })
                        }
                
                        </div> 
                       <button  className="btn btn-success"  style={{marginLeft: "500px"}}onClick={this.logout.bind(this)} >Logout</button>
                            

            </div>
        )
    }
}

export default DisplayTourForCustomer