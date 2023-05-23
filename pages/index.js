// components
import Layout from '../src/components/layout/Layout';
import {
  AboutHome,
  HeaderHome,
  StatsHome,
  WelcomeHome,
} from '../src/components/pages/homepage';
import {
  Artikel,
  Fasilitas,
  Hubungi,
  Kuota,
  Pendaftaran,
  Penerimaan,
  Program,
  Testimoni,
} from '../src/components/reusable';

export default function Home() {
  return (
    <Layout
      title='Yayasan Pendidikan Waskito'
      content='Sekolah Yayasan Pendidikan Waskito Tangerang Selatan'
    >
      {/* pages */}
      <HeaderHome />
      <StatsHome />
      <Pendaftaran />
      <WelcomeHome />
      <AboutHome />
      {/* reusable */}
      <Penerimaan />
      <Program />
      <Fasilitas />
      <Kuota />
      <Testimoni />
      <Artikel />
      <Hubungi />
    </Layout>
  );
}
