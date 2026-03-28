export const fetchNews = async () => {
  try {
    const response = await fetch(
       'https://funpligef-assets.s3.amazonaws.com/news.json?t=' + Date.now()
    )

    if (!response.ok) {
      throw new Error('Error fetching news from S3')
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching S3 news:', error)
    return []
  }
}