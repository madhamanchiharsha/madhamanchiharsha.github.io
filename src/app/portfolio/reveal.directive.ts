import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  inject,
} from '@angular/core';

/**
 * Adds the `is-in` class the first time the host element scrolls into view,
 * driving the global [data-reveal] entrance animation. An optional stagger
 * delay (ms) can be passed via the input. Respects prefers-reduced-motion by
 * revealing immediately. Falls back to visible when IntersectionObserver is
 * unavailable.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input('appReveal') delay = 0;

  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement as HTMLElement;
    this.renderer.setAttribute(node, 'data-reveal', '');
    if (this.delay) {
      this.renderer.setStyle(node, '--reveal-delay', `${this.delay}ms`);
    }

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(node, 'is-in');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(node, 'is-in');
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
