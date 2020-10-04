import React from 'react';

export default function useHighcharts(Highcharts: any, chartContainerRef: any, initialChartOptions: any) {
    const [chart, setChart] = React.useState(null)

    React.useEffect(() => {
        setChart(Highcharts.chart(chartContainerRef.current, initialChartOptions));
    }, []);

    return chart
}
