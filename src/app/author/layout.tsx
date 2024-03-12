import React from "react"
const Layout = ({children}:{children: React.ReactNode}) => (
    <div className={'background'}>
        {children}
    </div>
)
export default Layout;