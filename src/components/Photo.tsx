import Image from 'next/image'

export default function Photo({ post }) {
    // return <div className="w-full square bg-center bg-cover" style={{ backgroundImage: `url("${post.source_url}")` }} />

    return (
        <div className="relative w-full square object-cover border-2 border-white bg-white">
            <div className="bg-gray-100 absolute inset-0 animate-pulse" />
            <Image className="object-cover" layout="fill" src={post.source_url} />
        </div>
    )
}
