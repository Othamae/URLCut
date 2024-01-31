import { ArrowBigRight } from 'lucide-react'

const QR = ({ shortURL: QRCode }: { shortURL?: string }) => {
    return (
        QRCode &&
        (
            <div className='flex gap-4 items-center align-middle'>
                <p className='text-2xl italic font-semibold md:block hidden'>Save it and share it!</p>
                <ArrowBigRight className='w-16 h-16 md:block hidden' />
                <picture className=' w-[250px] h-[250px] aspect-square border'>
                    <img src={QRCode} alt="QR Code" />
                </picture>
            </div>

        )
    )
}

export default QR