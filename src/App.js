import './App.css';
import {WallpaperComp} from './components/Wallpaper';
import { getWallPaper } from './utils/getWallpapers';
import {CalculatorTor} from './AppsE/calculadora';
import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

const AppsFrom = [{
  App: CalculatorTor,
  title: `Calculadora`
}]

const apps = getWallPaper(require.context('./apps', false, /\.(png|jpe?g|svg|webp)$/));
//Transform wallpapers to array 
const AppsArray = Object.keys(apps).map(key => apps[key]);
//Transform AppsArray in array object
const AppsArrayObject = AppsArray.map((app, index) => {
    return {
        title: AppsFrom[index].title,
        icon: app,
        index,
        App: AppsFrom[index].App,
        open: false,
        MimizeApp: false
    }
});

function App() {
  const [AppsArrayObjectState, setAppsArrayObjectState] = useState(AppsArrayObject);
  const [time, setTime] = useState(0);
  const OpenApp = (index) => {
    setAppsArrayObjectState(AppsArrayObjectState.map(app => {
      if(app.index === index){
        app.open = true
      }
      return app
    }
    ))
  }
  const CloseApp = (index) => {
    setAppsArrayObjectState(AppsArrayObjectState.map(app => {
      if(app.index === index){
        app.open = false
      }
      return app
    }
    ))
  }

  const mimimizeApp = (index) => {
    setAppsArrayObjectState(AppsArrayObjectState.map(app => {
      if(app.index === index){
        app.MimizeApp = !app.MimizeApp
      }
      return app
    }
    ))
  }

  const getTimer = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours < 10 ? hours = `0${hours}` : hours = hours;
    minutes < 10 ? minutes = `0${minutes}` : minutes = minutes;
    setTime(`${hours}:${minutes}`)
  }

  useEffect(() => {
    getTimer()
    hoursTime()
  }, false)

  const hoursTime = () => {
    setInterval(() => {
      getTimer()
    }, 1000)
  }

  return (
    <div className="App">
      <WallpaperComp/>
      <h1 className='timeHours'>{time}</h1>
      <div className='appsDesktop'>
      {AppsArrayObjectState.map((App, index) => (
        <>
         <Draggable 
          defaultPosition={{x: 0, y: 0}}>
          <div
          key={index} 
          onDoubleClick={() => OpenApp(index)}
          className='iconApp'>
            <img src={App.icon}/>
            <span className='titleApp'>{App.title}</span>
          </div>
          </Draggable>
            <div className='appDesk'>
              <App.App
              index={index}
              CloseApp={() => CloseApp}
              mimimizeApp={() => mimimizeApp}
              MimimizeAppTwo={App.MimizeApp}
              opened={App.open}/>
            </div>
        </>
      ))}
      </div>
    </div>
  );
}

export default App;
