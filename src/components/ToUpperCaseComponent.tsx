import React from 'react'

interface ToUpperCaseComponentProps{
    children: string
}

const ToUpperCaseComponent = ( props: ToUpperCaseComponentProps) => {
    return (
        <div>
            <p>{props.children.toLocaleUpperCase()}</p>
        </div>
    )
}

export default ToUpperCaseComponent