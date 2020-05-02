import Restaurant from './../Photo/restaurant.png'
import Diamond from './../Photo/Diamond.png'
import Service from './../Photo/ServiceIcon.png'

let busType = {
  Restaurant: Restaurant,
  Service: Service,
}

/*
    Comment Start - Doesn't work

    
    if (premium) {
        console.log(name)
        return Diamond
    } else {
        return busType[type] ? busType[type] : Diamond
    }
Comment End
*/

export default function BusinessThumbnail(type, premium, name) {
  return busType[type] ? busType[type] : Diamond
}
