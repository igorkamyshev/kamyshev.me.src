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
                    <meta charset="utf-8" />
                    
                    <link rel="icon" type="image/png" href="/static/img/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/static/img/apple-icon.png" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

                    <title>Igor Kamyshev</title>

                    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
                    <meta name="viewport" content="width=device-width" />

                    <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="/static/css/paper-kit.css?v=2.1.0" rel="stylesheet"/>
                    <link href="/static/css/demo.css" rel="stylesheet" />

                    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,300,700' rel='stylesheet' type='text/css' />
                    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet" />
                    <link href="/static/css/nucleo-icons.css" rel="stylesheet" />
        </Head>
        <body>
            
            <Main />

            <div>
                {/* Core JS Files */}
                <script src="/static/js/jquery-3.2.1.min.js" type="text/javascript"></script>
                <script src="/static/js/jquery-ui-1.12.1.custom.min.js" type="text/javascript"></script>
                <script src="/static/js/popper.js" type="text/javascript"></script>
                <script src="/static/js/bootstrap.min.js" type="text/javascript"></script>

                {/* Switches */}
                <script src="/static/js/bootstrap-switch.min.js"></script>

                {/* Plugins for Slider */}
                <script src="/static/js/nouislider.js"></script>

                {/* Photoswipe files */}
                <script src="/static/js/photo_swipe/photoswipe.min.js"></script>
                <script src="/static/js/photo_swipe/photoswipe-ui-default.min.js"></script>
                <script src="/static/js/photo_swipe/init-gallery.js"></script>

                {/* Plugins for Select */}
                <script src="/static/js/bootstrap-select.js"></script>

                {/* for fileupload */}
                <script src="/static/js/jasny-bootstrap.min.js"></script>

                {/* Plugins for Tags */}
                <script src="/static/js/bootstrap-tagsinput.js"></script>

                {/* Plugins for DateTimePicker */}
                <script src="/static/js/moment.min.js"></script>
                <script src="/static/js/bootstrap-datetimepicker.min.js"></script>

                <script src="/static/js/paper-kit.js?v=2.1.0"></script>
            </div>

            <NextScript />
        </body>
      </html>
    )
  }
}