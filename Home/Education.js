import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Personal extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            collage : '',
            year: '',
            graduated: '',
            graduateschl:'',
            noofyears:'',
            skills:'',
            certification:'',
        }
        this.onChangecollage = this.onChangecollage.bind(this)
        this.onChangeyear = this.onChangeyear.bind(this)
        this.onChangegraduated = this.onChangegraduated.bind(this)
        this.onChangegraduateschl = this.onChangegraduateschl.bind(this)
        this.onChangenoofyears = this.onChangenoofyears.bind(this)
        this.onChangeskills = this.onChangeskills.bind(this)
        this.onChangecertification = this.onChangecertification.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChangecollage(e) {
        this.setState({  collage: e.target.value})
    }

    onChangeyear(e) {
        this.setState({year  : e.target.value})
    }

    onChangegraduated(e) {
        this.setState({ graduated : e.target.value})
    }

    onChangegraduateschl(e) {
        this.setState({ graduateschl : e.target.value})
    }

    onChangenoofyears(e) {
        this.setState({ noofyears : e.target.value})
    }

    onChangeskills(e) {
        this.setState({ skills : e.target.value})
    }

    onChangecertification(e) {
        this.setState({ certification : e.target.value})
    }   
    

    submitForm(e){
        e.preventDefault()
        const userObj={ 
            collage : this.state.collage,
            year:this.state.year,
            graduated:this.state.graduated,
            graduateschl:this.state.graduateschl,
            noofyears:this.state.noofyears,
            skills:this.state.skills,
            certification:this.state.certification,
           
         };

         axios.post('http://localhost:8081/personals/post-personal',userObj)
         .then(res => console.log(res.data));
         
         alert(`User successfully created!`)
         this.setState({
            collage : '',
            year: '',
            graduated: '',
            graduateschl:'',
            noofyears:'',
            skills:'',
            certification:'',
         });
       
        
    }
    render(){
        
        return(
            <div className="form-wrapper">
                <h1>Education</h1>

                <form onSubmit={this.submitForm}>
                <label htmlFor="collage"><b>collage</b></label>
                  <input type="text" placeholder="Name of Collage" name="collage" value={this.state.collage} onChange={this.onChangecollage}/>
                  
                  <br/>
                  <label htmlFor="noofyears"><b>Year of Passing</b></label>
                  <input type="text" placeholder="Dropdown" name="noofyears" value={this.state.noofyears} onChange={this.onChangeyear}/>
                  <br/>
                  <label htmlFor="graduated"><b>graduated</b></label> 
            
                  <input type="text" placeholder="Yes/No" name="graduated" value={this.state.graduated} onChange={this.onChangegraduated}/>
                  <br/>
                  <label htmlFor="graduateschl"><b>Graduate School</b></label>
                  <input type="text" placeholder="Name of Graduate School attended " name="graduateschl" value={this.state.graduateschl} onChange={this.onChangegraduateschl}/>
                  <br/>
                  <label htmlFor="noofyears"><b>No of Years</b></label>
                  <input type="text" placeholder="In Years" name="years" value={this.state.years} onChange={this.onChangenoofschl}/>
                  
                  <br/>
                  <br/>
                  <label htmlFor="noofyears"><b>Skills/Qualifications</b></label>
                  <input type="text" placeholder="skills" name="skills" value={this.state.skills} onChange={this.onChangeskills}/>
                  <br/>
                  <label htmlFor="certification"><b>Certification</b></label>
                  <input type="text" placeholder="Certification" name="certification" value={this.state.certification} onChange={this.onChangecertification}/>
                  <br/>
                 
                  <Button variant="danger" size="lg" block="block" type="submit">
                    Register
                    </Button>
                </form> 
            </div>
        );
    }
}
