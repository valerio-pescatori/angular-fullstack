import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { HttpService } from '../../http.service';
import {
  DropdownElement,
  DropdownLinkedHeader,
  DropdownHeader,
  DropdownIcon,
  DropdownText,
  Dropdown,
  Picture,
} from '../../utils';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  /** URL for the api call, binded from parent component */
  @Input() url: string;
  /** Boolean that controls the rendering of the component */
  @Input() active: boolean;
  /** EventEmitter that allows two-way binding on {@linkcode active} variable. */
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  /** 2D array of DropdownElement */
  elements: DropdownElement[][] = [];
  /** Picture object that contains information about dropdown image link and text */
  picture: Picture;

  /** Dummy variable used for type casting */
  linkedHeader: DropdownLinkedHeader;
  /** Dummy variable used for type casting */
  header: DropdownHeader;
  /** Dummy variable used for type casting */
  icon: DropdownIcon;
  /** Dummy variable used for type casting */
  text: DropdownText;

  /** constructor with HttpService injection */
  constructor(private dropdownService: HttpService<Dropdown>) {}

  ngOnInit(): void {}

  /** Lifecycle hook that is called when data-bound propery changes,
   * in this case we only care about changes of the {@linkcode url} variable
   * @param {SimpleChanges} changes objects that contains both old and new value for each updated property */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.url) this.getDropdownElements();
  }

  /** Calls the api to get content for the dropdown */
  getDropdownElements(): void {
    this.dropdownService.getObj(this.url).subscribe((data: Dropdown) => {
      this.elements = data.array;
      this.picture = data.picture;
    });
  }

  /** Sets parent {@linkcode active} variable to {@linkcode state}.
   * @param {boolean} state value for the {@linkcode active} variable.
   */
  setActive(state: boolean) {
    this.activeChange.emit(state);
  }
}
