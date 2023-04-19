import { FC } from 'react'

import { Head, Html, Main, NextScript } from 'next/document'

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="modals" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
