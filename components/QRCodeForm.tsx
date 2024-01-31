'use client'
import { getQRCode } from '@/actions/actions'
import { ArrowBigRight } from 'lucide-react'
import { useState } from 'react'
import FormButton from './FormButton'
import InputError from './InputError'
import { CardContent, CardFooter } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
const QRCodeForm = () => {
    const [qrCode, setQrCode] = useState('')
    const [error, setError] = useState('')
    const onSubmit = async (formData: FormData) => {
        const longUrl = formData.get('longURLtoQR') as string
        if (!longUrl) {
            setError('Please insert a long URL')
            return
        }
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
                        {error && <InputError id='longURL' error={error} />}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row justify-start gap-8 md:gap-20 mt-2">
                <FormButton text="Generate QR!" />
                {
                    qrCode &&
                    (
                        <div className='flex gap-4 items-center align-middle'>
                            <p className='text-2xl italic font-semibold md:block hidden'>Save it and share it!</p>
                            <ArrowBigRight className='w-16 h-16 md:block hidden' />
                            <picture className=' w-[250px] h-[250px] aspect-square border'>

                                <img src={qrCode} alt="QR Code" />

                            </picture>
                        </div>

                    )
                }


            </CardFooter>
        </form>
    )
}

export default QRCodeForm
