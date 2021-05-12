import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">All Rights Reserved 2021 @ Assignment Submission for NJC Labs by Aswin Andro </span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
