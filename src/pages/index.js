import Leauges from '../components/leauges/Leauges';
import HomePreview from '../components/home-preview/HomePreview';
import Layout from '../components/layout/Layout';
import Testimonials from '../components/testimonials/Testimonials';

export default function Home() {
  return (
    <Layout>
      <HomePreview />
      <Leauges />
      <Testimonials />
    </Layout>
  );
}
