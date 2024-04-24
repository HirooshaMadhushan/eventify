import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Card } from 'antd';

export default function Eventchart() {
    const donutChartRef = useRef(null);
    const lineChartRef = useRef(null);

    useEffect(() => {
        const donutChartCtx = donutChartRef.current.getContext('2d');
        const lineChartCtx = lineChartRef.current.getContext('2d');
        let donutChartInstance, lineChartInstance;

        // Donut Chart Data (Completed and Pending Events)
        const donutChartData = {
            labels: ['Completed', 'Pending'],
            datasets: [{
                label: 'Events',
                data: [100, 170],
                backgroundColor: [
                    'rgba(0, 0, 255, 0.6)', // Blue with transparency
                    'rgba(128, 0, 128, 0.6)' // Purple with transparency
                ],
                borderColor: [
                    'rgba(0, 0, 255, 1)',
                    'rgba(128, 0, 128, 1)'
                ],
                borderWidth: 1
            }]
        };

        // Line Chart Data for Total Events Over Time
        const lineChartData = {
            labels: ['January', 'February', 'March', 'April', 'May'], // Example months
            datasets: [{
                label: 'Total Events',
                data: [200, 250, 300, 350, 400], // Example total events for each month
                backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue with transparency
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        };

        // Render Donut Chart
        if (donutChartRef.current) {
            if (donutChartInstance) {
                donutChartInstance.destroy();
            }
            donutChartInstance = new Chart(donutChartCtx, {
                type: 'doughnut',
                data: donutChartData,
                options: {
                    aspectRatio: 1,
                    responsive: true
                }
            });
        }

        // Render Line Chart
        if (lineChartRef.current) {
            if (lineChartInstance) {
                lineChartInstance.destroy();
            }
            lineChartInstance = new Chart(lineChartCtx, {
                type: 'line',
                data: lineChartData,
                options: {
                    aspectRatio: 1,
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        return () => {
            if (donutChartInstance) {
                donutChartInstance.destroy();
            }
            if (lineChartInstance) {
                lineChartInstance.destroy();
            }
        };
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '50px',paddingBottom:'100px' }} className='graphbody'>
            <Card style={{ width: '27%', marginRight: '10px', color: 'black', backgroundColor: '#F0F0F0', }} className='donut-chart'>
                <canvas ref={donutChartRef}></canvas>
                <div style={{ paddingLeft: '30' }}>
                    <h7>Completed: 100    </h7>
                    <h7>Pending: 170</h7>
                </div>
            </Card>
            <Card style={{ width: '27%', marginLeft: '10px', backgroundColor: '#F0F0F0' }} className='line-chart'>
                <canvas ref={lineChartRef}></canvas>
            </Card>
        </div>
    );
}
