import Image from 'next/image'
import randomColor from 'randomcolor'

export default function Photo({ post }) {
    // return <div className="w-full square bg-center bg-cover" style={{ backgroundImage: `url("${post.source_url}")` }} />

    return (
        <>
            <div className="group relative w-full square object-cover border-2 border-white bg-white">
                <div className="group-hover:opacity-90 opacity-0 absolute inset-0 z-10 p-6 bg-black">
                    <p className="text-sm text-white bg-transparent">{post.caption}</p>
                </div>
                <div className="bg-gray-100 absolute inset-0 animate-pulse" />
                <img className="object-cover w-full h-full absolute" src={post.media_url} alt="" />
            </div>
        </>
    )
}
