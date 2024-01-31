import TabsComponent from "./TabsComponent"


const Main = async () => {
    return (
        <main className="max-w-5xl flex items-center justify-center mx-auto flex-col pt-4">
            <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-2 font-bold">
                Make sharing links
                <span className="text-pink-500"> easy</span>
            </h1>
            <p className="mb-4 text-neutral-800/70 text-center">
                Create short links and QR Codes. Share them anywhere!
            </p>
            <TabsComponent />
        </main>
    )
}

export default Main
