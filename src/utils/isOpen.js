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
    let day = d.getDay()
    let weekday = daysOfWeek[day]
    const startTime = business[weekday+'_Start']
    const closeTime = business[weekday+'_Close']
    if(startTime === 'Closed' || startTime === null || startTime === ''){
      return {'open': false, 'start': startTime, 'close': closeTime}
    }

    let start = convertFromStr(startTime)
    let close = convertFromStr(closeTime)

    let currMin = d.getMinutes()
    let currHour = d.getHours()


    if(start.hour < currHour && currHour < close.hour) {
      return {'open': true, 'start': startTime, 'close': closeTime}
    }
    if(start.hour > close.hour && currHour > start.hour){
      return {'open': true, 'start': startTime, 'close': closeTime}
    }
    if(day===0) {
      weekday = 8
    }
    weekday = daysOfWeek[day-1]
    const yesStartTime = business[weekday+'_Start']
    const yesCloseTime = business[weekday+'_Close']
    start = convertFromStr(yesStartTime)
    close = convertFromStr(yesCloseTime)
    if(start.hour > close.hour && currHour < close.hour){
      return {'open': true, 'start': yesStartTime, 'close': yesCloseTime}
    }
    return {'open': false, 'start': startTime, 'close': closeTime}
}