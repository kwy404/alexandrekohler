import {AppT} from '../components/App';
import { Calculator } from 'react-mac-calculator'

import React, { Component, useState } from 'react';
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';
import {AboutMe} from '../aboutme';
import SpotifyPlayer from 'react-spotify-player';
import { getWallPaper } from '../utils/getWallpapers';

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

const AjustesD = () => {
  const [position, setPosition] = useState(0);
  const wallpapers = getWallPaper(require.context('../wallpapers', false, /\.(png|jpe?g|svg|webp)$/));
  //Transform wallpapers to array 
  const wallpapersArray = Object.keys(wallpapers).map(key => wallpapers[key]);
  return <div className='hai glass'>
    <h3>Escolha algum Wallpaper de sua escolha...</h3>
    <div 
    onClick={() => {
      if (position > 0) {
        setPosition(position - 1);
      }
    }}
    className='arrow arrowLeft glass'>
      <i className="fa-solid fa-arrow-left"></i>
    </div>
    <div 
    onClick={() => {
      if (position < wallpapersArray.length - 1) {
        setPosition(position + 1);
      }
    }}
    className='arrow arrowRight glass'>
      <i className="fa-solid fa-arrow-right"></i>
    </div>
    <div className='wallpaper-container'
    style={{
      transform: `translateX(-${position * 96}%)`
    }}
    >
      {wallpapersArray.map((wallpaper, index) => (
        <img 
        onClick={() => {
          localStorage.setItem('image', wallpaper);
          setPosition(position + 1)
          setTimeout(() => {
            setPosition(index)
          }, 1)
        }}
        key={index} src={wallpaper} alt="wallpaper" className={`${(localStorage.getItem('image') === wallpaper ? `selected` : ``)}`} />
      ))}
    </div>  
  </div>
}

export const Ajustes = props => {
  return <AppT 
  mobile={props.mobile}
  title={"Ajustes"} 
  index={props.index}
  mimimizeApp={() => props.mimimizeApp}
  MimimizeAppTwo={props.MimimizeAppTwo}
  CloseApp={() => props.CloseApp}
  App={AjustesD} 
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
