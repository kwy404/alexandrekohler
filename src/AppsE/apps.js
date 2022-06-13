import {AppT} from '../components/App';
import { Calculator } from 'react-mac-calculator'

import React, { Component, useState } from 'react';
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';
import {AboutMe} from '../aboutme';
import SpotifyPlayer from 'react-spotify-player';

class StickyNotes extends Component {
	constructor(props) {
		super(props);
	}  
	render() {
		return (
			<ReactStickyNotes />
		)
	}
}

const size = {
  width: '100%',
  height: 490,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

const Spot = () => {
  return <SpotifyPlayer
  uri="spotify:playlist:4KkRYS9PD9acAkiUTP3JCT"
  size={size}
  view={view}
  theme={theme}
/>
}

export const Spotify = props => {
  return <AppT 
      mobile={props.mobile}
      title={"Spotify"} 
      index={props.index}
      mimimizeApp={() => props.mimimizeApp}
      MimimizeAppTwo={props.MimimizeAppTwo}
      CloseApp={() => props.CloseApp}
      App={Spot} 
      opened={props.opened}
      bg={`#151515`}
      resize={false}
      width={props.mobile ? `100%` : `550px`}
      height={props.mobile ? `100%` : `550px`}
      overflowY={`auto`}
      overflowX={`hidden`}
    />
  }

export const AboutMeApp = props => {
  return <AppT 
    mobile={props.mobile}
    title={"Sobre mim"} 
    index={props.index}
    mimimizeApp={() => props.mimimizeApp}
    MimimizeAppTwo={props.MimimizeAppTwo}
    CloseApp={() => props.CloseApp}
    App={AboutMe} 
    opened={props.opened}
    bg={`#151515`}
    resize={false}
    width={props.mobile ? `100%` : `550px`}
    height={props.mobile ? `100%` : `550px`}
    overflowY={`hidden`}
    overflowX={`hidden`}
  />
}

export const CalculatorTor = props => {
    return <AppT 
    mobile={props.mobile}
    title={"Calculadora"} 
    index={props.index}
    mimimizeApp={() => props.mimimizeApp}
    MimimizeAppTwo={props.MimimizeAppTwo}
    CloseApp={() => props.CloseApp}
    App={Calculator} 
    opened={props.opened}
    bg={`#555`}
    resize={false}
    width={props.mobile ? `100%` : `fit-content`}
    height={props.mobile ? `100%` : `fit-content`}
    overflowY={`hidden`}
    overflowX={`hidden`}
  />
}

const VSCode = () => {
  return <div
  >
    <iframe 
    style={{
      width: `calc(100% - 0px)`,
      height: `100%`,
      position: `fixed`,
      top: `0px`,
      marginLeft: `-10px`
    }}
    src='https://vscode.dev/' 
    frameBorder={0}></iframe>
  </div>
}

export const VsCode = props => {
  return <AppT 
  mobile={props.mobile}
  title={"Visual Studio Code"} 
  index={props.index}
  mimimizeApp={() => props.mimimizeApp}
  MimimizeAppTwo={props.MimimizeAppTwo}
  CloseApp={() => props.CloseApp}
  App={VSCode} 
  opened={props.opened}
  bg={`#555`}
  resize={true}
  width={props.mobile ? `100%` : `800px`}
  height={props.mobile ? `100%` : `600px`}
  overflowY={`hidden`}
  overflowX={`hidden`}
/>
}

export const Notes = props => {
  return <AppT 
  mobile={props.mobile}
  title={"Notas"} 
  index={props.index}
  mimimizeApp={() => props.mimimizeApp}
  MimimizeAppTwo={props.MimimizeAppTwo}
  CloseApp={() => props.CloseApp}
  App={StickyNotes} 
  opened={props.opened}
  bg={`#555`}
  resize={true}
  width={props.mobile ? `100%` : `800px`}
  height={props.mobile ? `100%` : `500px`}
  overflowY={`auto`}
  overflowX={`hidden`}
/>
}
