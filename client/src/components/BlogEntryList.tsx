import { useState } from "react";
import { useEffect } from "react";
import {BlogEntry} from "./BlogEntry.tsx";
import axios from "axios";
import {BlogEntryInterface} from '../components/BlogEntry.tsx'

export const BlogEntryList = () => {
    const [blogEntries, setBlogEntries] = useState<BlogEntryInterface[]>([]);
    console.log("render BlogEntry")
    useEffect(() => {
        console.log("before fetch")
        axios.get("http://localhost:8080/blogEntries").then(response => {
            setBlogEntries(response.data);
            console.log(response.data)
        })
    }, []);

    return (
        <>
            <h3>To Do:</h3>
            <div className="todos">
                {blogEntries.map((blogEntry) => (
                    <BlogEntry key={blogEntry.id} name={blogEntry.name} description={blogEntry.description} />
                ))}
            </div>
        </>
    );
};