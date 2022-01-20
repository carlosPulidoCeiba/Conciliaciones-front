import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-inicio-filtro',
  templateUrl: './inicio-filtro.component.html',
  styleUrls: ['./inicio-filtro.component.scss']
})
export class InicioFiltroComponent implements OnInit {

  products = [
    {
      code: 1,
      name: 'prueba',
      category: 'prueba',
      quantity: 's'
    },
    {
      code: 1,
      name: 'prueba',
      category: 'prueba',
      quantity: 's'
    },
    {
      code: 1,
      name: 'prueba',
      category: 'prueba',
      quantity: 's'
    },
    {
      code: 1,
      name: 'prueba',
      category: 'prueba',
      quantity: 's'
    },
    {
      code: 1,
      name: 'prueba',
      category: 'prueba',
      quantity: 's'
    },
    {
      code: 1,
      name: 'prueba',
      category: 'prueba',
      quantity: 's'
    }
  ];

  @ViewChild('dt1') table: Table;

  constructor() { }

  ngOnInit(): void {
  }

}
