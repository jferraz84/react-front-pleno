import React, { Component } from 'react'

interface ToggleCaseComponentProps {
  children: string
  mode: 'lower' | 'upper'
}

interface ToggleCaseComponentState {
  mode: 'lower' | 'upper'
}

class ToggleCaseComponent extends Component<ToggleCaseComponentProps, ToggleCaseComponentState> {
  constructor( props: ToggleCaseComponentProps ) {
    super( props )
    this.state = { mode: props.mode }
  }

  protected toggle = () => {
    this.setState( { mode: this.state.mode === 'lower' ? 'upper' : 'lower' } )
  }

  public render() {
    console.log( 'render' )
    return (
      <div onClick={this.toggle} style={ { backgroundColor: 'red' } }>
        <p>
          { this.state.mode === 'lower'
            ? this.props.children.toLocaleLowerCase()
            : this.props.children.toUpperCase() }
        </p>
      </div>
    )
  }
}

export default ToggleCaseComponent