import {Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCache]'
})
export class TemplateCacheDirective<T = unknown> {
  private _context: CacheContext<T> = new CacheContext<T>();
  private _thenTemplateRef: TemplateRef<CacheContext<T>>|null = null;
  private _elseTemplateRef: TemplateRef<CacheContext<T>>|null = null;
  private _thenViewRef: EmbeddedViewRef<CacheContext<T>>|null = null;
  private _elseViewRef: EmbeddedViewRef<CacheContext<T>>|null = null;

  @Input()
  set appCache(condition: T) {
    this._context.$implicit = condition;
    this._updateView();
  }

  @Input()
  set appCacheThen(templateRef: TemplateRef<CacheContext<T>>|null) {
    assertTemplate('appCacheThen', templateRef);
    this._thenTemplateRef = templateRef;
    this._thenViewRef = null;  // clear previous view if any.
    this._updateView();
  }

  @Input()
  set appCacheElse(templateRef: TemplateRef<CacheContext<T>>|null) {
    assertTemplate('appCacheElse', templateRef);
    this._elseTemplateRef = templateRef;
    this._elseViewRef = null;  // clear previous view if any.
    this._updateView();
  }

  private _updateView() {
    if (this._context.$implicit) {
      if (!this._thenViewRef) {
        this._viewContainer.detach()
        // this._elseViewRef = null;
        if (this._thenTemplateRef) {
          this._thenViewRef =
            this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
        }
      } else  {
        this._viewContainer.detach()
        this._viewContainer.insert(this._thenViewRef, 0)
      }
    } else {
      if (!this._elseViewRef) {
        this._viewContainer.detach()
        if (this._elseTemplateRef) {
          this._elseViewRef =
            this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
        }
      } else  {
        this._viewContainer.detach()
        this._viewContainer.insert(this._elseViewRef)
      }
    }
  }
  constructor(templateRef: TemplateRef<any>,
              private readonly _viewContainer: ViewContainerRef) {
    this._thenTemplateRef = templateRef
  }

}

export class CacheContext<T = unknown> {
  public $implicit: T = null!;
}

function assertTemplate(property: string, templateRef: TemplateRef<any>|null): void {
  const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
  if (!isTemplateRefOrNull) {
    throw new Error(`${property} must be a TemplateRef.`);
  }
}

