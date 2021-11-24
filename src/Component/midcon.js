import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Navbar, Container, InputGroup, FormControl } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button';
import "./st.css"

class midcon extends Component {
    state = {
        info: [{ Class: 10, Section: "A", ClassTeacher: "Sir Josef", Student: 10 }, { Class: 10, Section: "B", ClassTeacher: "Sir Ramesh", Student: 10 }, { Class: 10, Section: "A", ClassTeacher: "Sir Rohan", Student: 10 }]
    }



    render() {
        return (
            <div>

                <Container style={{ marginTop: "100px", border: " outset ", backgroundColor: "white", borderRadius: "8px" }}>
                    <Container style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", padding: "0px", marginLeft: "0px", }}>

                        <Container style={{ marginTop: "10px", marginLeft: "0px", width: "50%", display: "flex", paddingLeft: "0px", }}>

                            <FontAwesomeIcon icon={faSearch} size="3em" style={{ position: 'relative', zIndex: "1", left: "600px", top: "15px" }} />
                            <input type="text" placeholder="Search Employess" style={{ width: "100%", border: "2px solid black", borderRadius: "8px" }} on />
                        </Container>

                        <Button style={{ marginTop: "20px", backgroundColor: "white", color: "purple", position: "relative", right: "75px", bottom: "5px", fontSize: "18px", borderRadius: "8px", fontWeight: "bold" }} >+ Add Class</Button>
                    </Container>
                    <Container>
                        <Container className="cHeader" >
                            <span>Class</span>
                            <span>Section</span>
                            <span>Class Teacher</span>
                            <span>Student</span>
                        </Container>
                        <hr style={{ borderTop: "2px solid black", width: "50%", marginTop: "2px" }} />
                    </Container>
                    {this.state.info.map(cap => {
                        return (
                            <Container className="mHeader" >
                                <span>{cap.Class}</span>
                                <span>{cap.Section}</span>
                                <span>{cap.ClassTeacher}</span>
                                <span>{cap.Student}</span>
                            </Container>
                        )
                    })}
                    <br />
                </Container>

            </div >
        )
    }
}


export default midcon