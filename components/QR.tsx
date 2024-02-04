import { useCopy } from '@/hooks/useCopy'
import { ArrowBigRight } from 'lucide-react'
import { ToastAction } from './ui/toast'

const QR = ({ shortURL: QRCode }: { shortURL?: string }) => {
    const toastAction = <ToastAction altText="Dismiss">Dismiss</ToastAction>
    const { handleCopy } = useCopy({ toastAction, type: 'QR' })
    return (
        QRCode &&
        <div className='flex gap-4 items-center align-middle'>
            <p className='text-2xl italic font-semibold md:block hidden'>Save it and share it!</p>
            <ArrowBigRight className='w-16 h-16 md:block hidden' />
            <picture className=' w-[250px] h-[250px] aspect-square border'>
                <img src={QRCode} alt="QR Code" onClick={handleCopy} className='cursor-pointer' />
            </picture>
        </div>
    )
}

export default QR