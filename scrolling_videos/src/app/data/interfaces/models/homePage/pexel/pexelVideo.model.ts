import { PexelUserVideo } from './pexelUserVideo.model';
import { PexelVideoFile } from './pexelVideoFile.model';
import { PexelVideoPicture } from './pexelVideoPicture.model';

export interface PexelVideo {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  user: PexelUserVideo;
  video_files: PexelVideoFile[];
  video_pictures: PexelVideoPicture[];
}
