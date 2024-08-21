import { PexelVideo } from './pexelVideo.model';

export interface PexelVideoResponse {
  page: number;
  per_page: number;
  total_results: number;
  url: string;
  videos: PexelVideo[];
}
