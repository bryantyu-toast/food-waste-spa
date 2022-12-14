let token = null
export const getAuthenticityToken = () => {
  if (!token) {
    const element = document.getElementById('authenticity-token')
    if (element) {
      token = element.value
    }
    if (!token) {
      console.warn('authenticity token not found')
    }
  }
  return token
}
