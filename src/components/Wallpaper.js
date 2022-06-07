import { getWallPaper } from '../utils/getWallpapers';
import styled from 'styled-components';

const wallpapers = getWallPaper(require.context('../wallpapers', false, /\.(png|jpe?g|svg|webp)$/));
//Transform wallpapers to array 
const wallpapersArray = Object.keys(wallpapers).map(key => wallpapers[key]);

//Get image from localStorage
const getImage = () => {
    const random = Math.floor(Math.random() * wallpapersArray.length);
    return localStorage.getItem('image') ? localStorage.getItem('image') : wallpapersArray[random];
};

const Wallpaper = styled.div`
    background-image: url(${getImage()});
    position: fixed;
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: brightness(0.8);
    z-index: 0;
`

export const WallpaperComp = () => {
    return <>
        <Wallpaper>

        </Wallpaper>
    </>
}