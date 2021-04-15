import { Button } from '@geist-ui/react'
import axios from 'axios'
import Photo from '../components/Photo'
import useIG from '../hooks/useIG'

export async function getServerSideProps() {
    const { data, headers } = await axios.get('https://ig-cms.vercel.app/api/v1/60780810fecb21000926d9ca/posts')

    return { props: { posts: data } }
}

export default function App({ posts }: any) {
    const { data: pages, setSize, size, isValidating, isFullyLoaded } = useIG('60780810fecb21000926d9ca', { initialData: [posts] })

    return (
        <div className="max-w-screen-2xl mx-auto py-12 md:py-24 space-y-8">
            <div className="px-6 flex flex-col text-center sm:text-left sm:flex-row">
                <div className="flex-1 mb-4 sm:mb-0">
                    <p className="text-5xl font-extrabold">Cesar Alsina</p>
                    <p className="text-2xl">Creative Photography. Naples, FL.</p>
                </div>

                <div className="text-xs uppercase space-x-2">
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/cesaralsina/">
                        Instagram
                    </a>
                    <a href="mailto:alsina@mac.com">Contact</a>
                    {/* <a href="">Facebook</a>
                    <a href="">Foundation</a> */}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">{pages && pages.map((page, index) => page.data.map((post) => <Photo post={post} />))}</div>

            <div className="flex items-center justify-center">
                <Button onClick={() => setSize((size) => size + 1)} loading={isValidating} disabled={isValidating || isFullyLoaded}>
                    Load more
                </Button>
            </div>

            <div className="text-center space-y-4">
                <img className="w-32 inline-block" src="/img/CAImagine_logo_black.png" alt="" />
                <p className="font-mono text-xs uppercase">&copy; {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}
