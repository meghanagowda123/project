import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Personal extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            currentemp : '',
            destination: '',
            jobdes1: '',
            exp1:'',
            prevemp:'',
            jobdes2:'',
            exp2:'',
        }
        this.onChangecurrentemp = this.onChangecurrentemp.bind(this)
        this.onChangedestination = this.onChangedestination.bind(this)
        this.onChangejobdes1 = this.onChangejobdes1.bind(this)
        this.onChangeexp1 = this.onChangeexp1.bind(this)
        this.onChangeprevemp = this.onChangeprevemp.bind(this)
        this.onChangejobdes2 = this.onChangejobdes2.bind(this)
        this.onChangeexp2 = this.onChangeexp2.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChangecurrentemp(e) {
        this.setState({  currentemp: e.target.value})
    }

    onChangedestination(e) {
        this.setState({destination  : e.target.value})
    }

    onChangejobdes1(e) {
        this.setState({ jobdes1 : e.target.value})
    }

    onChangeexp1(e) {
        this.setState({ exp1 : e.target.value})
    }

    onChangeprevemp(e) {
        this.setState({ prevemp : e.target.value})
    }

    onChangejobdes2(e) {
        this.setState({ jobdes2 : e.target.value})
    }

    onChangeexp2(e) {
        this.setState({ exp2 : e.target.value})
    }   
    

    submitForm(e){
        e.preventDefault()
        const userObj={ 
            currentemp : this.state.currentemp,
            destination:this.state.destination,
            jobdes1:this.state.jobdes1,
            exp1:this.state.exp1,
            prevemp:this.state.prevemp,
            jobdes2:this.state.jobdes2,
            exp2:this.state.exp2,
           
         };

         axios.post('http://localhost:8081/personals/post-personal',userObj)
         .then(res => console.log(res.data));
         
         alert(`User successfully created!`)
         this.setState({
            currentemp : '',
            destination: '',
            jobdes1: '',
            exp1:'',
            prevemp:'',
            jobdes2:'',
            exp2:'',
         });
       
        
    }
    render(){
        
        return(
            <div className="form-wrapper">
                <h1>Employment</h1>

                <form onSubmit={this.submitForm}>
                <label htmlFor="currentemp"><b>Current Employer</b></label>
                  <input type="text" placeholder="Enter current emplyer" name="currentemp" value={this.state.currentemp} onChange={this.onChangecurrentemp}/>
                  
                  <br/>
                  <label htmlFor="destination"><b>Destination</b></label>
                  <input type="text" placeholder="Destination" name="destination" value={this.state.destination} onChange={this.onChangedestination}/>
                  <br/>
                  <label htmlFor="jobdes1"><b>Job Description</b></label> 
            
                  <input type="text" placeholder="Job Description" name="jobdes1" value={this.state.jobdes1} onChange={this.onChangejobdes1}/>
                  <br/>
                  <label htmlFor="exp1"><b>Experience in Months</b></label>
                  <input type="text" placeholder="Months" name="exp1" value={this.state.exp1} onChange={this.onChangeexp1}/>
                  <br/>
                  <label htmlFor="prevemp"><b>Previous Employer</b></label>
                  <input type="text" placeholder="Enter Previous Employer" name="prevemp" value={this.state.prevemp} onChange={this.onChangeprevemp}/>
                  {/* <input type="text" placeholder="Address Line2" name="address" value={this.state.address} onChange={this.onChangeaddress}/>
                  
                  <input type="text" id="textbox1" placeholder="City" name="address" value={this.state.address} onChange={this.onChangeaddress}/>
                  &nbsp;&nbsp;&nbsp;
                  <input type="text" id="textbox2" placeholder="State" name="address" value={this.state.address} onChange={this.onChangeaddress}/>
                   */}
                  <br/>
                  <br/>
                  <label htmlFor="jobdes2"><b>Job Description</b></label>
                  <input type="text" placeholder="Job Description" name="jobdes2" value={this.state.jobdes2} onChange={this.onChangejobdes2}/>
                  <br/>
                  <label htmlFor="exp2"><b>Experience in Months</b></label>
                  <input type="text" placeholder="Months" name="exp2" value={this.state.exp2} onChange={this.onChangeexp2}/>
                  <br/>
                 
                  <Button variant="danger" size="lg" block="block" type="submit">
                    Register
                    </Button>
                </form> 
            </div>
        );
    }
}
