import React, { Component } from 'react'

interface LifeCycleProps {
  children: string
  mode: 'lower' | 'upper'
}

interface LifeCycleState {
  mode: 'lower' | 'upper'
}

class LifeCycle extends Component<LifeCycleProps, LifeCycleState> {

  protected toggle = () => {
    this.setState( { mode: this.state.mode === 'lower' ? 'upper' : 'lower' } )
  }

  constructor( props: LifeCycleProps ) {
    super( props )
    this.state = { mode: props.mode }
  }

  /**
   * descontinuado futurament removido do react
   * UNSAFE_componentWillMount
   * Executado antes do componente ser montado ( render executado pela primeira vez )
   */
  componentWillMount() { console.log( 'componentWillMount' ) }
  UNSAFE_componentWillMount() { console.log( 'UNSAFE_componentWillMount' ) }

  /**
   * Atualiza o estado conforme alteração nos valores das propriedades.
   * Executado antes mesmo do shouldComponentUpdate
   */
  // public static getDerivedStateFromProps( props: LifeCycleProps, state: LifeCycleState ): Partial<LifeCycleState> {
  //   console.log( 'getDerivedStateFromProps' )
  //   return { mode: state.mode }
  // }

  /**
   * descontinuado futurament removido do react
   * UNSAFE_componentWillReceiveProps
   * Antes de receber novas propriedades.
   * Apenas é executado quando o pai ( parent ) for atualizado.
   */
  componentWillReceiveProps( nextProps: LifeCycleProps ) { console.log( 'componentWillReceiveProps' ) }
  UNSAFE_componentWillReceiveProps( nextProps: LifeCycleProps ) { console.log( 'UNSAFE_componentWillReceiveProps' ) }

  /**
   * Executando antes de receber novas propriedades ou um novo estado.
   * Responsavel por prevenir renderizações desnecessarias com valores boolean.
   * Recebe as novas propriedades e o novo estado.
   */
  shouldComponentUpdate( nextProps: LifeCycleProps, nextState: LifeCycleState ) {
    // console.log( this.props, nextProps )
    // console.log( this.state, nextState )
    console.log( 'shouldComponentUpdate' )
    return true
  }

  /**
   * descontinuado futurament removido do react
   * UNSAFE_componentWillUpdate
   * Executado antes do componente sofrer atualização ( antes do render ser executado )
   */
  componentWillUpdate() { console.log( 'componentWillUpdate' ) }
  UNSAFE_componentWillUpdate() { console.log( 'UNSAFE_componentWillUpdate' ) }

  render() {
    console.log( 'render' )
    return (
      <div onClick={this.toggle}>
        <p>
          { this.state.mode === 'lower'
            ? this.props.children.toLocaleLowerCase()
            : this.props.children.toUpperCase() }
        </p>
      </div>
    )
  }
  /**
   * Executado depois que o componente for montado ( depois que o render set executado pela primeira vez )
   */
  componentDidMount() { console.log( 'componentDidMount' ) }

  /**
   * Executado depois do componente sofrer atualização ( depois do render ser executado )
   */
  componentDidUpdate() { console.log( 'componentDidUpdate' ) }

  /**
   * Executado toda vez que o componente for desmontado.
   * **** Removido da arvore do react.
   */
  componentWillUnmount() { console.log( 'componentWillUnmount' ) }
}

export default LifeCycle