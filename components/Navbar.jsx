import Link from "next/link"
import React, { useState, useEffect } from "react"
import { UserAuth } from "../api/firebase/AuthContext"

const Navbar = () => {
    const { user, googleSignIn, logOut } = UserAuth()
    const [ loading, setLoading ] = useState(true)

    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50))
            setLoading(false)
        }
        checkAuthentication()
    }, [user])

    return (
        <div className="container">
            {loading ? null : !user ? (
                <div className="btn-warp">
                    <button onClick={ handleSignIn } className="btn">登入 / 註冊</button>
                </div>
            ) : (
                <div className="btn-warp">
                    <p>哈囉，{ user.displayName }</p>
                    <button className="btn"><Link href="/accounting">點此開始</Link></button>
                    <button className="btn" onClick={handleSignOut}>登出</button>
                </div>
            )}
        </div>
    )
}

export default Navbar
