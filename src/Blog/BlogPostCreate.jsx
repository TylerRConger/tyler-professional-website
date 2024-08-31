import React, { useRef, useState, useEffect } from "react";
import { firestore } from "src/Blog/firebase.js";
import { collection, addDoc, doc, getDoc } from "@firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import Tiptap from '../components/TipTap.jsx'
import SignIn from "./components/Authentication/SignIn";
import AuthDetails from "./components/Authentication/AuthDetails";
import { auth } from "src/Blog/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// TODO: This page is really for my eyes only right now, it works and stuff, but maybe make it better so this could be generally used

// Firestore reference (assuming `firestore` is initialized)
const tagsDocRef = doc(firestore, 'tags', 'ooFqhLtv5fqVFDuBG1Ve');

const BlogPost = () => {

    const [authUser, setAuthUser] = useState(null);
    const [availableTags, setAvailableTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    
    // Monitor authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthUser(user);
        });
        return () => unsubscribe();
    }, []);

    // Fetch tags from the Firestore document
    useEffect(() => {
        const fetchTags = async () => {
            try {
                const tagDoc = await getDoc(tagsDocRef);
                if (tagDoc.exists()) {
                    const tags = tagDoc.data().tagName || []; // Retrieve the tagName array
                    setAvailableTags(tags);
                } else {
                    toast.error('No such document!');
                }
            } catch (error) {
                toast.error('Error fetching tags:' + error);
            }
        };

        fetchTags();
    }, []);

    const contentRef = useRef(null);
    const titleRef = useRef(null);

    const BlogPostPost = () => {
        if (!authUser) {
            toast.error("You must login first!");
            return;
        }
        const content = contentRef.current?.getContent();
        const title = titleRef.current?.getContent();
        makePostJSON(title, content, selectedTags);

    };

    // Function to handle tag selection
    const handleTagClick = (tag) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
        );
    };

    return (
        <div className="grid grid-cols-1 gap-1 justify-self-center bg-neutral-800 w-full text-white p-4">
            <div className="text-black">
                <SignIn />
                <AuthDetails />
            </div>
            <div>
                <div>
                    <h1>Title: </h1>
                </div>
                <div className="p-1 bg-white rounded">
                    <Tiptap ref={titleRef} />
                </div>
            </div>
            <div>
                <div>
                    <h1>Content: </h1>
                </div>
                <div className="p-5 bg-white rounded">
                    <Tiptap ref={contentRef} />
                </div>
            </div>

            {/* Tag Selection Section */}
            <div className="mt-4">
                <h1>Tags: </h1>
                <div className="flex flex-wrap gap-2 mt-2 grid grid-cols-5">
                    {availableTags.map((tag) => (
                        <button
                            key={tag}
                            className={`px-3 py-1 rounded-full border-2 text-sm ${selectedTags.includes(tag)
                                    ? 'bg-red-500 border-red-500 text-white'
                                    : 'bg-gray-700 border-gray-500 text-white'
                                } hover:bg-red-600 hover:border-red-500 focus:outline-none`}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <div className="justify-self-center mt-4">
                <button
                    className="flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base"
                    onClick={BlogPostPost}
                >
                    Submit
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

// Consider Features of a BlogPost
/* 
    - Title
    - Author
    - Date Created
    - Body
    - Last Edit
    - Tags
    Meta Data
    - ID
*/
function makePostJSON(titleTextHTML, bodyTextHTML, selectedTags) {

    const ref = collection(firestore, "messages");

    let dateTime = new Date();
    let post = {
        title: titleTextHTML,
        dateCreated: dateTime,
        author: "Tyler Conger",
        body: bodyTextHTML,
        lastEdit: dateTime,
        tags: selectedTags,
        uuid: uuidv4(),
    }

    try {
        addDoc(ref, post);
        toast.success("Successful submitted")
    } catch (e) {
        toast.error(e);
    }
};

// TODO 
/* 
- Create a list of tags in the DB and populate a list to select from/add to, new tags get added to the DB
- Title Box
- Edit a previous post
    - Retrieve from the DB, fill appropriate fields and allow user to edit the post, update only the lastEdit field + user changes
- Generate a uuid for each post
- Check date is UTC not user timezone
- Add more functionality to TipTap for better post creation
- Connect Submissions to the db
*/

export default BlogPost;