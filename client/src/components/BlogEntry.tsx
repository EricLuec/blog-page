import '../App.css'

interface BlogEntry {
    id?: number
    name: string
    description: string
}

export const BlogEntry = ({name, description}: BlogEntry ) => {

    return (
        <div>
            {name}
            {description}
        </div>
    )
}

