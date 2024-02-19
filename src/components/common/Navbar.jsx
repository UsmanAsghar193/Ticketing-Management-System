import { handleLogout } from '@/lib/serverActions'
import { HomeOutlined } from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
    return (
        <>
            <div className='p-4'>
                <Link className='text-4xl font-mono text-neutral-200' href={'/'}><HomeOutlined /><span className='mx-1'>TMS</span></Link>
                {/* <form action={handleLogout}>
                    <button>Logout</button>
                </form> */}
            </div>
        </>
    )
}

export default Navbar