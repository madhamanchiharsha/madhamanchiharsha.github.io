import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  signal,
} from '@angular/core';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements AfterViewInit, OnDestroy {
  readonly links: NavLink[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'stack', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly active = signal<string>('top');
  readonly scrolled = signal<boolean>(false);
  readonly menuOpen = signal<boolean>(false);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    const ids = ['top', ...this.links.map((l) => l.id)];
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.active.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  go(id: string, event: Event): void {
    event.preventDefault();
    this.menuOpen.set(false);
    const el = document.getElementById(id);
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    el?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.menuOpen.set(false);
  }
}
