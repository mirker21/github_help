"use client";
import { useState } from "react";

export default function Modal({isVisible, modalType}) {

        if (modalType === "entry") {
            return (
                <div>
                    <h2>Delete {entry.title}</h2>
                    <h3>Are you sure?</h3>
                    <div>
                        <Link>Yes</Link>
                        <Link href={`/entries/${entry.id}`}>No</Link>
                    </div>
                </div>
            )
        } else if (modalType === "folder") {
            return (
                <div>
                    <h2>Delete {folder.title}</h2>
                    <h3>Are you sure?</h3>
                    <div>
                        <Link>Yes</Link>
                        <Link href={`/folders/${folder.id}`}>No</Link>
                    </div>
                </div>
            )
        } else if (modalType === "media") {
            return (
                <div>
                    <h2>Delete {media.title}</h2>
                    <h3>Are you sure?</h3>
                    <div>
                        <Link>Yes</Link>
                        <Link href={`/gallery/${media.id}`}>No</Link>
                    </div>
                </div>
            )
        } else if (modalType === "logout") {
            return (
                <div>
                    <h2>Log Out</h2>
                    <h3>Are you sure?</h3>
                    <div>
                        <Link>Yes</Link>
                        <Link href={`/account`}>No</Link>
                    </div>
                </div>
            )
        }
}