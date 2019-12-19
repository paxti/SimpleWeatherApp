import React from 'react';
import CityTitle from '../components/CityTitle';
import CitySubtitle from '../components/CitySubtitle';
import CityWeather from '../components/CityWeather';

interface Props {}

interface State {}

class CityHeader extends React.PureComponent<Props, State> {
  render(): JSX.Element {
    return (
      <>
        <CityTitle title="Saint Louis" />
        <CitySubtitle day={'Monday'} conditions={'Sunny'} />
        <CityWeather temperature={-6} />
      </>
    );
  }
}

export default CityHeader;
