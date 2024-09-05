import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";


const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth)
    }
    return (
        <div className="gap-1 justify-self-center bg-neutral-800 w-full text-white p-4">
            <div>
                {authUser ? 
                <div>
                <p>{`Signed in as ${authUser.email}`}</p>
                <button onClick={userSignOut} className="flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base">Sign Out</button>
            </div> :
                <div className="">
                    <p>Signed Out</p>
                </div>
            }
            </div>
        </div>
    )
}

export default AuthDetails