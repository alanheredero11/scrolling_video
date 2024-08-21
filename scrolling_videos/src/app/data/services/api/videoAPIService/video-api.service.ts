import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PexelVideoResponse } from 'src/app/data/interfaces/models/homePage/pexel/pexelVideoResponse.model';

@Injectable({
  providedIn: 'root',
})
export class VideoApiService {
  pexelsApiKey: string =
    'oL0Jkq0PVdehNsuLFHtsrYhwyWF3qxxyB2VMVaKTkyByVPbFtxHpNefm';

  constructor(private http: HttpClient) {}

  getVideos(perPage: number): Observable<PexelVideoResponse> {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.pexelsApiKey,
    });

    return this.http.get<PexelVideoResponse>(
      `https://api.pexels.com/videos/search?query=nature&per_page=${perPage}`,
      {
        headers,
      }
    );
  }
}
