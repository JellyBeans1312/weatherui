import React from 'react';
import Chart from 'react-apexcharts'

export const RadialBar = ({humidity}) => {
     let options = {
        labels: ['Humidity'],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
          dataLabels: {
            value: {
              show: true,
              fontSize: '32px',
            }
          }
        }
      }
      
    let series = [humidity]

    return (
      <div className="radialbar">
        <Chart options={options} series={series} type="radialBar" height="360" />
      </div>
    );
  }