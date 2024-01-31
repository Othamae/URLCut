'use client'
import { getQRCode } from '@/actions/actions'
import { useState } from 'react'
import FormButton from './FormButton'
import { CardContent, CardFooter } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
const QRCodeForm = () => {
    const [qrCode, setQrCode] = useState('')
    const onSubmit = async (formData: FormData) => {
        const longUrl = formData.get('longURLtoQR') as string

        const base64String = await getQRCode(longUrl)

        const dataUrl = `data:image/png;base64,${base64String}`
        setQrCode(dataUrl)
    }
    return (
        <form action={onSubmit}>
            <CardContent>
                <div className="grid w-full items-center gap-8">
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="longURLtoQR" className="text-base">
                            Enter your QR Code destination
                        </Label>
                        <Input name="longURLtoQR" id="longURLtoQR" placeholder="Insert a long URL" />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-start gap-4 mt-4">
                <FormButton text="Generate QR!" />
                {
                    qrCode &&
                    (
                        <picture>
                            <img src={qrCode} alt="QR Code" />
                        </picture>
                    )
                }
            </CardFooter>
        </form>
    )
}

export default QRCodeForm
