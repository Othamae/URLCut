import { Copy, CopyCheck, LinkIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ToastAction } from './ui/toast'
import { useToast } from './ui/use-toast'

const UrlShorter = ({ shortURL }: { shortURL?: string }) => {
    const [copy, setCopy] = useState(false)
    const { toast } = useToast()
    const handleCopy = async () => {
        await navigator.clipboard.writeText(`https://${shortURL}`)
        setCopy(true)
        toast({
            description: "Link copied!",
            variant: "success",
            title: "Success!",
            action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
        })
    }
    return (
        shortURL && (
            <div className="flex h-10 w-full px-1 rounded-md border border-input bg-background md:px-3 py-2 md:text-xl ring-offset-background items-center ">
                <Link
                    href={`https://${shortURL}`}
                    target="_blank"
                    className="flex h-10 w-full px-1  md:px-3 py-2 md:text-xl ring-offset-background items-center hover:text-blue-600"
                >
                    <LinkIcon className="h-4 w-4 mr-2 md:block hidden " />
                    {shortURL}
                </Link>
                {
                    copy ?
                        <CopyCheck className="h-4 w-4 text-green-700 hover:cursor-pointer" onClick={handleCopy} />
                        :
                        <Copy className="h-4 w-4 hover:text-green-700/60 hover:cursor-pointer" onClick={handleCopy} />
                }
            </div>

        )
    )
}

export default UrlShorter