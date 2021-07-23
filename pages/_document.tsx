import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ProveedorContextoGlobal } from "../contextoGlobal";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
            <ProveedorContextoGlobal>
              <Main />
              <NextScript />
            </ProveedorContextoGlobal>
        </body>
      </Html>
    )
  }
}

export default MyDocument