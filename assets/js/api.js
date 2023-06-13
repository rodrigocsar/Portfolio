async function fetchProfileDate () {
    
    const url = 'https://raw.githubusercontent.com/rodrigocsar/Portifolio/master/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}