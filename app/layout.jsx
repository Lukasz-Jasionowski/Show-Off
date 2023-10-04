import '@styles/globals.css';

export const metadata = {
    title: 'Show-Off',
    description: 'Place where you can show off whatever you want.'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className="app">
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout