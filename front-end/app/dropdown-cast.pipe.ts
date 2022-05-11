import { PipeTransform, Pipe } from '@angular/core';
import { DropdownElement } from './utils';

@Pipe({ name: 'as' })
export class DropdownCastPipe implements PipeTransform {
  transform<T extends DropdownElement>(value: DropdownElement, _type: T): T {
    return value as T;
  }
}
