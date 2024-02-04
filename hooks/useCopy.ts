import { ToastActionElement } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"


export const useCopy = ({ toastAction, type = 'text', text }: { toastAction: ToastActionElement | undefined, type: "QR" | "text", text?: string }) => {
    const { toast } = useToast()
    const [copy, setCopy] = useState(false)
    if (type === "QR") {
        const handleCopy = async () => {
            const img = document.querySelector('img')
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            if (!ctx || !img) return
            canvas.width = img.naturalWidth
            canvas.height = img.naturalHeight
            ctx.drawImage(img, 0, 0)
            canvas.toBlob(async (blob) => {
                if (blob) {
                    const data = [new ClipboardItem({ 'image/png': blob })]
                    await navigator.clipboard.write(data)
                    setCopy(true)
                    toast({
                        description: "Image copied!",
                        variant: "success",
                        title: "Success!",
                        action: toastAction,
                    })
                }
            })
        }
        return { handleCopy }
    }

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text || '')
        setCopy(true)
        toast({
            description: "Link copied!",
            variant: "success",
            title: "Success!",
            action: toastAction,
        })
    }
    return {
        handleCopy,
        copy
    }
}

