import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap';
export default class Careertips extends Component{
    render(){
        return(
            <div>
                <h3>Career Tips</h3>
                <Row>
                    <Col sm={5}>
                       <br/> <p> 1.  Ready to work from Home? Here's How to keep calm and be Productive</p>
                        <p> 3.  8 Most Popular Part time jobs for Students</p>
                        <p> 5.  5 Work from Home Tips for those who Genuinely wants to 'Work' and 'Contribute'</p><br/>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={5}>
                       <p> 2. These Best Part Time jobs do not requires you to be a Topper.</p>
                       <p> 4. 10 Best Skype Interview Tips for Job Seekers who want to Succeed.</p>
                       <p> 6. Top Tips and Resources to Manage your Career Amid Coronavirus.</p>
                     </Col>
                </Row>
            </div>
        );
    }
}