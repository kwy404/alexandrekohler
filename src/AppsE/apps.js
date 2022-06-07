import {AppT} from '../components/App';
import { Calculator } from 'react-mac-calculator'

import React, { Component } from 'react';
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';
import {AboutMe} from '../aboutme';


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
    bg={`white`}
    resize={false}
    width={props.mobile ? `100%` : `fit-content`}
    height={props.mobile ? `100%` : `fit-content`}
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
