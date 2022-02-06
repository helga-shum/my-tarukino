import React from 'react'

function Lines() {
    const [visibleMenu, setVisibleMenu] = React.useState(false);
    return (
        <div>
            <button class="menu-button navbar__menu-button" onClick={() => setVisibleMenu(!visibleMenu)}>
                <span className="menu-button__line"></span>
                <span className="menu-button__line"></span>
                <span className="menu-button__line"></span>
            </button>
        </div>
    )
}

export default Lines
