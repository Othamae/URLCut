import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link, QrCode } from 'lucide-react'
import LinkShortener from './LinkShortener'
import QRGenerator from './QRGenerator'
const TabsComponent = () => {
  return (
    <section className="flex flex-col items-center justify-center px-8 w-full">
      <Tabs defaultValue="Urlcorto" className="w-full">
        <TabsList className="grid grid-cols-2 ">
          <TabsTrigger value="Urlcorto">
            <Link className="w-4 h-4 mr-2" />
            <p>Url shortener</p>
          </TabsTrigger>
          <TabsTrigger value="QRcode">
            <QrCode className="w-4 h-4 mr-2" />
            <p>QR generator</p>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Urlcorto" className="w-full">
          <LinkShortener />
        </TabsContent>
        <TabsContent value="QRcode">
          <QRGenerator />
        </TabsContent>
      </Tabs>
    </section>

  )
}

export default TabsComponent