import {BlogEntryList} from "./BlogEntryList.tsx";
import './css/Layout.css';

function Layout() {


    return (
        <div className="layoutRoot">
            <div className="navLayout">
                <h1 className="layoutH1">BlogPage</h1>
                <button className="newEntryButton" >Neuen Beitrag erstellen</button>
            </div>
            <BlogEntryList />
            <dialog >
                <h1>test</h1>
            </dialog>
        </div>
    )
}

export default Layout
