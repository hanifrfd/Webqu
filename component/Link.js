import React from 'react'
import { useRouter } from 'next/router'
import { Nav } from 'react-bootstrap'

const Link = ({ href, children }) => {
    const router = useRouter()    
    return (
        <>         
        <Nav.Link href={href}>
        <style type="text/css">{`
                .navbar-light .navbar-nav .nav-link.active {
                    color: #4FABFF;
                }
        `}</style>                       
            {console.log(router.pathname)}
            { children }            
        </Nav.Link>
        </>
    )
}

export default Link;