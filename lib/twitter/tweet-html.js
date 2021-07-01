import cheerio from 'cheerio'

export function getVideo(html, { poster, url }) {
  const $ = cheerio.load(html, {
    decodeEntities: false,
    xmlMode: false,
  })
  const container = $('[data-type=video-container]')
  const video = $(`<video poster="${poster}" controls preload="none" playsinline>`).append(
    `<source src="${url}" type="video/mp4">`
  )

  return $('<div>').append(container.append(video)).html()
}
