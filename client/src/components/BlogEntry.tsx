import './css/BlogEntry.css'

export interface BlogEntryInterface {
    id?: number
    name: string
    description: string
    text: string
}

export const BlogEntry = ({name, description, text}: BlogEntryInterface ) => {

    return (
        <div className="blogCard">
            <h1 className="blogHeader">{name}</h1>
            <h5>{description}</h5>
            <p className="entryText">{text}</p>
        </div>
    )
}

