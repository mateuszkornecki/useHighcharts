# useHighcharts

[![NPM](https://img.shields.io/npm/v/usehighcharts.svg)](https://www.npmjs.com/package/use-highcharts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-highcharts
```

## Usage

```tsx
import React from "react";
import * as Highcharts from 'highcharts';
import useHighcharts from './useHighcharts';

export default function App() {
  const chartContainer = React.useRef(null);
  const chartOptions = {
    title: {
        text: 'useHighcharts demo'
    },
    series: [{
        type: 'line',
        data: [5,4,1,2,7]
    }]
  }
  const chart = useHighcharts(Highcharts, chartContainer, chartOptions);

  return <div ref={chartContainer} id="chart" />
}
```

## License

The `useHighcharts` hook itself is MIT, however keep in mind that it depends on the [Highcharts](https://www.highcharts.com). For commercial use, you need a valid [Highcharts license](https://shop.highsoft.com/).

---
This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
