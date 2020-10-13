import React from 'react';
// import Header from './Header1';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import jobpostService from '../Admin/jobpostService';
import axios from 'axios';
import '../App.css';

class JobList extends React.Component{

  constructor(props) {
    super(props);
    this.jobpostService = new jobpostService();
    this.state = {
      jobs: []
    }
    }
    
    componentDidMount = () => {
    this.getJobList();
    }
    
    // To get all the jobs
    getJobList() {
    axios.get('http://localhost:4000/jobPosts/getJob')
    .then((response) => {
    console.log(response);
    this.setState({
    jobs: response.data
    });
    })
    .catch((error) => {
    console.log(error);
    })
    }
    

    render(){
      const { jobs } = this.state;
        return(
            <div className='container-fluid'>
          <div className='row'>
          <div className='row'>         
               {/* <Header/>       */}
          </div>
           <div className='col-md-1'></div>
           <div className='col-md-10'>
              <table className='table'>
                  <thead className="thead-light">
                  <tr>
                      <th>Job Title</th>
                      <th>Role</th>
                      <th>Company Name</th>
                      <th>Location</th>
                      <th>Post Date</th>
                      <th></th>
                      <th></th>
                  </tr>
                  </thead>
                  <tbody>
                     {
                      jobs && jobs.map((job, i) => {
                      return (
                      <tr key={i}>
                      <td>{job.jtitle}</td>
                      <td>{job.role}</td>
                      <td>{job.cname}</td>
                      <td>{job.loc}</td>
                      <td>{job.jpdate}</td>
                      <td>
                        <button type="button" class="btn btn-success">Save</button>
                      </td>
                      <td>
                      <button type="button" class="btn btn-info">Apply</button>
                      </td>
                      {/* <td>
                      <Link to={"editpost/" + job._id} className="btn btn-primary">Edit</Link>
                      </td>
                      <td>
                      <Button onClick={() => this.deletejobPost(job._id)} variant="danger" >Delete</Button>
                      </td> */}
                      </tr>
                      )
                      })
                    }
                  </tbody>
                  
                  
              </table>
              </div>
              <div className='col-md-1'></div> 
          </div>
          </div>      
        )
    }
}
export default JobList;