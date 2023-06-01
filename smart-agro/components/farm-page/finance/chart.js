import { Chart } from "chart.js/auto";
import React, { useRef, useEffect} from "react";

function PieChart() {
    const canvas = useRef();

    useEffect(() => {
        const ctx = canvas.current;

        let chartStatus = Chart.getChart('myChart');
        
        if (chartStatus != undefined) {
            chartStatus.destroy();
        }

        const chart = new Chart(ctx, {
            type: 'pie',
            data: {
              labels: ['Income', 'Expenses'],
              datasets: [
                {
                  label: 'Finance',
                  data: [50, 50],
                  backgroundColor: [
                    'rgba(40, 167, 69, 0.8)',
                    'rgba(220, 53, 69, 0.8)',
                  ],
                  borderColor: [
                    'rgba(40, 167, 69, 1)',
                    'rgba(220, 53, 69, 1)',
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Finance Data',
                },
              },
            },
          });

    }, [])

    return (
        <div className="container">
            <canvas ref={canvas}></canvas>
        </div>
    );
}

export default PieChart;