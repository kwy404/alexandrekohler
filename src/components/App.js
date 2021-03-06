import { Browser } from "react-window-ui";
import Draggable from 'react-draggable';

export const AppT = (props) => {
    //Create a window app based on width and height of the screen
    return (
        <>{!props.mobile ?  <div className={`${props.opened ? `OpenAppAnimation` : `CloseAppAnimation`}` }>
        <div className={`${(props.MimimizeAppTwo ? `MimizeApp` : ``)}`}>
            <Draggable 
                handle=".handlerMoveDrag"
                defaultPosition={{x: props.mobile ? 0 : 80, y: 0}}
                position={null}>
                        <Browser
                        style={{
                            width: props.width,
                            height: props.height,
                            padding: "10px",
                            overflowY: props.overflowY,
                            backgroundColor: props.bg,
                            zIndex: 20,
                            position: props.mobile ? 'fixed' : 'absolute',
                            top: props.mobile ? `0px` : `-35vh`,
                            left: props.mobile ? `0px` : `-3vw`
                        }}
                        resize={props.resize}
                        >
                            <div className="headerApp">
                                <h1>{ props.title }</h1>
                                <div className='handlerMoveDrag'>
                                </div>
                                <div className='right'>
                                    {/* Close and mimize and fullScreen app */}
                                    <button
                                    onClick={() => {
                                        props.mimimizeApp()()(props.index)
                                    }}
                                    >
                                        <i className="fa-solid fa-compress"></i>
                                    </button>
                                    <button
                                    onClick={() => {
                                        props.CloseApp()()(props.index)
                                    }}
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="bodyApp" style={{
                                position: `relative`,
                                top: `2rem`,
                                paddingBottom: `2rem`
                            }}>
                                <props.App/>
                            </div>
                        </Browser>
                </Draggable>
            </div>
    </div> : 
    <><div className="bodyApp" style={{
        position: `fixed`,
        top: `0px`,
        paddingBottom: `0rem`,
        width: `calc(100% - 20px)`,
        height: `calc(100%)`,
        zIndex: 1000,
        padding: "10px",
        overflowY: props.overflowY,
        backgroundColor: props.bg,
    }}>
        <props.App/>
    </div></>
    } </>
    );
}