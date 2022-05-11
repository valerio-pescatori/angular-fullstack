export interface Image {
  path: string;
  pathSm: string;
  text: string;
  icons: [string];
}

export interface Category {
  name: string;
}

export interface Brand {
  name: string;
}

export interface DropdownElement {
  text: string;
  type: 'LINKED_HEADER' | 'HEADER' | 'ICON' | 'TEXT';
}

export interface DropdownHeader extends DropdownElement {
  type: 'HEADER';
}

export interface DropdownText extends DropdownElement {
  type: 'TEXT';
  href: string;
}

export interface DropdownLinkedHeader extends DropdownElement {
  type: 'LINKED_HEADER';
  href: string;
}

export interface DropdownIcon extends DropdownElement {
  type: 'ICON';
  icon: string;
  href: string;
}
