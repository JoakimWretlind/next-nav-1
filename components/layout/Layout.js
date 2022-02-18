import { useState, useMemo } from 'react'
import { NavbarContext } from '../context/NavbarContext'
import Navbar from '../navbar/Navbar'

const Layout = (props) => {
    const [value, setValue] = useState(false)

    const providerValue = useMemo(() => ({ value, setValue }), [value, setValue])

    return (
        <>
            <NavbarContext.Provider value={providerValue}>
                <Navbar />
                <main>{props.children}</main>
            </NavbarContext.Provider>
        </>
    )
}

export default Layout