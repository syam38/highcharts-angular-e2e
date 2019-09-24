
import { OccurrenceChart } from './chart.po';


describe('Dashboard page', () => {

  const occurrenceChart = new OccurrenceChart();

  beforeAll(async () => {
    await occurrenceChart.navigateTo();
  });

  it('should have the all the series plotted in the chart', async () => {
    const desiredCount = 1; // as only one series is plotted
    const plottedSeries = await occurrenceChart.getPlottedSeriesNames();
    expect(plottedSeries.length).toEqual(desiredCount);
  });


  it('should have the desired tooltip on hovering over a point in the series ', async () => {
    const result = await occurrenceChart.hoverOverASeries();
    console.log('result', result);
    const tooltip = await occurrenceChart.getTooltip();
    console.log('tooltip', tooltip);

  });


});
