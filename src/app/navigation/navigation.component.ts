import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition(':enter', [ animate(300) ]),
      transition(':leave', [ animate(600) ]),
    ])
  ]
})
export class NavigationComponent implements OnInit {

  navigationDOM: HTMLElement
  navigationOffset: Number

  constructor(@Inject(DOCUMENT) document) {
    this.navigationDOM = document.getElementById('navigation')
  }

  ngOnInit() {
  }

  @HostListener('window:scroll')
  ngOnWindowScroll(e) {
    if (!this.navigationDOM) this.navigationDOM = document.getElementById('navigation')
    if (!this.navigationOffset) this.navigationOffset = this.navigationDOM.offsetParent.offsetTop

    if (window.pageYOffset > this.navigationOffset) {
      this.__addClass(this.navigationDOM.parentNode, "is-sticky")
    }
    if (window.pageYOffset <= this.navigationOffset) {
      this.__removeClass(this.navigationDOM.parentNode, /is-sticky/g)
    }
  }

  __addClass(to: HTMLElement, name: string) {
    if (to.classList.contains(name)) return
    to.className = to.className + " " + name
  }

  __removeClass(from: HTMLElement, exp: RegExp) {
    from.className = from.className.replace(exp, " ")
  }
}
