import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Echarts from 'native-echarts'; 

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
const data = {};
export default class App extends Component<Props> {
  static defaultProps = {
    height: 115,
    width: 350,
  };
  render() {
    const option = {
      title: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
          crossStyle: {
            color: 'rgba(90, 170, 250, 0.5)',
          },
        },
      },
      legend: {
        data: ['人数'],
        color: '#5AAAFA',
      },
      color: ['#5AAAFA'],
      textStyle: {
        fontSize: 10,
        color: '#152934',
        lineHeight: 24,
      },
      grid: {
        // 调整上下左右距离
        left: 60,
        bottom: 80,
      },
      xAxis: [
        {
          splitLine: {show: false},
          axisLine: {
            lineStyle: {width: 0},
          },
          axisLabel: {
            color: '#5A6872',
            fontSize: 11,
            interval: 0,
            rotate: 45,
          },
          axisTick: {show: false},
          boundaryGap: false,
          data: [
            'day1',
            'day2',
            'day3',
            'day4',
            'day5',
            'day6',
            'day7',
            'day8',
            'day9',
            'day10',
          ],
        },
      ],
      yAxis: [
        {
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dotted',
              color: 'rgba(155, 155, 155, 0.5)',
            },
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: '#5A6872',
            fontSize: 11,
          },
          axisTick: {show: false},
          type: 'value',
        },
      ],
      series: [
        {
          name: '人数',
          type: 'line',
          smooth: 'true',
          itemStyle: {normal: {areaStyle: {type: 'default', opacity: 0.1}}},
          data: [
            15000,
            20000,
            36000,
            10000,
            15000,
            20000,
            15000,
            20000,
            36000,
            10000,
          ],
        },
      ],
      lineStyle: {normal: {color: '#5AAAFA', width: 1}},
      areaStyle: {normal: {color: '#5AAAFA', opacity: 0.5}},
      dataZoom: [
        {
          //数据放大滑动
          type: 'slider',
          show: true,
          handleSize: 2,
          height: '15px',
          start: 50, //调整可见百分比
          end: 100,
        },
        {
          type: 'inside',
          start: 40,
          end: 100,
        },
        {
          type: 'slider',
          show: false,
          yAxisIndex: 0,
          filterMode: 'empty',
          width: 3,
          height: '70%',
          handleSize: 2,
          showDataShadow: false,
          left: '93%',
        },
      ],
    };
    return <Echarts option={option} height={300} />;
  }
}
