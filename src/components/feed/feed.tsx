import { Photo } from '@/app/actions/photos-get';
import FeedPhotos from './feed-photos';

export default async function Feed({ photos }: { photos: Photo[] }) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
