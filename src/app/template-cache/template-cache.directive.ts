import {Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCache]'
})
export class TemplateCacheDirective<T = unknown> {

  constructor(templateRef: TemplateRef<any>,
              private readonly _viewContainer: ViewContainerRef) {
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

