import React from 'react';
import Header2 from './header';

const minOffset = 0;
const maxOffset = 60;

class Personal extends React.Component {

  //Initilization
  constructor(props) {
    super(props);
    const thisYear = (new Date()).getFullYear();
    this.state = {
      fname: '',
      email: '',
      pswd: '',
      mblno: '',
      aline1: '',
      aline2:'',
      country :'',
      zipcode:'',
      year:'',
      month:'',
      skills: '',
      upload: '',
      curEmp: '',
      dest: '',
      cjbdes: '',
      curexp: '',
      prevEmp: '',
      pjbdes: '',
      prevexp: '',
      coluni: '',
      school: '',
      grad: '',
      noyr: '',
      skills: '',
      cert: '',
      fnameError: '',
      emailError: '',
      pswdError: '',
      mblnoError: '',
      addrsError: '',
      skillsError: '',
      uploadError: '',
      curEmpError: '',
      destError: '',
      cjbdesError: '',
      curexpError: '',
      prevEmpError: '',
      pjbdesError: '',
      prevexpError: '',
      coluniError: '',
      schoolError: '',
      noyrError: '',
      skillsError: '',
      certError: '',
      thisYear: '',
      selectedYear: '',
      alineError:'',
      states: [],
      cities: [],
      selectedState: '--Choose State--'
    };
    this.handleFnameChange =this.handleFnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePswdChange =this.handlePswdChange.bind(this);
    this.handleMblnoChange = this.handleMblnoChange.bind(this);
    this.handlealine1Change=this.handlealine1Change.bind(this);
    this.handlealine2Change = this.handlealine2Change.bind(this);
    // this.changeState = this.changeState.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeCountry=this.changeCountry.bind(this);
    this.changezipcode=this.changezipcode.bind(this);
    this.changeYear =this.changeYear.bind(this);
    this.changeMonth=this.changeMonth.bind(this);
    this.handleSkillsChange=this.handleSkillsChange.bind(this);
    this.handlecurEmpChange = this.handlecurEmpChange.bind(this);
    this.handledestination = this.handledestination.bind(this);
    this.handleCjbdesChange = this.handleCjbdesChange.bind(this);
    this.handleCurexpChange = this.handleCurexpChange.bind(this);
    this.handleprevEmpChange = this.handleprevEmpChange.bind(this);
    this.handlePjbdesChange = this.handlePjbdesChange.bind(this);
    this.handlePrevExpChange = this.handlePrevExpChange.bind(this);
    this.handlecoluniChange = this.handlecoluniChange.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onhandleGradChange = this.onhandleGradChange.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleNoyrChange = this.handleNoyrChange.bind(this);
    this.handleSkillsChange = this.handleSkillsChange.bind(this);
    this.handleCertChange = this.handleCertChange.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  componentDidMount() {
    this.setState({
      states: [
        { name: 'Maharastra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Thane'] },
        { name: 'Telangana', cities: ['Hyderabad', 'Medak', 'Karimanager'] },
        { name: 'TamilNadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem'] },
        { name: 'Karnataka', cities: ['Bangalore', 'Mangalore', 'Mysuru'] },
        { name: 'Uttar Pradesh', cities: ['Delhi', 'Barelly', 'Allahabad', 'Agra'] },
      ]
    });
  }

  changeState(event) {
    this.setState({selectedState: event.target.value});
    this.setState({cities : this.state.states.find(stat => stat.name === event.target.value).cities});
  }


  onClick = function () {
    //Reference the DropDownList.
    var ddlYears = document.getElementById("ddlYears");

    //Determine the Current Year.
    var currentYear = (new Date()).getFullYear();

    //Loop and add the Year values to DropDownList.
    for (var i = 1950; i <= currentYear; i++) {
      var option = document.createElement("OPTION");
      option.innerHTML = i;
      option.value = i;
      ddlYears.appendChild(option);
    }
  };
  onHandleChange = (evt) => {
    this.setState({ selectedYear: evt.target.value });
  };





  //Full Name Validation Start
  handleFnameChange = event => {
    this.setState({ fname: event.target.value }, () => {
      this.validateFname();
    });
  };
  validateFname = () => {
    let { fname } = this.state;
    let fnameError = '';

    if (!/^[a-zA-Z ]*$/.test(fname)) {
      fnameError = 'Please enter the Full Name'
    }
    if (fname.length < 5 || fname.length > 30) {
      fnameError = 'Accepts Alphabets, space &  Min 5  to Max 30 Char '
    }
    this.setState({ fnameError });
  }
  //Full Name Validation End

  //Email validation Start
  handleEmailChange = event => {
    this.setState({ email: event.target.value }, () => {
      this.validateEmail();
    });
  };
  validateEmail = () => {
    let { email } = this.state;
    let emailError = '';

    if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
      emailError = 'Please enter the Email id'
    }
    this.setState({ emailError });

  }
  //Email validation End

  //Password validation Start
  handlePswdChange = event => {
    this.setState({ pswd: event.target.value }, () => {
      this.validatePswd();
    });
  };
  validatePswd = () => {
    let { pswd } = this.state;
    let pswdError = '';

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,32}$/.test(pswd)) {
      pswdError = 'Please enter valid Password'
    }
    this.setState({ pswdError });
  }
  //Password validation End
  //Mobile Number Validation Start
  handleMblnoChange = event => {
    this.setState({ mblno: event.target.value }, () => {
      this.validateMblno();
    });
  };
  validateMblno = () => {
    let { mblno } = this.state;
    let mblnoError = '';

    if (!/^[0-9]*$/.test(mblno)) {
      mblnoError = 'Accepts only Numbers'
    }
    if (mblno.length < 10 || mblno.length > 10) {
      mblnoError = 'Invalid Mobile Number'
    }
    this.setState({ mblnoError });
  }
  //Mobile Number Validation End

