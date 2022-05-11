import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'front-end/app/http.service';
import { Category, Brand } from 'front-end/app/utils';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.scss'],
})
export class ListSectionComponent implements OnInit {
  /** Url for the api call */
  @Input() url: string;
  /** Title of the section */
  @Input() title: string;
  /** List of items to be displayed */
  items: Category[] | Brand[];

  /** Constructor with HttpService injection */
  constructor(private categoryService: HttpService<Category | Brand>) {}

  /**
   * Simply calls the api
   */
  ngOnInit(): void {
    this.categoryService
      .get(this.url)
      .subscribe((data: Category[] | Brand[]) => {
        this.items = data.sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase()
            ? -1
            : a.name.toLowerCase() == b.name.toLowerCase()
            ? 0
            : 1
        );
      });
  }
}
