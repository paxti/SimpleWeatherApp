import React from 'react';
import {DayWeatherType} from '../components/DayWeather';
import WeekWrapper from '../components/WeekWrapper';

interface Props {}

interface State {
  weatherData: Array<DayWeatherType>;
}

const fakeWeather: Array<DayWeatherType> = [
  {day: 'Monday', icon: 'test', maxTemperature: '10', minTemperature: '-10'},
  {day: 'Tuesday', icon: 'test', maxTemperature: '10', minTemperature: '-10'},
  {day: 'Wednesday', icon: 'test', maxTemperature: '10', minTemperature: '-10'},
  {day: 'Thursday', icon: 'test', maxTemperature: '10', minTemperature: '-10'},
  {day: 'Friday', icon: 'test', maxTemperature: '10', minTemperature: '-10'},
  {day: 'Saturday', icon: 'test', maxTemperature: '10', minTemperature: '-10'},
  {day: 'Sunday', icon: 'test', maxTemperature: '10', minTemperature: '-10'},
];

class CityOverview extends React.PureComponent<Props, State> {
  state: Readonly<State> = {
    weatherData: fakeWeather,
  };

  render(): JSX.Element {
    const {weatherData} = this.state;
    return (
      <>
        <WeekWrapper weatherData={weatherData} />
      </>
    );
  }
}

export default CityOverview;
