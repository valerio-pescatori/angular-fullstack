import { Component, HostListener, OnInit } from '@angular/core';
import { Image } from '../../utils';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor(private imageService: HttpService<Image>) {}
  /** Array of images to be displayed inside the carousel */
  images: Image[];
  /** Index of currently displayed image */
  shown: number = 0;
  /** Each image has its own bg color */
  colors: string[] = [
    '#8B56EE',
    '#5068EF',
    '#F39260',
    '#4C8419',
    '#D33A82',
    '#4C8419',
    '#8B56EE',
  ];
  /** Interval object that increments {@link shown} index */
  interval: NodeJS.Timeout | null;
  /** boolean that toggles to true when api response is received  */
  loaded = false;

  /** Calls api to get images, creates the interval and set {@link loaded} to true*/
  ngOnInit(): void {
    this.imageService.get('api/landingImages').subscribe((data: Image[]) => {
      this.images = data;
      this.createInterval();
      this.loaded = true;
    });
  }

  /** Handles the click event on the left and right arrow of the carousel
   * @param {boolean} inc if true increments {@link shown}, else it decrements it.
   */
  arrowClick(inc: boolean): void {
    this.destroyInterval();
    if (inc && this.shown < this.images.length - 1) this.shown++;
    else if (!inc && this.shown > 0) this.shown--;
  }

  /** Creates the interval and assigns it to the {@link interval} variable. */
  createInterval(): void {
    this.interval = setInterval(() => {
      if (this.shown === this.images.length - 1) this.shown = 0;
      else this.shown++;
    }, 3000);
  }

  /** Destroys the {@link interval} interval by clearing and setting it to null. */
  destroyInterval(): void {
    if (this.interval != null) clearInterval(this.interval);
    this.interval = null;
  }

  /** Toggle the {@link interval} interval: if it's null it calls {@link createInterval()} else it calls {@link destroyInterval()}.*/
  toggleInterval(): void {
    if (this.interval) this.destroyInterval();
    else this.createInterval();
  }
}
