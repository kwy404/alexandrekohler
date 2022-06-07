import {AppT} from '../components/App';
import { Calculator } from 'react-mac-calculator'

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
    overflowY={`hidden`}
    overflowX={`hidden`}
  />
}