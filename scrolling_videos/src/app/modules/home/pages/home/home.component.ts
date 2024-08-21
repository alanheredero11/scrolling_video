import { Component } from '@angular/core';
import { PexelVideo } from 'src/app/data/interfaces/models/homePage/pexel/pexelVideo.model';
import { PexelVideoResponse } from 'src/app/data/interfaces/models/homePage/pexel/pexelVideoResponse.model';
import { VideoApiService } from 'src/app/data/services/api/videoAPIService/video-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  videosToShowArray: string[] = [];

  constructor(private videoApiService: VideoApiService) {}

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.videoApiService.getVideos(8).subscribe((data: PexelVideoResponse) => {
      if (data) {
        this.setVideoArray(data);
      }
    });
  }

  setVideoArray(data: PexelVideoResponse) {
    this.videosToShowArray = data?.videos?.map((elem: PexelVideo) => {
      return elem.video_files[0]?.link;
    });

    console.log('this.videos: ', this.videosToShowArray);
  }
}
