import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css'],
})
export class NotFoundPageComponent implements OnInit {
  currentYear = new Date().getFullYear();
  constructor() {}

  ngOnInit(): void {}
}
