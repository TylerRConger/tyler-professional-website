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
                <button onClick={userSignOut}>Sign Out</button>
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