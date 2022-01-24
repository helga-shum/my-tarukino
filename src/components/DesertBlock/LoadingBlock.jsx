import React from 'react'
import ContentLoader from 'react-content-loader'

function LoadingBlock() {
    return (

        <ContentLoader
            speed={2}
            width={285}
            height={305}
            viewBox="0 0 285 305"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"

        >
            <rect x="0" y="212" rx="0" ry="0" width="285" height="19" />
            <rect x="1" y="-1" rx="0" ry="0" width="285" height="190" />
            <rect x="333" y="302" rx="0" ry="0" width="112" height="52" />
            <rect x="162" y="307" rx="0" ry="0" width="50" height="30" />
            <rect x="170" y="249" rx="0" ry="0" width="112" height="52" />
            <rect x="1" y="255" rx="0" ry="0" width="75" height="24" />
        </ContentLoader>)
}

export default LoadingBlock