

import React from 'react';
import { PieChart, Pie, Label } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { browser: 'chrome', visitors: 275, fill: '#4285F4' },
  { browser: 'safari', visitors: 200, fill: '#FF9500' },
  { browser: 'firefox', visitors: 287, fill: '#FF5733' },
  { browser: 'edge', visitors: 173, fill: '#0078D7' },
  { browser: 'other', visitors: 190, fill: '#AAAAAA' },
];

export default function GaugeChart() {
  const totalVisitors = chartData.reduce((acc, curr) => acc + curr.visitors, 0);

  return (
    <ChartContainer config={{}} className="mx-auto aspect-square max-h-[250px]">
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => (
              viewBox &&
              'cx' in viewBox &&
              'cy' in viewBox && (
                <text
                  x={viewBox.cx}
                  y={viewBox.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan
                    x={viewBox.cx}
                    y={viewBox.cy}
                    className="fill-foreground text-3xl font-bold"
                  >
                    {totalVisitors.toLocaleString()}
                  </tspan>
                  <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) + 24}
                    className="fill-muted-foreground"
                  >
                    Visitors
                  </tspan>
                </text>
              )
            )}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
