import {CalculatorTor, Notes, Ajustes, AboutMeApp, Spotify} from './AppsE/apps';
import { useEffect, useState } from 'react';
import { getWallPaper } from './utils/getWallpapers';

export const Android = () => {
    
    const AppsFrom = [{
        App: CalculatorTor,
        title: `Calculadora`
    }, {
        App: Ajustes,
        title: `Ajustes`
    }, {
        App: Notes,
        title: `Notas`
    }, {
        App: AboutMeApp,
        title: 'Sobre'
    }, {
        App: Spotify,
        title: 'Spotify'
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
            id: 0,
            ref: null
        }
    });
    const [AppsArrayObjectState, setAppsArrayObjectState] = useState(AppsArrayObject);
    const [AppsAbertos, setAppsAbertos] = useState([]);
    const [time, setTime] = useState(0);
    const [MoreApps, setMoreApps] = useState(null);
    const [ajustes, setAjustes] = useState({
        x: 0,
        y: 0,
        open: false
    });
    const [showAjustesSizeIcon, setShowAjustesSizeIcon] = useState(false);
    const [sizeIcon, setSizeIcon] = useState(typeof localStorage.getItem(`sizeIcon`) == 'object' ? 'medium' : localStorage.getItem(`sizeIcon`));

    useEffect(() => {
        window.addEventListener('keyup', e => {
            e.preventDefault();
        })
        const newApp = {
            ...AppsArrayObjectState[3],
            index: -1
        }
        newApp.index = -1
        newApp.closed = false
        setAppsAbertos(AppsAbertos.concat(newApp));
    }, [true])

    const OpenApp = (app) => {
        //Set AppsAbertos
        const newApp = {
            ...app,
            index: AppsAbertos.length + 1
        }
        newApp.index = AppsAbertos.length + 1
        newApp.closed = true
        setAppsAbertos(AppsAbertos.concat(newApp));
    }

    const CloseApp = (index) => {
        setAppsAbertos(AppsAbertos.map(app => {
            if (app.index === index && app.closed) {
                app.open = false
            }
            return app
        }))
    }

    const mimimizeApp = (index) => {
        setAppsAbertos(AppsAbertos.map(app => {
            if (app.index === index) {
                app.MimizeApp = !app.MimizeApp
            }
            return app
        }))
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
    return <> 
        <div
        style={{
            position: 'absolute',
            zIndex: '2',
        }}
        >
        {AppsArrayObjectState.map((App, index) => (
        <>
            <div
            key={index} 
            onTouchStart={() => {
                OpenApp(App)
            }}
            onDoubleClick={() => OpenApp(App)}
            className={`iconApp iconAppAndroid`}>
            <img src={App.icon}/>
            <span className='titleApp'>{App.title}</span>
            </div>
            </>
        ))}
        </div>
        <div className='bottomBar glassAndroid'>
            <i className="fa-solid fa-braille"></i>
            <i 
            onClick={() => {
                const newApps = [...AppsAbertos]
                newApps.map(app => {
                    app.open = false
                    return app
                })
                setAppsAbertos(newApps);
            }}
            className="fa-solid fa-circle-dot"></i>
            <i className="fa-solid fa-angle-left"></i>
            </div>
        <div>
        {AppsAbertos.map((App, index) => (
        <>
        { App.open && <>
            <App.App
            mobile={true}
            index={App.index}
            CloseApp={() => CloseApp}
            mimimizeApp={() => mimimizeApp}
            MimimizeAppTwo={App.MimizeApp}
            opened={App.open}/>
        </>}
        </> ))}
      </div>
    </>
}