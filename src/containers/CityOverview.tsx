import React from 'react';
import {View} from 'react-native';
import {DayWeatherType} from 'src/components/DayWeather';
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
      <View>
        <WeekWrapper weatherData={weatherData} />
      </View>
    );
  }
}

export default CityOverview;
