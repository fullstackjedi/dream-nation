import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                  (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/61606431157d100a41ab7464/1fhg8eom7';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                  })();
                `
            }}
          /> */}
          <script src="//code.tidio.co/sps8lc47uixgjf8h1t60ex7ex12ew9rv.js"></script>
        </Head>
        <body>
          <noscript>
            <iframe
              title="gtm"
              src="https://www.googletagmanager.com/ns.html?id=GTM-KTZDD7J"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
