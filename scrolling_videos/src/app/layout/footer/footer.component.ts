import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentPage = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkCurrentPage();
  }

  checkCurrentPage() {
    let currentUrl = this.router.url;

    if (currentUrl.includes('home')) {
      this.currentPage = 'home';
    } else if (currentUrl.includes('search')) {
      this.currentPage = 'search';
    } else if (currentUrl.includes('about')) {
      this.currentPage = 'about';
    }
  }

  changePage(path: string) {
    this.currentPage = path;
    this.router.navigateByUrl(`/${path}`);
  }
}
