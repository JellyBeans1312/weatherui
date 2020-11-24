import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap'
import Chart from 'react-apexcharts'

export default class Area extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      series: [1, 2, 3],
      options: {
        chart: {
          height: 350,
          type: 'area',
        },
        dataLabels: {
          enabled: false
        },
        noData: {
          text: 'Loading...'
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
        },
        tooltip: {
          x: {
              format: 'dd/MM/yy HH:mm'
          },
        }
      }
    }
  }

  filterDailyView = (totalDays) => {
    const weatherData = this.props.chartData
    let dailyHighs = [];
    let dailyLows = []; 
    
    for (let i = 0; i <= totalDays; i++) {
      dailyHighs.push(weatherData.dailyHigh[i])
      dailyLows.push(weatherData.dailyLow[i])
    }
    
    this.setState(state => ({
      series: state.series.map(tempObj => {
        return tempObj.name === "Temperature Highs" ? { ...tempObj, data: dailyHighs} : tempObj
      })
    }))
    this.setState(state => ({
      series: state.series.map(tempObj => {
        return tempObj.name === "Temperature Lows" ? { ...tempObj, data: dailyLows} : tempObj
      })
    }))
  }
  
  componentDidMount = () => {
    this.setState({series: [
      {
        name: 'Temperature Highs',
        data: this.props.chartData.dailyHigh        
      },
      {
        name: 'Temperature Lows',
        data: this.props.chartData.dailyLow
      }
      ],
    })
  }


  render() {
    return(
      <Fragment>
        <Button className='mr-3' onClick={() => this.filterDailyView(3)}>3 Day view</Button>
        <Button onClick={()=> this.filterDailyView(7)}>7 day view</Button>
        <div className="area">
          <Chart options={this.state.options} series={this.state.series} width="100%" />
        </div>
      </Fragment>
    )
  }
}