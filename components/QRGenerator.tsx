import CardComponent from './CardComponent'
import QRCodeForm from './QRCodeForm'

const QRGenerator = () => {
    return (
        <CardComponent title="Create a QR Code" >
            <QRCodeForm />
        </CardComponent>
    )
}

export default QRGenerator
