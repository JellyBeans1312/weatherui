import React from 'react';
import { Col, Row, Card, CardBody, } from "reactstrap";

import ReactTable from "react-table";

export const WeatherTable = ({tableData}) => {
  console.log(tableData)
  return (
    <Col md="12">
      <Card className="main-card mb-3">
        <CardBody>
          <ReactTable data={[tableData.current]}
            columns={[
              {
                columns: [
                  {
                    Header: "City",
                    id: "city",
                    accessor: (d) => 'Topeka',
                  },
                  {
                    Header: "Temperature",
                    id: "temperature",
                    accessor: (d) => parseInt(d.temp) + `°`,
                  },
                ],
              },
              {
                columns: [
                  {
                    Header: "Feels Like",
                    id: "feelsLike",
                    accessor: (d) => parseInt(d.feels_like) + `°`,
                  },
                  {
                    Header: "Wind Speed",
                    id: "windSpeed",
                    accessor: (d) => parseInt(d.wind_speed) + ` mph`,
                  },
                ],
              },
              {
                columns: [
                  {
                    Header: "UV Index",
                    id: "uvIndex",
                    accessor: (d) => d.uvi,
                  },
                ],
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </CardBody>
      </Card>
    </Col>
  )
}