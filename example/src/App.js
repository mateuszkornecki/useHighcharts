import React from "react";
import * as Highcharts from 'highcharts';
import useHighcharts from 'use-highcharts';

export default function App() {
    const chartContainer = React.useRef(null);
    const chart = useHighcharts(Highcharts, chartContainer, {
        series: [{data: Array(25).fill(null).map(() => Math.random() * 10)}]
    });

    return (
        <>
            <div ref={chartContainer} id="chart"/>
            <button onClick={() => chart.series[0].addPoint(Math.random())}> Add random point</button>
            <button onClick={() => chart.xAxis[0].setExtremes(10, 15)}>Set extremes</button>
            <button onClick={() => chart.xAxis[0].setExtremes()}>Reset extremes</button>
        </>
    );
}
