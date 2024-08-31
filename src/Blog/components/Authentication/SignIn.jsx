import React, { useState } from "react";
import { auth } from "../../firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(() => {
            // TODO: Do something on signin here
        })
    }
    return (
        <div className="">
            <form onSubmit={signIn} >
                <h1 className="gap-1 justify-self-center bg-neutral-800 w-full text-white">Log In:</h1>
                <div className="grid grid-cols-3 gap-1 justify-self-center bg-neutral-800 w-full text-white p-4">
                <input className="rounded p-2 text-black" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input className="rounded p-2 text-black" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit" className="flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base">Login</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn