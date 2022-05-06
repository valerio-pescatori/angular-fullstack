import { Component, HostListener, OnInit } from '@angular/core';
import { CarouselService } from './carousel.service';
import { Image } from './utils';
import { debounce } from 'front-end/app/decorators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor(private carouselService: CarouselService) {}
  breakpoint: string;
  images: Image[];
  shown: number = 0;
  colors: string[] = [
    '#8B56EE',
    '#5068EF',
    '#F39260',
    '#4C8419',
    '#D33A82',
    '#4C8419',
    '#8B56EE',
  ];
  interval: NodeJS.Timeout | null;
  loaded = false;

  private getBreakpoint(bp: number) {
    if (bp < 576) return 'xsm';
    if (bp < 768) return 'sm';
    if (bp < 992) return 'md';
    if (bp < 1200) return 'lg';
    if (bp < 1400) return 'xl';
    return 'xxl';
  }

  ngOnInit(): void {
    this.breakpoint = this.getBreakpoint(window.innerWidth);
    this.carouselService.getImages().subscribe((data: Image[]) => {
      this.images = data;
      this.createInterval();
      this.loaded = true;
    });
  }

  onClick(inc: boolean): void {
    this.destroyInterval();
    if (inc && this.shown < this.images.length - 1) this.shown++;
    else if (!inc && this.shown > 0) this.shown--;
  }

  createInterval(): void {
    this.interval = setInterval(() => {
      if (this.shown === this.images.length - 1) this.shown = 0;
      else this.shown++;
    }, 3000);
  }

  destroyInterval(): void {
    if (this.interval != null) clearInterval(this.interval);
    this.interval = null;
  }

  toggleInterval(): void {
    if (this.interval) this.destroyInterval();
    else this.createInterval();
  }

  @HostListener('window:resize', ['$event'])
  @debounce()
  onResize(event: Event) {
    const target = event.target as Window;
    this.breakpoint = this.getBreakpoint(target.innerWidth);
  }
}
