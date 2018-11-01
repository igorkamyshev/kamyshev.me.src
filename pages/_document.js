import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'


export default class QeepDocument extends Document {

    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage()
        const styles = flush()
        return { html, head, errorHtml, chunks, styles }
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    
                    <link rel="icon" type="image/png" href="/static/img/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/static/img/apple-icon.png" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

                    <title>Igor Kamyshev | Personal Site</title>
                    <meta name="description" content="Igor Kamyshev's presonal site"></meta>

                    <meta name="viewport" content="width=device-width" />

                    <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="/static/css/paper-kit.css" rel="stylesheet"/>
                    <link href="/static/css/template.css" rel="stylesheet" />
                    <link href="/static/css/custom.css" rel="stylesheet" />

                    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,300,700' rel='stylesheet' type='text/css' />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet" />

                    <meta name="google-site-verification" content="rkMUHPzS1QzK63X9HLLeatYU3hmLQxxLBKDgjlYu_RI" />
                    <link href="https://www.google-analytics.com" rel="preconnect" />
                    <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-117862348-1"></script>
                    <script defer src="/static/js/gtm.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
