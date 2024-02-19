'use server'

import { cookies } from 'next/headers'

export async function create() {
    // const { req } = context;

    // const cookieHeader = req.headers.cookie;

    // const desiredCookie = cookies['session'];


    // cookies().set('session', desiredCookie )
    // Get cookie

    // Set cookie
    // const value = cookies().get('session')?.value
    // console.log(value)
    // const currentUserToken = request.cookies.get('session')?.value;

    const ServerValue = cookies().get('session')?.value
    console.log(ServerValue)

    // Delete cookie
    //   cookies().delete('name')
}