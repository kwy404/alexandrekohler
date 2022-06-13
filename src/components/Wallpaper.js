import { getWallPaper } from '../utils/getWallpapers';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const wallpapers = getWallPaper(require.context('../wallpapers', false, /\.(png|jpe?g|svg|webp)$/));
//Transform wallpapers to array 
const wallpapersArray = Object.keys(wallpapers).map(key => wallpapers[key]);

const Wallpaper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: brightness(0.8);
    z-index: 1;
`

export const WallpaperComp = () => {
    const [wallpaperState, setWallpaperState] = useState(null);
    useEffect(() => {
        getImage()
        getIntervalImage()
    }, []);
    //Get image from localStorage
    const getImage = () => {
        const random = Math.floor(Math.random() * wallpapersArray.length);
        if(localStorage.getItem('image') === null) {
            localStorage.setItem('image', wallpapersArray[random]);
        }
        setWallpaperState(wallpapersArray[random])
    };
    const getIntervalImage = () => {
        setInterval(() => {
            if(localStorage.getItem('image') !== wallpaperState) {
                getImage()
                setWallpaperState(localStorage.getItem('image'))
            }
        }, 100)
    }
    return <>
        <Wallpaper style={{
            backgroundImage: `url(${wallpaperState})`
        }}>

        </Wallpaper>
    </>
}