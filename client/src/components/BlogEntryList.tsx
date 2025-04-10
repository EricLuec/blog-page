import { useState } from "react";
import { useEffect } from "react";
import {BlogEntry} from "./BlogEntry.tsx";
import axios from "axios";
import {BlogEntryInterface} from './BlogEntry.tsx'
import './css/BlogEntryList.css'

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
        <div className="blogEntryListRoot">
            <div className="searchAndFilterOptions">
                <button className="newEntryButton">Neuen Beitrag erstellen</button>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className="blogEntries">
                {blogEntries.map((blogEntry) => (
                    <BlogEntry key={blogEntry.id} name={blogEntry.name} description={blogEntry.description} text={blogEntry.text} />
                ))}
            </div>
        </div>
    );
};