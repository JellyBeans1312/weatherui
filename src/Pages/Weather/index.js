import React, { Fragment, Component } from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import { getWeatherForCity } from '../../util/apiCalls.js'
import Loader from "react-loaders";

import { WeatherTable } from './Tables/index'
import Area from './Charts/Area'
import { RadialBar } from './Charts/RadialBar'
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";



import Weather from "./Weather";
// Layout

import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";



export default class WeatherPage extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    }
  }
  handleChartData = (weather) => {
    let temperatureData = {}
    let dailyHighs = []
    let dailyLows = []

    weather.daily.map(day => {  
      let maxTemp = parseInt(day.temp.max)
      let minTemp = parseInt(day.temp.min)
      let date = day.dt * 1000

      dailyHighs.push([date, maxTemp])
      dailyLows.push([date, minTemp])
    })

    let currTemp = parseInt(weather.current.temp)
    temperatureData = {
      currTemp: currTemp,
      dailyHigh: dailyHighs,
      dailyLow: dailyLows,
      humidity: weather.current.humidity
    }

    return temperatureData
  }
  
  componentDidMount = async () => {
    try {
      const data = await getWeatherForCity('39.0473', '-95.6752');
      this.setState({uncleanData: data})
      console.log(this.state.uncleanData)
      let chartData = this.handleChartData(data)
      this.setState({chartData})
    }
    catch(error){
      this.setState({error: error.mes})
    }
  }

  render() {
    return(
      <Fragment>
        <AppHeader />
        <div className="app-main">
          <AppSidebar />
          <div className="app-main__outer">
            <div className="app-main__inner">
              <Weather/>
            </div>

            <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
          
              <TabPane tab="Chart View" key="1" class='mb-3 '>
                <Row>
                  {this.state.error}
                  <Col md="3">
                    <Card className="mb-3 ml-3">
                      <CardBody>
                        <CardTitle>Today's Details</CardTitle>
                        <CardTitle>{this.state.chartData ? this.state.uncleanData.current.weather[0].description : null} </CardTitle>
                        <h1>{this.state.chartData ? this.state.chartData.currTemp + `°F`: <Loader type="ball-rotate"/>}</h1>
                        <h3>{this.state.chartData ? `Feels Like: `+ parseInt(this.state.uncleanData.current.feels_like) + `°F`: null }</h3>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="9">
                    <Card>
                      <CardBody>
                        <CardTitle className='ml-3'>More Details</CardTitle>
                        <Row>
                          <h5 className='ml-4 mr-4'>Wind Speed</h5>
                          <h5 className='ml-4 mr-4'>Pressure</h5>
                          <h5 className='ml-4 mr-4'>Dew Point</h5>
                        </Row>
                        <Row>
                          <p className='ml-4 mr-4'>{this.state.chartData ? this.state.uncleanData.current.wind_speed + ' mph' : null}</p>
                          <p className='ml-4 mr-4'>{this.state.chartData ? this.state.uncleanData.current.pressure : null}</p>
                          <p className='ml-4 mr-4'>{this.state.chartData ? this.state.uncleanData.current.dew_point  : null}</p>
                        </Row>
                      </CardBody>

                    </Card>
                  </Col>
                </Row>
                <Row>
                <Col md="6">
                  <Card className="ml-3">
                    <CardBody>
                      <CardTitle>Topeka (current city) Forecast</CardTitle>
                      {this.state.chartData ? <Area chartData={this.state.chartData}/> : <Loader type="ball-pulse" />}
                    </CardBody>
                  </Card>
                  </Col>
                  <Col md="6">
                  <Card className="mb-3 ml-3 mr-3">
                    <CardBody>
                      <CardTitle>Humidity</CardTitle>
                      {this.state.chartData ? <RadialBar humidity={this.state.chartData.humidity} /> : <Loader type='ball-beat' />}
                    </CardBody>
                  </Card>
                  <Card></Card>
                </Col>
                </Row>
              </TabPane>
              <TabPane tab="Table View" key="2">
                <WeatherTable tableData={this.state.uncleanData}/>
              </TabPane>
              </Tabs>
          </div>
        </div>
      </Fragment>
    )
  }
};


