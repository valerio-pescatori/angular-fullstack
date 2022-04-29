import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  imagesSrc: String[] = [];
  texts: String[] = [];

  constructor() {}

  ngOnInit(): void {}
}
