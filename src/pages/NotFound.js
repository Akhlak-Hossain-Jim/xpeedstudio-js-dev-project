import React, { useEffect } from 'react'

function NotFound() {
    useEffect(() => {
        document.title = 'Page not Found'
    }, [])
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'grid', placeItems: 'center', backgroundColor: '#fff' }}>
            <p style={{ maxWidth: '500px', borderRadius: '50px', boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff', padding: '50px', height: '200px', display: 'flex', alignItems: 'center' }}>The Page you requested not Found.</p>
        </div>
    )
}

export default NotFound
