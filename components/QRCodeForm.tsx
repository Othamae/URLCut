'use client'
import Form from './Form'
import QR from './QR'
const QRCodeForm = () => {
    return (
        <Form label='Enter your QR Code destination' input='longURL' type='QR'>
            <QR />
        </Form>
    )
}

export default QRCodeForm
