import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({
  title = 'waskito',
  children,
  content = 'yayasan pendidikan waskito',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={content} key={title} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      {/* navbar */}
      <Navbar />

      {/* children */}
      {children}

      {/* footer */}
      <Footer />
    </div>
  );
}
