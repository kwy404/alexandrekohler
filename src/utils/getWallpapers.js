export const getWallPaper = (r) => {
    const images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}