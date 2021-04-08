import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  products = [
    {
      id: 1,
      name: 'Iphone8',
      desc: 'Manufactured in 2017'
    },
    {
      id: 2,
      name: 'Iphone10',
      desc: 'Manufactured in 2018'
    },
    {
      id: 3,
      name: 'Iphone11',
      desc: 'Manufactured in 2019'
    },
    {
      id: 4,
      name: 'Iphone12',
      desc: 'Manufactured in 2020'
    }
  ];

  constructor() { }
}