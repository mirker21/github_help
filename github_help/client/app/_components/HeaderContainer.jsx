import Link from 'next/link'

export default function HeaderContainer() {
    return (
        <>
            <Link href={`/entries/${id}/edit`}>Edit</Link>
            <h1>{`${folders} ${`&gt;`} ${folder_name} ${`&gt;`} ${entry_name}`}</h1>
            // set up conditional, if you are in folders, disregard gt and folder_name, 
            // otherwise include the next gt and folder_name and so on.
        </>
    )
}