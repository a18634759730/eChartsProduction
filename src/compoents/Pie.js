import React, { useState, useEffect } from 'react';
import Echart from 'echarts';

export default props => {
	useEffect(() => {
		//1.实列echarts
		let myChart = Echart.init(document.querySelector('#mian'))
		//2.组装数据
		let option = {
			angleAxis: {
				type: 'category',
				data: ['其他资产', '房产', '交通运输工具', '土地使用权', '设备'],
				startAngle:125,
				axisTick:false,
			},
			radiusAxis: {
        max: 12,
				interval: 2,
				axisLabel:false,
				axisTick:false
			},
			polar: {
				tooltip:false,
				borderColor:'#ccc'
			},
			color:['#45ADE6','#F78522'],
			series: [
				{
					type: 'bar',
					data: [11, 12, 11, 0, 0],
					coordinateSystem: 'polar',
					name: 'A',
					stack: 'a',
					animation:false
					
				},
				{
					type: 'bar',
					data: [0, 0, 0, 6, 10],
					coordinateSystem: 'polar',
					name: 'B',
					stack: 'a',
					animation:false
				}
			]
		};
		//3.更新echart
		myChart.setOption(option)
	}, [])
	return (
		<div className="Pie_border">
			<div id="mian" className="echart_border"></div>
		</div>
	)
}



