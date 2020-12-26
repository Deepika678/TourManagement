import axios from 'axios';

const ISSUE_API_BASE_URL = "http://localhost:8080/issues";

class IssueService {

    getIssues(){
        return axios.get(ISSUE_API_BASE_URL+'/allissue');
    }
    getIssueById(issueId){
        return axios.get(ISSUE_API_BASE_URL + '/' + issueId);
    }

    updateIssue(issue){
        return axios.put(ISSUE_API_BASE_URL + '/updateissue' ,issue);
    }
    
    createIssue(issue){
        return axios.post(ISSUE_API_BASE_URL + '/createissue' ,issue)
    }
    
}

export default new IssueService()