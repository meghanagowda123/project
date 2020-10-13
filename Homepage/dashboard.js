import React, { Component } from 'react';
import Axios from 'axios';
import home from './home';
import PropTypes from "prop-types";
class dashboard extends Component {
    state = {
        searchedItem1: "",
        searchedItem2: "",
        display: true,
        searchedJobdetails: [],
        skey:'',
        loc:'',
        //   displaySearchBar:true,

    };
    onchangeHandler1 = (event) => {
        this.setState({ searchedItem1: event.target.value }, () => { });
        console.log("searchedItem1");
    };
    onchangeHandler2 = (event) => {
        this.setState({ searchedItem2: event.target.value }, () => { });
        console.log("searchedItem2");
    };
    onSearchHandler = async (event) => {
        event.preventDefault();
        if ((this.state.searchedItem1.length > 0) && (this.state.searchedItem2.length > 0)) {
            console.log("searchedItem1");
            await this.setState({ display: false });
            Axios.get(
                // `http://localhost:4000/jobPosts/getjob/${this.state.searchedItem1}/${this.state.searchedItem2}`
                'http://localhost:4000/jobPosts/getJob/'+this.props.match.params.skey+'/'+this.props.match.params.loc
            )
                .then((res) => {
                    const data = res.data;
                    this.setState({ searchedJobdetails: data }, () => {
                        console.log(this.state.searchedJobdetails);
                    });
                })
                .catch((err) => {
                    if (err) throw err;
                });
        }
    };
    render() {
        const {searchedJobdetails}=this.state;
        return (
            <>
        <home   
            changeHandler1={this.onchangeHandler1}
            changeHandler2={this.onchangeHandler2}
            submitHandler={this.onSearchHandler}
        // searchbox={this.state.displaySearchBar}
        />
            <div className="container">
                {searchedJobdetails.map((job, index) => {
                    return (
                        <>
                        <div key={index}>
                            <h6 className="mt-5 text-primary">Job Description</h6>
                            <h2 className="md-5">
                                <strong> {job.jtitle}</strong>
                            </h2>
                            <div className="col-7">
                                <p style={{ color: "#b2beb5" }}>Role : {job.role}</p>
                                <p> Company Name : {job.cname}</p>
                                <p>Location : {job.loc}</p>
                                <p>Job posted date: {job.jpdate}</p>
                            </div>
                        </div>
                        <hr></hr>
                        </>
                        );
                })}
            </div>
            </>
              );
    }
}


export default dashboard;