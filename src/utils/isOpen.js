let convertFromStr = (time) => {
  try {
    
    let temp = time.split(' ')
    
    let morning = temp[1] === 'AM' ? true : false
    temp = temp[0].split(':')
    let hour = parseInt(temp[0])
    if (hour === 12) {
      hour = 0
    }
    if (!morning) {
      hour += 12
    }
    let min = parseInt(temp[1])
    
    return {'ok': true, 'morning': morning, 'hour': hour, 'min': min}

  } catch {
    return {'ok': false}
  }

}

export default function isOpen(business){
    let d = new Date()
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let weekday = daysOfWeek[d.getDay()]
    let startTime = business[weekday+'_Start']
    let closeTime = business[weekday+'_Close']
    console.log(startTime)
    console.log(closeTime)
    if(startTime === 'Closed' || startTime === null){
      console.log('Closed')
      return false
    }

    let start = convertFromStr(startTime)
    let close = convertFromStr(closeTime)
    console.log(start)
    console.log(close)

    let currMin = d.getMinutes()
    let currHour = d.getHours()

    if(start.hour < currHour && currHour < close.hour) {
      console.log('Open')
      return true
    }
    if(start.hour > close.hour && (currHour < close.hour || currHour > start.hour)){
      console.log('Open')
      return true 
    }
    console.log('Closed')
    return false
}