import useSWR, { useSWRInfinite } from 'swr'
import axios from 'axios'
import { useEffect } from 'react'

const fetcher = (url) => axios.get(`http://localhost:3002/api/v1${url}`).then((res) => res.data)

export default function useIG(id, { initialData }) {
    const getKey = (pageIndex, previousPageData) => {
        if (previousPageData && previousPageData.data.length <= 0) return null
        if (pageIndex === 0) return `/${id}/posts`
        return `/${id}/posts/after/${previousPageData.paging.cursors.after}`
    }

    const hook = useSWRInfinite(getKey, fetcher, {
        initialData
    })

    useEffect(() => {
        console.log(hook.data)
    }, [hook])

    const isFullyLoaded = hook.data ? hook.data.some((page) => page.data.length <= 0) : false

    return { ...hook, isFullyLoaded }
}
