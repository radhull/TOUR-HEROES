import { Component, Input, OnInit, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';





@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    providers: [HeroService],
    animations: [
        trigger('heroState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(0.7)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(0.9)'
            })),
            transition('inactive => active', animate('300ms ease-in')),
            transition('active => inactive', animate('300ms ease-out'))
        ]),
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(500)
            ]),
            transition('* => void', [
                animate(500, style({ transform: 'translateX(100%)' }))
            ])
        ]),
        trigger('heroState2', [
            state('inactive', style({ transform: 'translateX(0) scale(1)' })),
            state('active', style({ transform: 'translateX(0) scale(1.1)' })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out')),
            transition('void => inactive', [
                style({ transform: 'translateX(-100%) scale(1)' }),
                animate(100)
            ]),
            transition('inactive => void', [
                animate(100, style({ transform: 'translateX(100%) scale(1)' }))
            ]),
            transition('void => active', [
                style({ transform: 'translateX(0) scale(0)' }),
                animate(200)
            ]),
            transition('active => void', [
                animate(200, style({ transform: 'translateX(0) scale(0)' }))
            ])
        ]),
        trigger('shrinkOut', [
            state('in', style({ height: '*' })),
            transition('* => void', [
                style({ height: '*' }),
                animate(500, style({ height: 0 }))
            ])
        ]),
        trigger('flyInOut2', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ]),
        trigger('flyInOut3', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                animate(300, keyframes([
                    style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                    style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                    style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                ]))
            ]),
            transition('* => void', [
                animate(300, keyframes([
                    style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                    style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                    style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                ]))
            ])
        ]),
        trigger('flyInOut4', [
            state('in', style({ width: 120, transform: 'translateX(0)', opacity: 1 })),
            transition('void => *', [
                style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
                group([
                    animate('1s 0.5s ease', style({
                        transform: 'translateX(0)',
                        width: 120
                    })),
                    animate('1s ease', style({
                        opacity: 1
                    }))
                ])
            ]),
            transition('* => void', [
                group([
                    animate('1s ease', style({
                        transform: 'translateX(50px)',
                        width: 10
                    })),
                    animate('1s 0.5s ease', style({
                        opacity: 0
                    }))
                ])
            ])
        ])
    ]
}
)
export class DashBoardComponent implements OnInit {

    heroes: Hero[] = [];
    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

}
