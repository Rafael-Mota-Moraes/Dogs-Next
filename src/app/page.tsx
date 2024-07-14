import Feed from '@/components/feed/feed';
import photosGet from '../actions/photos-get';

export default async function Home() {
  const { data } = await photosGet();

  return (
    <section className="container main-container">
      {data && <Feed photos={data} />}
    </section>
  );
}
