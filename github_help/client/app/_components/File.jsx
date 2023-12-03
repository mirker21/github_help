import ReactPlayer from 'react-player'

import Link from 'next/link';

import folderSvg from '../../public/folder.svg'
import entrySvg from '../../public/entry.svg'

import Image from 'next/image';
import starImg from '../../public/star-img.svg';

export default function File({data}) {
    let mainUrlStr;

    if (data.type === 'folder') {
        mainUrlStr = 'folders';
    } else if (data.type === 'entry') {
        mainUrlStr = 'folders';
    } else if (data.type === 'media') {
        mainUrlStr = 'gallery'
    }

    let mediaSrc;

    if (data.type === 'folder') {
        mediaSrc = folderSvg;
    } else if (data.type === 'entry') {
        mediaSrc = entrySvg;
    } else if (data.type === 'media') {
        mediaSrc = data.data.media_path;
    }     

    let mediaAlt;

    if (data.type === 'folder') {
        mediaAlt = 'Folder';
    } else if (data.type === 'entry') {
        mediaAlt = 'Entry';
    } else if (data.type === 'media') {
        mediaAlt = data.data.media_name;
    }
    
    let fileTitle;

    if (data.type === 'folder') {
        fileTitle = data.data.folder_name;
    } else if (data.type === 'entry') {
        fileTitle = data.data.entry_name;
    } else if (data.type === 'media') {
        fileTitle = data.data.media_name;
    }
    
    let isVideo = false;

    if (data.type === 'folder') {
        isVideo = false;
    } else if (data.type === 'entry') {
        isVideo = false;
    } else if (data.type === 'media' && data.data.media_type === 'video') {
        isVideo = true;
    }

    return (
        <section className="file" title={fileTitle}>
            <Link href={`/${mainUrlStr}/${data.data.id}`}>
                
                {
                    isVideo 
                    ?
                    <ReactPlayer
                        className="file-media-preview"
                        url={mediaSrc}
                        playing={false}
                        width={data.type !== 'media' ? 60 : 96}
                        height={data.type !== 'media' ? 60 : 85.5}
                    />
                    :
                    <div className={data.type !== 'media' ? "file-logo-svg" : "file-media-preview"} >
                        <Image
                        src={mediaSrc} 
                        alt={mediaAlt}
                        width={data.type !== 'media' ? 60 : 96}
                        height={data.type !== 'media' ? 60 : 85.5}
                        />
                    </div>
                }

            </Link>

            <div className="file-title-star-container">
                <p>{fileTitle}</p>
                {
                    data.favorite && 
                    <Image 
                        className="star-img"
                        src={starImg}
                        alt="&#9733;" 
                        width={20}
                        height={20} 
                    />
                }
            </div>
            
        </section>
    )
}