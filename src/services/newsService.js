// Simple RSS parser without external dependencies
const RSS_URL =
  'https://news.google.com/rss/search?q=educacion+medio+ambiente&hl=es-419&gl=DO&ceid=DO:es-419'

const CORS_PROXY = 'https://api.allorigins.win/raw?url='

export const fetchNews = async () => {
  try {
    const response = await fetch(
      CORS_PROXY + encodeURIComponent(RSS_URL)
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const xmlText = await response.text()
    
    // Parse XML using DOMParser (built-in browser API)
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
    
    // Get all items from RSS
    const items = xmlDoc.querySelectorAll('item')
    
    if (!items || items.length === 0) {
      console.warn('No items found in RSS feed')
      return []
    }

    // Convert NodeList to Array and map to our format
    const itemsArray = Array.from(items).slice(0, 8).map((item, index) => {
      const title = item.querySelector('title')?.textContent || ''
      const description = item.querySelector('description')?.textContent || ''
      const link = item.querySelector('link')?.textContent || ''
      const pubDate = item.querySelector('pubDate')?.textContent || ''
      
      return {
        id: index + 1,
        title: cleanText(title),
        excerpt: cleanText(description),
        date: formatDate(pubDate),
        url: link,
        source: 'Google News',
        category: detectCategory(title)
      }
    })

    return itemsArray
  } catch (error) {
    console.error('Error fetching RSS:', error)
    // Return empty array to show "no news" message
    return []
  }
}

const cleanText = (text) => {
  return text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&[^;]+;/g, ' ') // Replace HTML entities
    .trim()
}

const formatDate = (dateString) => {
  if (!dateString) return 'Fecha desconocida'
  
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-DO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (error) {
    console.warn('Date parsing error:', error)
    return 'Fecha desconocida'
  }
}

const detectCategory = (title) => {
  const t = title.toLowerCase()

  if (t.includes('educa') || t.includes('escuela') || t.includes('universidad') || t.includes('estudiante')) {
    return 'Educación'
  }

  if (t.includes('clima') || t.includes('ambiente') || t.includes('medio') || t.includes('ecología') || t.includes('sostenible')) {
    return 'Medio Ambiente'
  }

  if (t.includes('salud') || t.includes('médic') || t.includes('hospital')) {
    return 'Salud'
  }

  if (t.includes('economía') || t.includes('inversión') || t.includes('negocio')) {
    return 'Economía'
  }

  return 'General'
}