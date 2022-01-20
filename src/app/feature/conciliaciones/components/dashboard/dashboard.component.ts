import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  option: EChartsOption = {
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 335,
            name: 'Direct Visit',
          },
          {
            value: 234,
            name: 'Union Ad',
          },
          {
            value: 1548,
            name: 'Search Engine',
          },
        ],
      },
    ],
  };

  barras: EChartsOption = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [26, 24, 18, 22, 23, 20, 27],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
