import Restaurant from './../Photo/restaurant.png'
import Diamond from './../Photo/Diamond.png'
import Photo from './../Photo/download.svg'

let busType = {
  Restaurant: Restaurant,
  Service: Photo,
}

export default function BusinessThumbnail(type, premium, name) {
    if (premium) {
        console.log(name)
        return Diamond
    } else {
        return busType[type] ? busType[type] : Diamond
    }
}
