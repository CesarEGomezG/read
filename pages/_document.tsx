import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`body { margin: 0; }`}</style>
      </Html>
    )
  }
}

export default MyDocument