//address line validation

handlealine1Change = event =>{
  this.setState({aline1:event.target.value},()=>{});
};

handlealine2Change = event =>{
  this.setState({aline2:event.target.value},()=>{});
};
//end of address line

//city validation

changeCity= event =>{
  this.setState({city:event.target.value},()=>{});
};
//end of city validation

//country

changeCountry = event =>{
  this.setState({country : event.target.value},()=>{});
};
//zipcode

changezipcode = event=>{
  this.setState({zipcode:event.target.value},()=>{});
};

//year

changeYear = event =>{
  this.setState({year:event.target.value},()=>{});
};

//month
changeMonth = event =>{
  this.setState({month:event.target.value},()=>{});
};

  //Upload Validation Start
  handleUploadChange = event => {
    this.setState({ upload: event.target.value }, () => {
      this.validateUpload();
    });
  };
  validateUpload = () => {
    let { upload } = this.state;
    this.setState({
      uploadError:
        upload.length > 0 ? null : 'Please Upload Profile'
    });
  }
  //Upload Validation End

  //Skills validation Start
  handleSkillsChange = event => {
    this.setState({ skills: event.target.value }, () => {
      this.validateSkills();
    });
  };
  validateSkills = () => {
    let { skills } = this.state;

    this.setState({
      skillsError:
        skills.length > 0 ? null : 'Please Enter Skills'
    });
  }
  //Skills validation End



  //Current Employer Validation Start
  handlecurEmpChange = event => {
    this.setState({ curEmp: event.target.value }, () => {
      this.validatecurEmp();
    });
  };
  validatecurEmp = () => {
    let { curEmp } = this.state;
    let curEmpError = '';

    if (!/^[a-zA-Z ]*$/.test(curEmp)) {
      curEmpError = 'Please enter Current Employer '
    }
    if (curEmp.length < 5 || curEmp.length > 30) {
      curEmpError = 'Accepts Alphabets, space &  Min 5  to Max 30 Char '
    }
    this.setState({ curEmpError });
  }
  //Current Employer Validation End

  //Destination validation Start
  handledestination = event => {
    this.setState({ dest: event.target.value }, () => {
      this.validatedestination();
    });
  };
  validatedestination = () => {
    let { dest } = this.state;
    let destError = '';

    if (!/^[a-zA-Z ]*$/.test(dest)) {
      destError = 'Please enter ination'
    }
    this.setState({ destError });

  }
  //Destination validation End

  //Job Description validation Start
  handleCjbdesChange = event => {
    this.setState({ cjbdes: event.target.value }, () => {
      this.validateCjbdes();
    });
  };
  validateCjbdes = () => {
    let { cjbdes } = this.state;

    this.setState({
      cjbdesError:
        cjbdes.length > 0 ? null : 'Please Enter Job Description'
    });
  }
  //Job Description validation End

  //Current Experience in Months Validation Start
  handleCurexpChange = event => {
    this.setState({ curexp: event.target.value }, () => {
      this.validateCurexp();
    });
  };
  validateCurexp = () => {
    let { curexp } = this.state;
    let curexpError = '';
    if (curexp.length < 2 || curexp.length > 2) {
      curexpError = 'Only 2 numbers'
    }
    this.setState({ curexpError });
  }
  //Current Experience in Months Validation End

  //Previous Employer Validation Start
  handleprevEmpChange = event => {
    this.setState({ prevEmp: event.target.value }, () => {
      this.validateprevEmp();
    });
  };
  validateprevEmp = () => {
    let { prevEmp } = this.state;
    let prevEmpError = '';

    if (!/^[a-zA-Z ]*$/.test(prevEmp)) {
      prevEmpError = 'Please enter Previous Employer '
    }
    if (prevEmp.length < 5 || prevEmp.length > 30) {
      prevEmpError = 'Accepts Alphabets, space &  Min 5  to Max 30 Char '
    }
    this.setState({ prevEmpError });
  }
  //Previous Employer Validation End

  //Job Description validation Start
  handlePjbdesChange = event => {
    this.setState({ pjbdes: event.target.value }, () => {
      this.validatePjbdes();
    });
  };
  validatePjbdes = () => {
    let { pjbdes } = this.state;

    this.setState({
      pjbdesError:
        pjbdes.length > 0 ? null : 'Please Enter Job Description'
    });
  }
  //Job Description validation End

  //Previous Experience in Months Validation Start
  handlePrevExpChange = event => {
    this.setState({ prevexp: event.target.value }, () => {
      this.validatePrevExp();
    });
  };
  validatePrevExp = () => {
    let { prevexp } = this.state;
    let prevexpError = '';
    if (prevexp.length < 2 || prevexp.length > 2) {
      prevexpError = 'Only 2 numbers'
    }
    this.setState({ prevexpError });
  }
  //Previous Experience in Months Validation End

  //Collage/University  Validation Start
  handlecoluniChange = event => {
    this.setState({ coluni: event.target.value }, () => {
      this.validatecoluni();
    });
  };
  validatecoluni = () => {
    let { coluni } = this.state;
    let coluniError = '';

    if (!/^[a-zA-Z ]*$/.test(coluni)) {
      coluniError = 'Please enter Current Employer '
    }
    if (coluni.length < 5 || coluni.length > 30) {
      coluniError = 'Accepts Alphabets, space &  Min 5  to Max 30 Char '
    }
    this.setState({ coluniError });
  }
  //Collage/University  Validation End

 /////////////////

 onhandleGradChange = event =>{
   this.setState({grad:event.target.value},()=>{});
 };

  //Graduate School  validation Start
  handleSchoolChange = event => {
    this.setState({ school: event.target.value }, () => {
      this.validateSchool();
    });
  };
  validateSchool = () => {
    let { school } = this.state;
    let schoolError = '';

    if (!/^[a-zA-Z ]*$/.test(school)) {
      schoolError = 'Please enter School'
    }
    if (school.length < 5 || school.length > 30) {
      schoolError = 'Accepts Alphabets, space &  Min 5  to Max 30 Char '
    }
    this.setState({ schoolError });

  }
  //Graduate School  validation End

  //Skills/ Qualifications  validation Start
  handleSkillsChange = event => {
    this.setState({ skills: event.target.value }, () => {
      this.validateSkills();
    });
  };
  validateSkills = () => {
    let { skills } = this.state;

    this.setState({
      skillsError:
        skills.length > 0 ? null : 'Please Enter Skills/ Qualifications'
    });
  }
  //Skills/ Qualifications  validation End

  //Number of years attended  Validation Start
  handleNoyrChange = event => {
    this.setState({ noyr: event.target.value }, () => {
      this.validateNoyr();
    });
  };
  validateNoyr = () => {
    let { noyr } = this.state;
    let noyrError = '';
    if (noyr.length < 2 || noyr.length > 2) {
      noyrError = 'Enter Number of years attended '
    }
    this.setState({ noyrError });
  }
  //Number of years attended  Validation End

  //Certification validation Start
  handleCertChange = event => {
    this.setState({ cert: event.target.value }, () => {
      this.validateCert();
    });
  };
  validateCert = () => {
    let { cert } = this.state;

    this.setState({
      certError:
        cert.length > 0 ? null : 'Please Enter Certification'
    });
  }
  //Certification validation End







  //OnSubmit
  handleSubmit = event => {
    event.preventDefault();
    const sub = "Submitted";
    console.log(sub)
  };

  //Reset
  resetForm = () => {
    this.setState({
      fname: '',
      email: '',
      pswd: '',
      mblno: '',
      addrs: '',
      skills: '',
      upload: '',
      states: [],
      cities: [],
      curEmp: '',
      dest: '',
      cjbdes: '',
      curexp: '',
      prevEmp: '',
      pjbdes: '',
      prevexp: '',
      coluni: '',
      school: '',
      grad: '',
      noyr: '',
      skills: '',
      cert: '',
      fnameError: '',
      emailError: '',
      pswdError: '',
      mblnoError: '',
      addrsError: '',
      skillsError: '',
      uploadError: '',
      curEmpError: '',
      destError: '',
      cjbdesError: '',
      curexpError: '',
      prevEmpError: '',
      pjbdesError: '',
      prevexpError: '',
      coluniError: '',
      schoolError: '',
      noyrError: '',
      skillsError: '',
      certError: '',
      thisYear: '',
      selectedYear: '',
      shoreError: '',

    })
    console.log("Reset done")
  }


  render() {
    var myStyle3 = {
      padding: 3,
      borderRadius: 4,
      size: 20,
      marginTop: 0
    };
    const { thisYear, selectedYear } = this.state;
    const options = [];

    for (let i = minOffset; i <= maxOffset; i++) {
      const year = thisYear - i;
      options.push(<option value={year}>{year}</option>);
    }

    return (
      <div className='container-fluid'>
        <Header2 />
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <form onSubmit={this.handleSubmit}>

              {/* Full Name */}
              <div className='form-group'>
                <input
                  name='fname'
                  className={`form-control ${this.state.fnameError ? 'is-invalid' : ''}`}
                  id='fname'
                  placeholder='Full Name'
                  value={this.state.fname}
                  onChange={this.handleFnameChange}
                  onBlur={this.validateFname}
                />
                <div className='invalid-feedback'>{this.state.fnameError}</div>
              </div>

              {/* Email Id */}
              <div className='form-group'>
                <input
                  name='email'
                  className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
                  id='email'
                  placeholder='email Id'
                  value={this.state.assId}
                  onChange={this.handleEmailChange}
                  onBlur={this.validateEmail}
                />
                <div className='invalid-feedback'>{this.state.emailError}</div>
              </div>

              {/* Password */}
              <div className='form-group'>
                <input
                  name='pswd'
                  className={`form-control ${this.state.pswdError ? 'is-invalid' : ''}`}
                  id='pswd'
                  placeholder='Password'
                  value={this.state.pswd}
                  onChange={this.handlePswdChange}
                  onBlur={this.validatePswd}
                />
                <div className='invalid-feedback'>{this.state.pswdError}</div>
              </div>

              {/* Mobile Number */}
              <div className='form-group'>
                <input
                  name=' mblno'
                  className={`form-control ${this.state.mblnoError ? 'is-invalid' : ''}`}
                  id=' mblno'
                  placeholder='Mobile Number'
                  value={this.state.mblno}
                  onChange={this.handleMblnoChange}
                  onBlur={this.validateMblno}
                />
                <div className='invalid-feedback'>{this.state.mblnoError}</div>
              </div>

              {/* Address */}
              <div className='form-group'>
                <fieldset>
                  <input
                    name='aline1'
                    className='form-control'
                    id='aline1'
                    placeholder='Address Line 1'
                    value={this.state.aline1}
                    onChange={this.handlealine1Change}
                  />
                  <br></br>
                  <input
                    name='aline2'
                    className='form-control'
                    id='aline2'
                    placeholder='Address Line 2'
                    value={this.state.aline2}
                    onChange={this.handlealine2Change}
                  />
                  <br></br>
                  <div id='stci'>
                    <select placeholder="State"
                    name="state"
                      className='form-control'
                      value={this.state.selectedState}
                      onChange={this.changeState}>
                      <option>--Choose State--</option>
                      {this.state.states.map((e, key) => {
                        return <option key={key}>{e.name}</option>;
                      })}
                    </select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select placeholder="City"
                name="city"
                      className='form-control'
                      onChange={this.changeCity}>
                      <option>--Choose City--</option>
                      {this.state.cities.map((e, key) => {
                        return <option key={key}>{e}</option>;
                      })}
                    </select>
                  </div>
                  <br></br>
                  <div id='pcode'>
                    <input
                      name='country'
                      className='form-control'
                      id='country'
                      placeholder='Country'
                      value={this.state.country}
                      onChange={this.changeCountry}
                    />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                      name='zipcode'
                      className='form-control'
                      id='zipcode'
                      placeholder='Zipcode'
                      value={this.state.zipcode}
                      onChange={this.changezipcode}
                    />
                  </div>
                </fieldset>
              </div>
              {/* Total Work Experience  */}
              <div className='form-group'>
                <div id='wexp'>
                  <input
                    name='year'
                    type="number"
                    className='form-control'
                    id='year'
                    placeholder='Year'
                    min="2019" max="2100"
                    value={this.state.year}
                    onChange={this.changeYear}
                  />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                    name='month'
                    type='number'
                    className='form-control'
                    id='month'
                    placeholder='Month'
                    min="01" max="12"
                    value={this.state.month}
                    value={this.changeMonth}
                  />
                </div>
              </div>
              {/* Skills */}
              <div className='form-group'>
                <textarea
                  name='skills'
                  className={`form-control ${this.state.skillsError ? 'is-invalid' : ''}`}
                  id='skills'
                  placeholder='Skills'
                  value={this.state.skills}
                  onChange={this.handleSkillsChange}
                  onBlur={this.validateSkills}
                />
                <div className='invalid-feedback'>{this.state.skillsError}</div>
              </div>

              {/* Upload */}
              {/* <div className='form-group'>
                <input
                  style={myStyle3}
                  name='upload'
                  className={`form-control ${this.state.uploadError ? 'is-invalid' : ''}`}
                  id='upload'
                  type="file"
                  value={this.state.upload}
                  onChange={this.handleUploadChange}
                  onBlur={this.validateUpload}
                />
                <div className='invalid-feedback'>{this.state.uploadError}</div>
              </div> */}






              {/* Current Employer */}
              <div className='form-group'>
                <input
                  name='curEmp'
                  className={`form-control ${this.state.curEmpError ? 'is-invalid' : ''}`}
                  id='curEmp'
                  placeholder='Enter current employer'
                  value={this.state.curEmp}
                  onChange={this.handlecurEmpChange}
                  onBlur={this.validatecurEmp}
                />
                <div className='invalid-feedback'>{this.state.curEmpError}</div>
              </div>

              {/* Destination */}
              <div className='form-group'>
                <input
                  name='dest'
                  className={`form-control ${this.state.destError ? 'is-invalid' : ''}`}
                  id='dest'
                  placeholder='Enter Destination'
                  value={this.state.dest}
                  onChange={this.handledestination}
                  onBlur={this.validatedestination}
                />
                <div className='invalid-feedback'>{this.state.destError}</div>
              </div>

              {/* Job Description */}
              <div className='form-group'>
              <textarea
                  name='cjbdes'
                  className={`form-control ${this.state.cjbdesError ? 'is-invalid' : ''}`}
                  id='cjbdes'
                  placeholder='Job Description'
                  value={this.state.cjbdes}
                  onChange={this.handleCjbdesChange}
                  onBlur={this.validateCjbdes}
                />
                <div className='invalid-feedback'>{this.state.cjbdesError}</div>

              </div>

              {/* Experience in Months */}
              <div className='form-group'>
                <input
                  name='curexp'
                  type="number"
                  className={`form-control ${this.state.curexpError ? 'is-invalid' : ''}`}
                  id=' curexp'
                  placeholder='Experience in Months'
                  value={this.state.curexp}
                  onChange={this.handleCurexpChange}
                  onBlur={this.validateCurexp}
                />
                <div className='invalid-feedback'>{this.state.curexpError}</div>
              </div>

              {/* Previous Employer */}
              <div className='form-group'>
                <input
                  name='prevEmp'
                  className={`form-control ${this.state.prevEmpError ? 'is-invalid' : ''}`}
                  id='prevEmp'
                  placeholder='Enter previous employer'
                  value={this.state.prevEmp}
                  onChange={this.handleprevEmpChange}
                  onBlur={this.validateprevEmp}
                />
                <div className='invalid-feedback'>{this.state.prevEmpError}</div>
              </div>

              {/*Previous  Job  Description  */}
              <div className='form-group'>
                <textarea
                  name='pjbdes'
                  className={`form-control ${this.state.pjbdesError ? 'is-invalid' : ''}`}
                  id='pjbdes'
                  placeholder='Previous Job Description'
                  value={this.state.pjbdes}
                  onChange={this.handlePjbdesChange}
                  onBlur={this.validatePjbdes}
                />
                <div className='invalid-feedback'>{this.state.pjbdesError}</div>
              </div>

              {/*Previous Experience in Months */}
              <div className='form-group'>
                <input
                  name='prevexp'
                  type="number"
                  className={`form-control ${this.state.prevexpError ? 'is-invalid' : ''}`}
                  id='prevexp'
                  placeholder='Experience in Months'
                  value={this.state.prevexp}
                  onChange={this.handlePrevExpChange}
                  onBlur={this.validatePrevExp}
                />
                <div className='invalid-feedback'>{this.state.prevexpError}</div>
              </div>

              {/* Collage/University */}
              <div className='form-group'>
                <input
                  name='coluni'
                  className={`form-control ${this.state.coluniError ? 'is-invalid' : ''}`}
                  id='coluni'
                  placeholder='Enter College/University'
                  value={this.state.coluni}
                  onChange={this.handlecoluniChange}
                  onBlur={this.validatecoluni}
                />
                <div className='invalid-feedback'>{this.state.coluniError}</div>
              </div>

              {/* Years Passed on */}
              <div className='form-group'>
                <select name='pyear' className={`form-control ${this.state.schoolError ? 'is-invalid' : ''}`}
                  value={this.selectedYear}
                   onChange={this.onHandleChange}>
                  {options}
                </select>
              </div>

              {/* Graduated */}
              <div className='form-group'>
                <select name='grad' className={`form-control ${this.state.schoolError ? 'is-invalid' : ''}`}  onChange={this.onhandleGradChange}>
                  <option>--Graduated--</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              {/* Graduate School */}
              <div className='form-group'>
                <input
                  name='school'
                  className={`form-control ${this.state.schoolError ? 'is-invalid' : ''}`}
                  id='school'
                  placeholder='Name of graduate school attended'
                  value={this.state.school}
                  onChange={this.handleSchoolChange}
                  onBlur={this.validateSchool}
                />
                <div className='invalid-feedback'>{this.state.schoolError}</div>
              </div>

              {/* Number of years attended   */}
              <div className='form-group'>
                <input
                  name='noyr'
                  className={`form-control ${this.state.noyrError ? 'is-invalid' : ''}`}
                  id='noyr'
                  type='number'
                  placeholder='Number of years attended'
                  min='01'
                  max='20'
                  value={this.state.noyr}
                  onChange={this.handleNoyrChange}
                  onBlur={this.validateNoyr}
                />
                <div className='invalid-feedback'>{this.state.noyrError}</div>
              </div>


              {/* Skills/Qualifications */}
              <div className='form-group'>
                <input
                  name='skills2'
                  className={`form-control ${this.state.skillsError ? 'is-invalid' : ''}`}
                  id='skills'
                  placeholder='Skills or Qualifications'
                  value={this.state.skills}
                  onChange={this.handleSkillsChange}
                  onBlur={this.validateSkills}
                />
                <div className='invalid-feedback'>{this.state.skillsError}</div>

              </div>

              {/* Certifications */}
              <div className='form-group'>
                <input
                  name='cert'
                  className={`form-control ${this.state.certError ? 'is-invalid' : ''}`}
                  id='cert'
                  placeholder='Microsoft / Online Certifications'
                  value={this.state.cert}
                  onChange={this.handleCertChange}
                  onBlur={this.validateCert}
                />
                <div className='invalid-feedback'>{this.state.certError}</div>
              </div>


              {/* Submit&Reset */}
              <div className="form-group">
                <button type='submit' className='btn btn-primary'>
                  Submit
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type='reset' onClick={this.resetForm}
                  className='btn btn-danger'>
                  Reset
          </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;

