import React, { Component } from 'react'

interface ToLowerCaseComponentProps {
    children: string
}

class ToLowerCaseComponent extends Component<ToLowerCaseComponentProps> {
    render() {
        return(
            <div>
                <p>{this.props.children.toLocaleLowerCase()}</p>
            </div>
        )
    }
}

export default ToLowerCaseComponent