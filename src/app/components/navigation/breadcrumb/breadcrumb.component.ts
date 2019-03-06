import { Component, OnInit, Input, TemplateRef, InjectableDecorator, Injector, NgZone, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { Params, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators'; 

export const ROUTE_DATA_BREADCRUMB = 'breadcrumb';
export interface BreadcrumbOption {
    label: string;
    params: Params;
    url: string;
}
@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
    @Input() autoGenerate = false;
    @Input() separator: string | TemplateRef<void> = '/';
    breadcrumbs: BreadcrumbOption[] = [];
    private destroy$ = new Subject<void>();

    constructor(private injector: Injector, private ngZone: NgZone, private cd: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2) {
        renderer.addClass(elementRef.nativeElement, 'breadcrumb');
    }
    ngOnInit() {
      if(this.autoGenerate) {
        try {
          
          const activatedRoute = this.injector.get(ActivatedRoute);
          const router = this.injector.get(Router);
          router.events.pipe(filter(e => e instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe(() => {
            this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root)
          });
        } catch (error) {
          throw new Error('You should import RouterModule if you want to use AutoGenerate');
        }
      }
    }

    ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.destroy$.next();
      this.destroy$.complete();
    }

    navigate(url: string, e: MouseEvent): void {
      e.preventDefault();
      this.ngZone.run(() => this.injector.get(Router).navigateByUrl(url).then()).then();
    }

    private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbOption[] = []): BreadcrumbOption[] {
      const children: ActivatedRoute[] = route.children;
      if( children.length === 0) {
        return breadcrumbs;
      }
      for (const child of children) {
        if(child.outlet === 'primary') {
          const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
          const nextUrl = routeURL ? (url + `/${routeURL}`) : url + '';
          if(child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
            const breadcrumb: BreadcrumbOption = {
              label: child.snapshot.data[ROUTE_DATA_BREADCRUMB] || 'Breadcrumb',
              params: child.snapshot.params,
              url: nextUrl
            }
            breadcrumbs.push(breadcrumb);
          }
          return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
        }
      }
    }

}
