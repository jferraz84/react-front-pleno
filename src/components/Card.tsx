import React, { PropsWithChildren } from 'react'

const Card = ( { children, title }: PropsWithChildren<Card.Props> ) => (
  <div className="card">
    <div className="card-header">
      <div className="card-title">
        <h2>{title}</h2>
      </div>
    </div>
    <div className="card-body">
      {children}
    </div>
  </div>
)

declare namespace Card {
  export interface Props {
    title: string
  }
}

export default Card