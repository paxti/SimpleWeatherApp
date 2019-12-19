import React from 'react';
import CityTitle from '../components/CityTitle';
import CitySubtitle from '../components/CitySubtitle';
import CityWeather from '../components/CityWeather';
import CityBackground from '../components/CityBackground';

interface Props {}

interface State {}

const image =
  'https://media-cdn.tripadvisor.com/media/photo-p/0d/69/44/7f/gateway-arch-st-louis.jpg';

class CityHeader extends React.PureComponent<Props, State> {
  render(): JSX.Element {
    return (
      <CityBackground image={image}>
        <CityTitle title="Saint Louis" />
        <CitySubtitle day={'Monday'} conditions={'Sunny'} />
        <CityWeather temperature={-6} />
      </CityBackground>
    );
  }
}

export default CityHeader;
