import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'iconSvgHtml'
})
export class IconSvgHtmlPipe implements PipeTransform {
    constructor(
        private _iconSvgHtml: DomSanitizer
    ) {}

  transform(value: string, args?: any): SafeHtml {
    return this._iconSvgHtml.bypassSecurityTrustHtml(value);
  }

}
