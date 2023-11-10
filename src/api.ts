const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c55c4fe161b94614ae3183db438f265d'

const gettingDataFromNewsApi= async () => {

  try {
    const response = await fetch(BASE_URL)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    } else {
      const data = await response.json()
      if (typeof data === 'object' && data !== null) {
        return data
      } else {
        throw new Error('Invalid response data')
      }
    }
    
  } catch (error) {
    console.log('There was a problem with the fetch operation: ' + error)
  }
}

export { gettingDataFromNewsApi }