import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'

const Layout = ({children,active}) => {
    return (
        <div className='layout'>
            <Sidebar active={active}/>

            {children}
        </div>
    )
}

export default Layout
