import {AppT} from '../components/App';
import { Calculator } from 'react-mac-calculator'

import React, { Component } from 'react';
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';

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

export const CalculatorTor = props => {
    return <AppT 
    title={"Calculadora"} 
    index={props.index}
    mimimizeApp={() => props.mimimizeApp}
    MimimizeAppTwo={props.MimimizeAppTwo}
    CloseApp={() => props.CloseApp}
    App={Calculator} 
    opened={props.opened}
    bg={`#555`}
    resize={false}
    width={`fit-content`}
    height={`fit-content`}
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
  title={"Visual Studio Code"} 
  index={props.index}
  mimimizeApp={() => props.mimimizeApp}
  MimimizeAppTwo={props.MimimizeAppTwo}
  CloseApp={() => props.CloseApp}
  App={VSCode} 
  opened={props.opened}
  bg={`#555`}
  resize={true}
  width={`800px`}
  height={`600px`}
  overflowY={`hidden`}
  overflowX={`hidden`}
/>
}

export const Notes = props => {
  return <AppT 
  title={"Notas"} 
  index={props.index}
  mimimizeApp={() => props.mimimizeApp}
  MimimizeAppTwo={props.MimimizeAppTwo}
  CloseApp={() => props.CloseApp}
  App={StickyNotes} 
  opened={props.opened}
  bg={`#555`}
  resize={true}
  width={`800px`}
  height={`500px`}
  overflowY={`auto`}
  overflowX={`hidden`}
/>
}
