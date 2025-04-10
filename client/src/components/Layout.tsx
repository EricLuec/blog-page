import {BlogEntryList} from "./BlogEntryList.tsx";
import './css/Layout.css';
import {CreateBlogEntry} from "./CreateBlogEntry.tsx";

export const Layout =()=> {
    return (
        <div className="layoutRoot">
            <div className="navLayout">
                <h1 className="layoutH1">BlogPage</h1>
                <CreateBlogEntry />
            </div>
            <div className="layoutContent">
                <div className="navBar">
                    <h2>nav</h2>
                </div>
                <BlogEntryList />
            </div>
        </div>
    )
}

