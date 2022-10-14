import React, { useEffect, useState } from 'react'
import NextPage, { GetStaticPaths } from 'next'
import { CONTACT } from "../../components/ChatData"

const userData = CONTACT.map((chat) => chat.user_profile);



const UserProfile = ({ pageData }: any) => {

    const [data, setData] = useState(pageData) as any

    useEffect(() => { setData(data) }, [data])

    return (
        <>
            <p>{pageData.username}</p>

        </>
    );
}

// getstatc paths

export const getStaticPaths: GetStaticPaths = async () => {
    const USER_PROFILE = await userData;


    return {
        paths: USER_PROFILE.map(user => ({
            params: {

                username: user.username.toString()

            }
        })),

        fallback: false

    }
}


export const getStaticProps = async (context: { params: { username: any } }) => {
    const { username } = context.params;

    const USER_PROFILE = await userData.find(user => user.username === username)

    return {
        props: {
            pageData: USER_PROFILE
        }
    }
}

export default UserProfile;