import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-rss-feed',
  templateUrl: './rss-feed.component.html',
  styleUrls: ['./rss-feed.component.css']
})
export class RssFeedComponent implements OnInit {
  rssFeedItems: any;
  private newsApiUrl = environment.newsApiUrl;
  private apiTheNewsAPI = environment.apiTheNewsAPI;
  constructor(
    private http: HttpClient) { }

  ngOnInit(): void {
    // hit the rss feed api
    // get the data
    // display the data
    this.getFeedData();
    console.log(this.rssFeedItems);
  }

  getFeedData() {  
    this.http.get<any>(`${this.newsApiUrl}&api_token=${this.apiTheNewsAPI}`).subscribe((response: any) => {
      this.rssFeedItems = Array.isArray(response.data) ? response.data : [];
    });
  }

}
