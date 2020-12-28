import axios from 'axios';

const TOURPACKAGE_API_BASE_URL = "http://localhost:8080/tour";

class TourPackageService {

    getTour(){
        return axios.get(TOURPACKAGE_API_BASE_URL + '/all');
    }
    
    createTour(tour){
        return axios.post(TOURPACKAGE_API_BASE_URL + '/createnewpackage' ,tour);
    }
    updateTour(packageId,tour){
        return axios.put(TOURPACKAGE_API_BASE_URL + '/update/' +packageId,tour);
    }
    deleteTour(packageId){
        return axios.delete(TOURPACKAGE_API_BASE_URL + '/delete/' +packageId);
    }
    
    
}

export default new TourPackageService()
