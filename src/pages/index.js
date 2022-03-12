import Leauges from '../components/leauges/Leauges';
import Preview from '../components/preview/Preview';
import Layout from '../components/layout/Layout';
import Testimonials from '../components/testimonials/Testimonials';

export default function Home() {
  return (
    <Layout>
      <Preview />
      <Leauges />
      <Testimonials />
    </Layout>
  );
}
