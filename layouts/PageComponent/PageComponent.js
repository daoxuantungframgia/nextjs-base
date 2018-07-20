import React from 'react'
import { DialogComponent } from '../../components/Dialog' 

const pageComponent = (WrappedComponent) => (
  (props) => (
    <div>
      <DialogComponent />
      <WrappedComponent {...props}/>
    </div>
  )
)

export default pageComponent
