export const getImage = (images) =>{
    return images.length > 0 ? images[0].images : ""
}
export const getImageWithUrl = (image) =>{
    return image ? process.env.REACT_APP_API + image : ""
}
