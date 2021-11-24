import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap'

class Navb extends Component {
    render() {
        return (
            < div  >
                < Navbar fluid="true" style={{ backgroundColor: "rgb(0, 0, 153)" }} >

                    <Navbar.Brand style={{
                        color: "white", position: "relative", left: "20px"
                    }}>Demo Class</Navbar.Brand>

                </Navbar >
            </div >

        )
    }
}

export default Navb