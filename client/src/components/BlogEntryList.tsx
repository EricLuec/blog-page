import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import {BlogEntry} from "./BlogEntry.tsx";

export const BlogEntryList = () => {
    const [blogEntries, setBlogEntries] = useState([]);

    const fetchBlogEntries = useCallback(async () => {
        const resp = await fetch("/api/blogEntries");
        const body = await resp.json();
        const { fetchedBlogEntries } = body;

        setBlogEntries(fetchedBlogEntries);
    }, [setBlogEntries]);

    useEffect(() => {
        fetchBlogEntries();
    }, [fetchBlogEntries]);

    function onDeleteSuccess() {
        fetchBlogEntries();
    }

    function onCreateSuccess(newBlogEntry) {
        setBlogEntries([...blogEntries, newBlogEntry]);
    }

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