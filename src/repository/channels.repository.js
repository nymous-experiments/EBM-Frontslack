import agent from 'superagent'
const apiUrl = 'http://localhost:9000/api/channels'

export async function fetchChannels() {
  try {
    const res = await agent.get(apiUrl).query()
    return res.body
  }
  catch (e) {
    console.error(e)
  }
}
