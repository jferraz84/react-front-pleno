import React, { useState } from 'react'

const ExampleFunctionComponent = ( props: ExampleFunctionComponent.Props ) => {
  const [ name, setName ] = useState( '' )
  
  return (
    <div className='container'>
      <div className="row align-items-center justify-content-center">
        <div className="col-4">
          <h1>Bem-vindo{ name ? `, ${name}`: '' }</h1>
          <input type="text" value={name} className='form-control' onChange={ event => {
            setName( event.target.value )
          } }/>
        </div>
      </div>
    </div>
  )
}

declare namespace ExampleFunctionComponent {
  export interface Props {}
}

export default ExampleFunctionComponent