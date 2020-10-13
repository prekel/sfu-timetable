export async function getArray() {
  try {
    let groups = await fetch("http://edu.sfu-kras.ru/api/timetable/groups")
    let teachers = await fetch("http://edu.sfu-kras.ru/api/timetable/teachers")
    let groupsArray = await groups.json()
    return groupsArray.concat(await teachers.json())
  } catch(error) {
    console.log(error)
  }
}

export async function getTarget(targetName) {
  try {
    let data = await fetch(`http://edu.sfu-kras.ru/api/timetable/get&target=${targetName}`)
    let target = await data.json()
    return target
  } catch (e) {
    console.error(e)
  } 
}