

export const CreateBlogEntry = () => {

    return (
        <div className="createBlogEntryRoot">
            <h3 className="createBlogEntryHeader">
                Neuen Blog-Eintrag erstellen
            </h3>
            <form className="createBlogEntryForm">
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label htmlFor="html">HTML</label><br/>
                <input type="radio" id="css" name="fav_language" value="CSS"/>
                <label htmlFor="css">CSS</label><br/>
                <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                <label htmlFor="javascript">JavaScript</label>
            </form>
        </div>
    )
}

