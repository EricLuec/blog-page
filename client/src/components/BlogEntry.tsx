import '../App.css'

export interface BlogEntryInterface {
    id?: number
    name: string
    description: string
}

export const BlogEntry = ({name, description}: BlogEntryInterface ) => {

    return (
        <div>
            {name}
            {description}
        </div>
    )
}

