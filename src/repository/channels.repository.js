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

export async function postChannel(channel) {
  try {
    const res = await agent.post(apiUrl).send(channel)
    return res.body
  } catch (e) {
    console.error(e)
  }
}

export async function deleteChannel(channel) {
  try {
    const url = `${apiUrl}/${channel._id}`
    const res = await agent.delete(url).query()
    return res.body
  } catch (e) {
    console.error(e)
  }
}

export async function fetchMessages(channel) {
  try {
    const url = `${apiUrl}/${channel._id}/messages`
    const res = await agent.get(url).query()
    return res.body
  } catch (e) {
    console.error(e)
  }
}
