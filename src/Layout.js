import React from 'react'
import './Layout.css'
  const Layout = (props)=> (
        <div className='layout'>
          {props.children}  
        </div>
    )

export default Layout;
