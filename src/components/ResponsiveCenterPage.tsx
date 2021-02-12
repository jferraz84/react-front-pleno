import React, { PropsWithChildren } from 'react'

const ResponsiveCenterPage = ( { children }: PropsWithChildren<ResponsiveCenterPage.Props> ) => {
  return (
    <div className="container h-100">
      <div className="row align-items-center justify-content-center h-100">
        <div className="col-lg-4 col-md-6 col-sm-12">
          {children}
        </div>
      </div>
    </div>
  )
}

declare namespace ResponsiveCenterPage {
  export interface Props {}
}

export default ResponsiveCenterPage