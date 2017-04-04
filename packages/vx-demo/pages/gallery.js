import React from 'react';
import Page from '../components/page';
import Mock from '@vx/mock-data';
import Curve from '@vx/curve';
import SimpleLineChart from '../components/charts/SimpleLineChart';
import SimpleAreaChart from '../components/charts/SimpleAreaChart';
import SimpleLineWithGlyphsChart from '../components/charts/SimpleLineWithGlyphsChart';

export default () => {
  const data1 = Mock.genDateValue(20);
  const data2 = Mock.genDateValue(20);

  const width = 800;
  const height = 400;
  const margin = {
    top: 60,
    bottom: 60,
    left: 80,
    right: 80,
  };

  return (
    <Page title="gallery">
      <div className="gallery">
        <div className="item">
          <SimpleLineChart
            width={width}
            height={height}
            margin={margin}
            dataset={[{
              data: data1,
              chart: {
                stroke: '#6A7DD3',
                strokeWidth: 4,
                backgroundColor: 'white',
              }
            }]}
          />
          <h4>Simple line chart</h4>
        </div>
        <div className="item">
          <SimpleAreaChart
            width={width}
            height={height}
            margin={margin}
          />
          <h4>Simple Area chart</h4>
        </div>
        <div className="item">
          <SimpleLineWithGlyphsChart
            width={width}
            height={height}
            margin={margin}
            dataset={[{
              data: data2,
              chart: {
                stroke: '#6A7DD3',
                strokeWidth: 4,
                backgroundColor: 'white',
              }
            }]}
          />
          <h4>Simple line chart w/ glyphs</h4>
        </div>
        <div className="item">
        </div>
      </div>

      <style jsx>{`
        .gallery {
          margin-top: 120px;
          display: flex;
          flex: 1;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
        }

        .item {
          width: 500px;
          margin: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .item h4 {
          text-align: center;
          margin-top: .5rem;
        }
      `}</style>
    </Page>
  )
}