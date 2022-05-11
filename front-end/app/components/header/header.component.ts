import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  /** Url for the Dropdown component api call  */
  dropdownUrl: string;
  /** Boolean that controler wether the dropdown should show or not */
  dropdownIsActive: boolean = false;
  /** Array of elements in the bottom row */
  navElements: string[] = ['Novità', 'Abbigliamento', 'Scarpe', 'Sports'];

  ngOnInit(): void {
    this.dropdownUrl = 'api/getDropdown/0';
  }

  /** Activate/Deactivate dropdown and optionally updates {@link dropdownUrl}.
   * @param {boolean} state if true renders the dropdown.
   * @param {number} tab index of the hovered element
   */
  dropdownSetActive(state: boolean, tab?: number) {
    this.dropdownIsActive = state;
    if (tab != undefined) this.dropdownUrl = 'api/getDropdown/' + tab;
  }
}
