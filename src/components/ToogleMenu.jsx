import React from 'react'
import Lines from './Header/Lines'
import Menu from './Header/Menu'

function ToogleMenu() {
    const [visibleMenu, setVisibleMenu] = React.useState(false);
    const menuRef = React.useRef()
    const toogleMenu = () => {
        setVisibleMenu(!visibleMenu)
    }
    return (
        <div>
            <Lines/>
            <Menu/>
        </div>
    )
}

export default ToogleMenu
