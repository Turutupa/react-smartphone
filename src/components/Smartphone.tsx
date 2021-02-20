import React from 'react';
import styled from 'styled-components';
import Case from './Case';
import UpperSpeaker from './UpperSpeaker';
import Screen from './Screen';
import HomeButton from './HomeButton';
import Camera from './Camera';
import VolumeButtons from './VolumeButtons';
import LockButton from './LockButton';
import Content from './PhoneContent';
import Lockscreen from './Lockscreen';

const Title = styled.h3`
  color: white;
  padding-top: 20vmin;
  font-weight: 700;
  height: 100%;
  width: 100%;
  text-align: center;
`;

const renderDefault = (text?: string) => (
  <Title>{text || 'Thanks for using react-phone.'}</Title>
);

interface Props {
  height?: string;
  width?: string;
  caseColor?: string;
  detailsColor?: string;
  cameraColor?: string;
  shadowColor?: string;
  volumeButtonsColor?: string;
  text?: string;
  content?: JSX.Element;
  children?: JSX.Element | string;
  screenColor?: string;
  homeButtonEvent?: () => void;
  volumeButtonEvent?: () => void;
}

export default function Phone(props: Props) {
  const {
    height,
    width,
    caseColor,
    detailsColor,
    cameraColor,
    shadowColor,
    volumeButtonsColor,
    text,
    children,
    content,
    screenColor,
    homeButtonEvent,
    volumeButtonEvent,
  } = props;
  const component = children
    ? children
    : content
    ? content
    : renderDefault(text);

  const [lockscreen, toggleLockScreen] = React.useState<boolean>(false);

  return (
    <Case
      height={height}
      width={width}
      shadowColor={shadowColor}
      color={caseColor}
    >
      <UpperSpeaker color={detailsColor} />
      <Camera color={cameraColor} width={width} />
      <VolumeButtons onClick={volumeButtonEvent} color={volumeButtonsColor} />
      <LockButton onClick={() => toggleLockScreen(!lockscreen)} />

      <Screen color={screenColor} height={height} width={width}>
        <Lockscreen status={lockscreen} />
        <Content>{component}</Content>
      </Screen>
      <HomeButton
        onClick={homeButtonEvent}
        color={detailsColor}
        shadowColor={shadowColor}
      />
    </Case>
  );
}
