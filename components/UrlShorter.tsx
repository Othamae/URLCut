import { LinkIcon } from 'lucide-react'
import Link from 'next/link'

const UrlShorter = ({ shortURL }: { shortURL?: string }) => {
    return (
        shortURL &&
        <Link
            href={shortURL}
            target="_blank"
            className="flex h-10 w-full px-1 rounded-md border border-input bg-background md:px-3 py-2 md:text-xl ring-offset-background items-center hover:text-blue-600"
        >
            <LinkIcon className="h-4 w-4 mr-2 md:block hidden " />
            {shortURL}
        </Link>
    )
}

export default UrlShorter