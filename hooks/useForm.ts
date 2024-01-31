import { createShortURL, getQRCode } from "@/actions/actions"
import { useState } from "react"

export const useForm = ({ type }: { type: 'QR' | 'urlCut' }) => {
    const [urlCut, setUrlCut] = useState('')
    const [error, setError] = useState('')
    const onSubmit = async (formData: FormData) => {
        const longURL = formData.get('longURL') as string
        if (!longURL) {
            setError('Please insert a long URL')
            return
        }
        if (type === 'urlCut') {
            const link = await createShortURL(longURL)
            setUrlCut(link)
        }
        if (type === 'QR') {
            const base64String = await getQRCode(longURL)
            const dataUrl = `data:image/png;base64,${base64String}`
            setUrlCut(dataUrl)
        }
        setError('')
    }
    return {
        urlCut, error, onSubmit
    }
}