import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-ardemo',
  templateUrl: './ardemo.page.html',
  styleUrls: ['./ardemo.page.scss'],
})
export class ArdemoPage implements OnInit {
  trustedURL;

  constructor(private sanitize: DomSanitizer) {
  }

  ngOnInit() {
    this.trustedURL = this.sanitize.bypassSecurityTrustUrl('assets/ar-html/ar-demo.html');
  }

}
