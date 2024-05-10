import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const PieChartWithGradient = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current);

        const option = {
            tooltip: {
                trigger: 'item'
            },
            title: {
                show: false
            },
            legend: {
                show: false
            },
            series: [
                {
                    name: 'Distributions',
                    type: 'pie',
                    radius: ['40%', '60%'],
                    avoidLabelOverlap: false,
                    padAngle: 5,
                    itemStyle: {
                        borderRadius: 10,
                        normal: {
                            color: function (params) {
                                var colorList = [
                                    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#C1FF72' }, { offset: 1, color: '#1A2F00' }] },
                                    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#C1FF72' }, { offset: 1, color: '#64AFFA' }] },
                                    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#064A7A' }, { offset: 1, color: '#000000' }] },

                                ];
                                return colorList[params.dataIndex];
                            },
                        }
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },

                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 10, name: 'Uniswap Pool' },
                        { value: 20, name: 'Staking Emissions' },
                        { value: 70, name: 'Uniswap Pool' }
                    ]
                }
            ]
        };

        myChart.setOption(option);
    }, []);

    return (
        <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
    );
};

export default PieChartWithGradient;
