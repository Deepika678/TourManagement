import React, { Component } from 'react'
import TourPackageService from '../services/TourPackageService'
class DisplayAllTour extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tours : []
                
        }
        
        
     this.edittour = this.edittour.bind(this);
    /* this.deletetour = this.deletetour.bind(this); */
    
    }
    
 
     
     edittour(tour){
         console.log(tour.packageId)
        this.props.history.push({
                pathname:`/tour/update/${tour.packageId}`,
                state:{
                    packageId:tour.packageId
                }
            })

    }   
    deletetour(id){
       this.props.history.push({
               pathname:`/tour/delete/${id}`,
               state:{
                   packageId:id
               }
           })

   }    
    
    
    
    
    logout(){
        this.props.history.push('/welcomestaff');
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
                                                <button onClick={() => this.edittour(tour)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deletetour(tour.packageId)} className="btn btn-danger">Delete </button>
                                                
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

export default DisplayAllTour
