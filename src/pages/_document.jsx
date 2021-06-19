import Document, { Html, Head, Main, NextScript } from 'next/document'

class Container extends Document {
    render() {
        return (
            <Html>
                <Head lang='pt'>
                    <title>DynamoDB Front-End</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Container