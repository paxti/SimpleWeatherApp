import React from 'react';
import DayWeather, {DayWeatherType} from './DayWeather';

export interface WeekWeatherProps {
  weatherData: Array<DayWeatherType>;
}

const WeekWrapper: React.FC<WeekWeatherProps> = ({weatherData}) => {
  return (
    <>
      {weatherData.map((data: DayWeatherType) => (
        <DayWeather data={data} />
      ))}
    </>
  );
};

export default WeekWrapper;
