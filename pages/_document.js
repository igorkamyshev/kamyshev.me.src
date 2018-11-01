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

                    <meta name="google-site-verification" content="rkMUHPzS1QzK63X9HLLeatYU3hmLQxxLBKDgjlYu_RI" />

                    <title>Igor Kamyshev | Personal Site</title>

                    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
                    <meta name="viewport" content="width=device-width" />

                    <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="/static/css/paper-kit.css" rel="stylesheet"/>
                    <link href="/static/css/template.css" rel="stylesheet" />
                    <link href="/static/css/custom.css" rel="stylesheet" />

                    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,300,700' rel='stylesheet' type='text/css' />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet" />
                    <link href="/static/css/nucleo-icons.css" rel="stylesheet" />

                    <link href="https://www.google-analytics.com" rel="preconnect" />

                    <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-117862348-1"></script>
                    <script defer src="/static/js/gtm.js"></script>
                </Head>
                <body>
            
                    <Main />

                    <div>
                        {/* Core JS Files */}
                        <script defer src="/static/js/jquery-3.2.1.min.js" type="text/javascript"></script>
                        <script defer src="/static/js/jquery-ui-1.12.1.custom.min.js" type="text/javascript"></script>
                        <script defer src="/static/js/popper.js" type="text/javascript"></script>
                        <script defer src="/static/js/bootstrap.min.js" type="text/javascript"></script>

                        <script defer src="/static/js/paper-kit.js?v=2.1.0"></script>
                    </div>

                    <NextScript />
                </body>
            </html>
        )
    }
}
