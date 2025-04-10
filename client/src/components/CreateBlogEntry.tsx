import './css/CreateBlogEntry.css'
import axios from "axios";

export const CreateBlogEntry = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);

        const formValues = Object.fromEntries(data.entries());
        axios.post('http://localhost:8080/blogEntry', formValues)
    };

    return (
        <div className="createBlogEntryRoot">
            <h3 className="createBlogEntryHeader">
                Neuen Blog-Eintrag erstellen
            </h3>
            <form className="createBlogEntryForm" onSubmit={handleSubmit}>
                <label htmlFor="titel" className="blogEntryFormLabel">Titel</label>
                <input type="text" id="titel" name="titel" placeholder="Titel"/>
                <br/>
                <label htmlFor="titel" className="blogEntryFormLabel">Kategorie</label>
                <br/>
                <div className="blogEntryCategorySelector">
                    <input type="radio" id="html" name="fav_language" value="HTML"/>
                    <label htmlFor="html">HTML</label><br/>
                    <input type="radio" id="css" name="fav_language" value="CSS"/>
                    <label htmlFor="css">CSS</label><br/>
                    <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                    <label htmlFor="javascript">JavaScript</label>
                </div>
                <label htmlFor="beschreibung" className="blogEntryFormLabel">Beschreibung</label>
                <input type="text" id="beschreibung" name="beschreibung" placeholder="Beschreibung"/>
                <label htmlFor="text" className="blogEntryFormLabel">Text</label>
                <input type="text" id="text" name="text" placeholder="Text"/>
                <input type="submit" value="Erstellen" />
            </form>
        </div>
    )
}

