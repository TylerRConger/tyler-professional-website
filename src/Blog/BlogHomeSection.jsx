import React, { useState, useEffect } from "react";
import { firestore } from "src/Blog/firebase.js";
import { getFirestore, collection, query, getDocs, orderBy, doc, getDoc } from "@firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    return (
        <div>
            <Blog />
        </div>
    );
}

const tagsDocRef = doc(firestore, 'tags', 'ooFqhLtv5fqVFDuBG1Ve');

function Blog() {
    const [sortOrder, setSortOrder] = useState('desc');
    const [selectedTags, setSelectedTags] = useState([]);
    const [availableTags, setAvailableTags] = useState([]);
    const [messages, setMessages] = useState([]);
    const db = getFirestore();

    // Fetch messages with selected tags
    useEffect(() => {
        const fetchMessages = async () => {
            const q = query(
                collection(db, "messages"),
                orderBy("lastEdit", sortOrder)
            );

            const querySnapshot = await getDocs(q);
            const filteredMessages = querySnapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(message =>
                    selectedTags.every(tag => message.tags.includes(tag))
                );

            setMessages(filteredMessages);
        };

        fetchMessages();
    }, [selectedTags, sortOrder]);

    // Clear selected tags
    const clearTags = () => setSelectedTags([]);

    // Handle tag click for filtering
    const handleTagClick = (tag) => {
        setSelectedTags((prevSelectedTags) =>
            prevSelectedTags.includes(tag)
                ? prevSelectedTags.filter((t) => t !== tag)
                : [...prevSelectedTags, tag]
        );
    };

    // Fetch tags from Firestore on component mount
    useEffect(() => {
        const fetchTags = async () => {
            try {
                const tagDoc = await getDoc(tagsDocRef);
                if (tagDoc.exists()) {
                    const tags = tagDoc.data().tagName || [];
                    setAvailableTags(tags);
                } else {
                    toast.error('No such document!');
                }
            } catch (error) {
                toast.error(error);
            }
        };

        fetchTags();
    }, []);

    if (!messages.length) return <p>Loading...</p>;

    return (
        <div className="bg-neutral-800">
            <div className="flex flex-col gap-6">
                <div className="flex justify-center pt-4">
                    <h2 className="text-2xl font-bold text-white">Blog Posts:</h2>
                </div>

                {/* Sorting buttons */}
                <div className="flex justify-center gap-2">
                    <button
                        onClick={() => setSortOrder('desc')}
                        className={`px-3 py-1 text-sm rounded-full border-2 ${sortOrder === 'desc' ? 'bg-red-500 border-red-500 text-white' : 'bg-gray-700 border-gray-500 text-white'} hover:bg-red-600 hover:border-red-500 focus:outline-none`}
                    >
                        Newest
                    </button>
                    <button
                        onClick={() => setSortOrder('asc')}
                        className={`px-3 py-1 text-sm rounded-full border-2 ${sortOrder === 'asc' ? 'bg-red-500 border-red-500 text-white' : 'bg-gray-700 border-gray-500 text-white'} hover:bg-red-600 hover:border-red-500 focus:outline-none`}
                    >
                        Oldest
                    </button>
                </div>

                {/* Tag selection buttons */}
                <div className="flex justify-center gap-2 px-2 mb-6 grid grid-cols-5">
                    {availableTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            className={`px-3 py-1 rounded-full border-2 text-sm ${selectedTags.includes(tag)
                                ? 'bg-red-500 border-red-500 text-white'
                                : 'bg-gray-700 border-gray-500 text-white'
                                } hover:bg-red-600 hover:border-red-500 focus:outline-none`}
                        >
                            {tag}
                        </button>
                    ))}
                    <button
                        onClick={clearTags}
                        className="px-3 py-1 text-sm rounded-full border-2 bg-red-300 text-red-800 border-red-800"
                    >
                        Clear Tags
                    </button>
                </div>

                {messages && messages.map(msg => <BlogPostSingle key={msg.id} message={msg} />)}
                <div className="py-2">

                </div>
            </div>
        </div>
    );
}

function BlogPostSingle(props) {
    const { author, body, dateCreated, lastEdit, title } = props.message;

    // Format timestamps if needed
    const formatDate = (date) => {
        return new Date(date.seconds * 1000).toLocaleString();
    };

    return (
        <div className="bg-white shadow-md rounded-lg px-6 pt-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: title }}></h2>
            <h3 className="text-gray-500 px-2 pt-4 text-sm">Author: {author}</h3>
            <p className="text-gray-500 px-2 pb-4 text-sm">Written: {formatDate(dateCreated)}</p>
            <div className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: body }}></div>
            <p className="text-gray-500 pb-8 text-sm">Edited: {formatDate(lastEdit)}</p>
        </div>
    );
}