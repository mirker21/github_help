import Link from 'next/link';

export default function Sidebar() {
    return (
        <nav id="sidebar">
            <div >Download Files...</div>
            <div >Print...</div>
            <Link href="/settings">Settings</Link>
            <div>Log Out</div>
        </nav>
    )
}