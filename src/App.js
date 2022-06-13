import './App.css';
import {WallpaperComp} from './components/Wallpaper';
import { getWallPaper } from './utils/getWallpapers';
import {CalculatorTor, Notes, VsCode, AboutMeApp, Spotify} from './AppsE/apps';
import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

const AppsFrom = [{
  App: CalculatorTor,
  title: `Calculadora`
}, {
  App: Notes,
  title: `Notas`
},{
  App: AboutMeApp,
  title: `Sobre`
}, {
  App: Spotify,
  title: 'Spotify'
}
]

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
        id: 0,
        ref: null
    }
});

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    })
  }, [])
  return (
    <>
      { windowSize > 700 ? <Desktop/> : `` }
    </>
  );
}

const Desktop = () => {
  const [AppsArrayObjectState, setAppsArrayObjectState] = useState(AppsArrayObject);
  const [AppsAbertos, setAppsAbertos] = useState([]);
  const [time, setTime] = useState(0);
  const [MoreApps, setMoreApps] = useState(null);
  const [ajustes, setAjustes] = useState({x: 0, y: 0, open: false});
  const [showAjustesSizeIcon, setShowAjustesSizeIcon] = useState(false);
  const [sizeIcon, setSizeIcon] = useState(typeof localStorage.getItem(`sizeIcon`) == 'object' ? 'medium' : localStorage.getItem(`sizeIcon`));

  useEffect(() => {
    window.addEventListener('keyup', e => {
      e.preventDefault();
    })
    const newApp = {...AppsArrayObjectState[2], index: -1}
    newApp.index = -1
    newApp.closed = false
    setAppsAbertos(AppsAbertos.concat(newApp));
  }, [true])

  const OpenApp = (app) => {
    //Set AppsAbertos
    const newApp = {...app, index: AppsAbertos.length + 1}
    newApp.index = AppsAbertos.length + 1
    newApp.closed = true
    setAppsAbertos(AppsAbertos.concat(newApp));
  }

  const CloseApp = (index) => {
    setAppsAbertos(AppsAbertos.map(app => {
      if(app.index === index && app.closed) {
        app.open = false
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
  return <div 
  onContextMenu={(e) => {
    e.preventDefault()
  }}
  className={`App`}>
    <h1 className='timeHours'>{time}</h1>
    { ajustes.open && <div
    style={{
      top: `${ajustes.y}px`,
      left: `${ajustes.x}px`
    }}
    className='moreOptionsClickDireito--Ajustes'>
        <div className='close' onClick={() => {
          setAjustes({ y:0,x: 0, open: false})
        }}></div>
        <li onMouseOver={() => {
          setShowAjustesSizeIcon(!showAjustesSizeIcon)
        }}>
          Exibir
        </li>
        <li 
        onClick={() => {
          setAjustes({ y:0,x: 0, open: false})
        }}
        onMouseOver={() => setShowAjustesSizeIcon(false)}>
          Atualizar
        </li>
        <li
        onMouseOver={() => setShowAjustesSizeIcon(false)}>
          Personalizar
        </li>
        { showAjustesSizeIcon && 
        <div className='rightPanel'>
          <li 
          className={`${sizeIcon === 'largue' ? 'activeLi' : ''}`} 
          onClick={() => {
            setSizeIcon('largue')
            localStorage.setItem('sizeIcon', 'largue')
          }}>
            Icones grandes 
          </li>
          <li 
          className={`${sizeIcon === 'medium' ? 'activeLi' : ''}`} 
          onClick={() => {
            setSizeIcon('medium')
            localStorage.setItem('sizeIcon', 'medium')
          }}>
            Icones medios 
          </li>
          <li 
          className={`${sizeIcon === 'small' ? 'activeLi' : ''}`} 
          onClick={() => {
            setSizeIcon('small')
            localStorage.setItem('sizeIcon', 'small')
          }}>
            Icones pequenos 
          </li>
        </div> }
    </div> }
    <div 
    onContextMenu={(e) => {
      setAjustes({ y: e.clientY - 10,x: e.clientX - 10, open: true})
      e.preventDefault()
    }}
    className='appsDesktop'>
    {AppsArrayObjectState.map((App, index) => (
      <>
       <Draggable 
        defaultPosition={{x: 0, y: 0}}>
        <div
        key={index} 
        onTouchStart={() => {
          OpenApp(App)
        }}
        onDoubleClick={() => OpenApp(App)}
        className={`iconApp iconApp--${sizeIcon}`}>
          <img src={App.icon}/>
          <span className='titleApp'>{App.title}</span>
        </div>
        </Draggable>
      </>
    ))}
    <div
    className='appDesk'>
      {AppsAbertos.map((App, index) => (
        <>
        { App.open && <>
        <App.App
        index={App.index}
        CloseApp={() => CloseApp}
        mimimizeApp={() => mimimizeApp}
        MimimizeAppTwo={App.MimizeApp}
        opened={App.open}/>
         </>}
        </> ))}
      </div>
    </div>
    <div className='leftAside glass'>
    { MoreApps && <>
    <div
    style={{
      left: `${MoreApps.x}px`,
      bottom: `80px`
    }}
    className='moreOptionsClickDireito glass'>
        <li 
        onClick={() => {
          CloseApp(MoreApps.App.index)
          setMoreApps(null)
        }}
        >
          <i className="fa-solid fa-xmark"></i> Fechar janela
        </li>
    </div> 
    <div className='close' onClick={() => {
          setMoreApps(null)
        }}></div>
    </>}
    {AppsAbertos.map((App, index) => (
      <>
       <div>
         { App.open && 
         <>
          <div
          ref={App.ref}
          key={index}
          onContextMenu={(e) => {
            setMoreApps({App, x: e.clientX - 250})
            e.preventDefault()
          }}
          onClick={() => mimimizeApp(App.index)}
          className='iconApp displayBlock appBlock'>
            <img src={App.icon}/>
            {!App.MimizeApp && <div className='selectMimizeApp glass'/>}</div>
         </> }
        </div>
      </>
    ))}
    </div>
    <WallpaperComp/>
  </div>
}

export default App;
