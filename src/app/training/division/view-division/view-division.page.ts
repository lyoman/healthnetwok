import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { title } from 'process';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-division',
  templateUrl: './view-division.page.html',
  styleUrls: ['./view-division.page.scss'],
})
export class ViewDivisionPage implements OnInit {

  title = this.route.snapshot.paramMap.get('title');
  description = this.route.snapshot.paramMap.get('description');
  // url = this.route.snapshot.paramMap.get('url');
  url: any;

  constructor(
    private route: ActivatedRoute,
    private dom:DomSanitizer
  ) { 
    const url = this.dom.bypassSecurityTrustResourceUrl(this.route.snapshot.paramMap.get('url')); 
    this.url = url;
  }

  ngOnInit() {
    // console.log('my url', this.url);
    // this.dom.bypassSecurityTrustResourceUrl(this.url); 
  }
}
