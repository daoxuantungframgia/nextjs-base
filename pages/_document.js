import Document, { Head, Main, NextScript } from 'next/document'

/**
 * 
 * đây là chỗ xử lý mấy cái dùng chung này
 * à thế thằng cu document này sẽ dùng để handle tất cả nhưng cái gì gọi là chung nhất nhá
 * có layout dùng cho toàn bộ page ta sẽ đặt ở đây
 */
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='/_next/static/style.css' />
          <link rel='stylesheet' href='/static/bootstrap.min.css' />
          <link rel='stylesheet' href='/static/bootstrap-theme.min.css'/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}