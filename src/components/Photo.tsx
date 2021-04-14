export default function Photo({ post }) {
    const image = post._embedded['wp:featuredmedia']['0'].source_url

    return <div className="w-full square bg-center bg-cover" style={{ backgroundImage: `url("${image}")` }} />
}
