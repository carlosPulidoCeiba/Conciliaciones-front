import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products = [
    {
      code: '2',
      name: '1',
      category: '1',
      quantity: '3'
    },
    {
      code: '2',
      name: '1',
      category: '1',
      quantity: '3'
    },
    {
      code: '2',
      name: '1',
      category: '1',
      quantity: '3'
    },
    {
      code: '2',
      name: '1',
      category: '1',
      quantity: '3'
    },
    {
      code: '2',
      name: '1',
      category: '1',
      quantity: '3'
    },{
      code: '2',
      name: '1',
      category: '1',
      quantity: '3'
    }
  ];

  chartOption: EChartsOption = {
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 335,
            name: 'Direct Visit'
          },
          {
            value: 234,
            name: 'Union Ad'
          },
          {
            value: 1548,
            name: 'Search Engine'
          }
        ],
        radius: '50%'
      }
    ]
  };

  title = 'conciliaciones-front';
}
