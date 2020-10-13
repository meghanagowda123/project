import React from 'react';
import jobs from '../images/jobs.jpg'
import tcslogo from '../images/tcs.png';
import ctslogo from '../images/cts.png';
import lntlogo from '../images/lnt.png';
import wiprologo from '../images/wipro.png';
import './home.css';
import Header2 from './header';
import Axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';

class home extends React.Component {
    constructor(props) {
        super(props);
        let logsuccess = false
        this.state = {
            email: '',
            pwd: '',
            searchedJobDetails: [],
            searchedItem: '',
            jobdetails: [],
            skey: '',
            loc: '',
            uname: '',
            pwd: '',
            logsuccess
            // logsuccess
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

    }
    submitForm(e) {
        e.preventDefault()
        const { uname, pwd } = this.state;
        if (uname === "sweety7698@gmail.com" && pwd === "sweety7698") {
            this.setState({ logsuccess: true })
        }
        //this.props.history.push('/jobpost'); // The page you want to redirect to.
    }
    // state = { jobdetails: [] };
    componentDidMount = () => {
        Axios.get('http://localhost:4000/jobPosts/getJob/' + this.props.match.params.skey + '/' + this.props.match.params.loc)
            .then((res) => {
                const postdata = res.data;
                console.log(postdata);
                this.setState({ jobdetails: postdata });

                // console.log(jobdetails);
                console.log(1);
            })
            .catch((err) => {
                if (err) throw err;
            });
    };

    render() {
        if (this.state.logsuccess) {
            return <Redirect to="/alljobs" />
        }
        return (

            <div className='container-fluid'>
                <Header2 />
                <div className='row'>
                    <div className='col-md-1'></div>

                    <div className='col-md-5'>
                        {/* <img style={{width:220,height:180,marginLeft:20}} src={jobs} alt="admin logo"></img> */}
                        <form id='search' onClick={this.props.submitHandler}>
                            <input type="text"
                                name='skill'
                                className="form-control"
                                id='skill'
                                onChange={this.props.changeHandler1}
                                placeholder='Skill'
                            />
                            <input type="text"
                                name='location'
                                className="form-control"
                                id='location'
                                onChange={this.props.changeHandler2}
                                placeholder='Location'
                            />
                            <div>
                                <button className="btn"
                                    type='submit'>Search</button>
                            </div>
                        </form>
                    </div>

                    <form >
                        <div className='col-md-3' id="jober">
                            <h5>Dont wait for the oppurtunity,
                         Grab the oppurtunity</h5>

                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <div className='form-group'>
                                    <label htmlFor='uname'></label>
                                    <input
                                        name='uname'
                                        className="form-control"
                                        id='uname'
                                        onChange={this.onChange}
                                        placeholder='Email Id'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='pwd'></label>
                                    <input
                                        type="password"
                                        name='pwd'
                                        className="form-control"
                                        id='pwd'
                                        onChange={this.onChange}
                                        placeholder='Password'
                                    />
                                </div>
                                <div>
                                    <button className="btn btn-info"
                                        onClick={this.submitForm}
                                        type='submit'>Submit</button>
                                </div>
                                <div id="atag"> 
                                    <a href="/personal">New user?Register now</a>
                                </div>
                                <div>
                            </div>
                            </div>
                        </div>
                    </form>
                    {/* <form>
                    <div id="jober1">
                    <div className='col-md-3' id='login'>
                        <div className='form-group'>
                            <h6>Dont wait for the oppurtunity,
                            Grab the oppurtunity</h6>
                            <label htmlFor='email'></label>
                            <input
                                name='uname'
                                className="form-control"
                                id='uname'
                                onChange={this.onChange}
                                placeholder='Email Id'
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='pwd'></label>
                            <input
                                type="password"
                                name='pwd'
                                className="form-control"
                                id='pwd'
                                onChange={this.onChange}
                                placeholder='Password'
                            />
                        </div>
                        <div>
                            <button className="btn btn-primary"
                                type='submit'
                                onClick={this.submitForm}>Submit</button>
                        </div>
                        <h6>New User? Register as
                      <NavLink to='/personal'>Fresher</NavLink>/<NavLink to='/employment'>Experience</NavLink></h6>
                    </div>
                    </div>
                    </form> */}
                </div>

                <br></br>
                <div className='row'>
                    <span id="hd3">Hot Jobs</span>
                </div>
                <br></br>
                {/* <div className="container">
                {this.state.jobdetails.map((jobs, index) => {
                    return (
                       
                        <div key={index}>
                            <h6 className="mt-5 text-primary">Job Description</h6>
                            <h2 className="md-5">
                                <strong> {jobs.jtitle}</strong>
                            </h2>
                            <div className="col-7">
                                <p style={{ color: "#b2beb5" }}>Role : {jobs.role}</p>
                                <p> Company Name : {jobs.cname}</p>
                                <p>Location : {jobs.loc}</p>
                                <p>Job posted date: {jobs.jpdate}</p>
                            </div>
                        </div>
                       
                        );
                })}
            </div> */}


                <div className='row'>
                    <span id="hd3">Select by Companies </span>
                </div>
                <br></br>
                <div className='row'>
                <section>
                        <a href="https://careers.cognizant.com/global/en"><img style={{ width: 120, height: 120, marginLeft: 200 }} src={ctslogo} alt="admin logo"></img></a>
                    </section>
                    <section>
                        <a href="https://www.tcs.com/careers?country=IN&lang=EN"> <img style={{ width: 120, height: 120, marginLeft: 200 }} src={tcslogo} alt="admin logo"></img></a>
                    </section>
                    <section>
                        <a href="https://careers.wipro.com/careers-home/"><img style={{ width: 120, height: 120, marginLeft: 200 }} src={wiprologo} alt="admin logo"></img></a>
                    </section>
                    <section>
                        <a href="https://www.valuelabs.com/careers/"><img style={{ width: 120, height: 120, marginLeft: 200 }} src={lntlogo} alt="admin logo"></img></a>
                    </section>
                </div>
                <div className='row'>
                    <span id="hd4">Career tips </span>
                </div>
                <br></br>
                <div className='row' id='career'>
                    <div className='col-md-6' id='cr1'>
                        <li><span>01.&nbsp;</span>Ready to work from Home?Here's<br></br>
                        How to keep Calm and be productive</li>
                        <span>&nbsp;&nbsp;&nbsp;may 2020</span>
                        <li><span>02.&nbsp;</span>These best part time jobs do not<br></br>
                            Require you to be a topper</li>
                            <span>&nbsp;&nbsp;&nbsp;may 2020</span>
                        <li><span>03.&nbsp;</span>8 Most popular part time<br></br>
                            jobs for students</li>
                            <span>&nbsp;&nbsp;&nbsp;may 2020</span>
                    </div>
                    <div className='col-md-6' id='cr1'>
                        <li><span>04.&nbsp;</span>10 Best Skype interview tips for Jobs<br></br>
                            Seekers who want to succeed</li>
                            <span>&nbsp;&nbsp;&nbsp;may 2020</span>
                        <li><span>05.&nbsp;</span>5 work from home tips for those who<br></br>
                            Genuinely want to 'Work' and 'Contribute'</li>
                            <span>&nbsp;&nbsp;&nbsp;may 2020</span>
                        <li><span>06.&nbsp;</span>Top Tips and Resources to manage<br></br>
                            Youre career Amid coronavirus</li>
                            <span>&nbsp;&nbsp;&nbsp;may 2020</span>
                    </div>
                </div>
                <div>
                    <footer>
                        <span><small>&#169;</small>
                       Online Portal
                       </span>
                    </footer>
                </div>
            </div >
        )
    }
}
export default home;