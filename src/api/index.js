async function getTarget(target) {
  try {
    let data = await fetch(`http://edu.sfu-kras.ru/api/timetable/get&target=${target}`)
    let json = await data.json()
    console.log(json)
  } catch (e) {
    console.error(e)
  } 
}

getTarget("КИ18-16б")
