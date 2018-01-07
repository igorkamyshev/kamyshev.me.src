import Head from 'next/head'


export default ({ title, description, keywords, children }) =>
    <div>
        <Head>
            <title>{title ? `${title} | Igor Kamyshev` : 'Igor Kamyshev'}</title>

            {!!description && <meta name="description" content={description} />}
            {!!keywords && <meta name="keywords" content={keywords} />}
        </Head>

        <div className="wrapper">
            {children}
        </div>
    </div>
