import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="140" cy="118" r="118" />
        <rect x="0" y="258" rx="0" ry="0" width="280" height="30" />
        <rect x="3" y="304" rx="0" ry="0" width="280" height="90" />
        <rect x="0" y="405" rx="0" ry="0" width="280" height="45" />
        <rect x="135" y="395" rx="0" ry="0" width="7" height="16" />
    </ContentLoader>
)

export default MyLoader