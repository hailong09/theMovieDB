export const pathToImage = path => {
    const ORIGIN = 'http://image.tmdb.org/t/p/original';
    const notFound =
    'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F019%2F277%2Fconfusedtravolta.jpg';
    return path ? ORIGIN + path : notFound;
}



export const reformatItems = items => {
    return items.map(item => ({
        ...item,
        "backdrop_path": pathToImage(item["backdrop_path"]),
        "poster_path": pathToImage(item["poster_path"])


    }))
}