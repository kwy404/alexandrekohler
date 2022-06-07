import './App.css';
import {WallpaperComp} from './components/Wallpaper';
import { getWallPaper } from './utils/getWallpapers';
import {CalculatorTor, Notes} from './AppsE/apps';
import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

const AppsFrom = [{
  App: CalculatorTor,
  title: `Calculadora`
}, {
  App: Notes,
  title: `Notas`
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
        open: true,
        MimizeApp: false,
        id: 0
    }
});

function App() {
  const [AppsArrayObjectState, setAppsArrayObjectState] = useState(AppsArrayObject);
  const [AppsAbertos, setAppsAbertos] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    window.addEventListener('keyup', e => {
      e.preventDefault();
    })
  }, [true])

  const OpenApp = (app) => {
    //Set AppsAbertos
    const newApp = {...app, index: AppsAbertos.length + 1}
    newApp.index = AppsAbertos.length + 1
    setAppsAbertos(AppsAbertos.concat(newApp));
  }

  const CloseApp = (index) => {
    setAppsAbertos(AppsAbertos.map(app => {
      if(app.index === index){
        app.open = false
      }
      return app
    }
    ))
  }

  const CloseAppOnOpen = (index) => {
    setAppsAbertos(AppsAbertos.map(app => {
      if(app.index === index){
        app.open = !app.open
      }
      return app
    }
    ))
  }

  const mimimizeApp = (index) => {
    setAppsAbertos(AppsAbertos.map(app => {
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
      <h1 className='timeHours'>{time}</h1>
      <div className='appsDesktop'>
      {AppsArrayObjectState.map((App, index) => (
        <>
         <Draggable 
          defaultPosition={{x: 0, y: 0}}>
          <div
          key={index} 
          onDoubleClick={() => OpenApp(App)}
          className='iconApp'>
            <img src={App.icon}/>
            <span className='titleApp'>{App.title}</span>
          </div>
          </Draggable>
        </>
      ))}
      <div className='appDesk'>
        {AppsAbertos.map((App, index) => (
          <App.App
          index={App.index}
          CloseApp={() => CloseApp}
          mimimizeApp={() => mimimizeApp}
          MimimizeAppTwo={App.MimizeApp}
          opened={App.open}/>
          ))}
        </div>
      </div>
      <div className='leftAside'>
      {AppsAbertos.map((App, index) => (
        <>
         <div>
           { App.open && 
           <>
            {!App.MimizeApp && <div className='selectMimizeApp'/>}
            <div
            key={index} 
            onClick={() => mimimizeApp(App.index)}
            className='iconApp displayBlock'>
              <img src={App.icon}/>
              {/* <span className='titleApp'>{App.title}</span> */}</div>
           </> }
          </div>
        </>
      ))}
      </div>
      <WallpaperComp/>
    </div>
  );
}

export default App;
