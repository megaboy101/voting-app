import React from 'react';
import { PieChart, Pie, Legend, Cell } from 'recharts';

const colors = [
	'#ff3333',
	'#0073e6',
	'#ffff00',
	'#8d1aff',
	'#8d1aff',
	'#fa8b49',
	'#fb62c2'
];

const Graph = ({ data }) => {
	let formatted Data = [];
	for (let option in data) {
		formattedData.push({name: option, value: data[option]});
	}

	let key = 0;
    return (
        <PieChart width={180} height={180}>
			  <Pie data={formattedData} innerRadius={35} outerRadius={55} fill="#ff3333">
				  {data.map((entry, index) => <Cell key={key} fill={colors[index % colors.length]}/>)}
			  </Pie>
			  <Legend wrapperStyle={{ fontFamily: 'Lato', fontSize: '12px' }} />
		  </PieChart>
    );
};

export default Graph;
