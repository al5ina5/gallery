export default function Photo({ post }) {
    return <div className="w-full square bg-center bg-cover" style={{ backgroundImage: `url("${post.source_url}")` }} />
}
