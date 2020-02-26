import * as React from 'react'
import { Slide } from 'react-reveal'
export interface GalleryProps {
  items: any[]
}

export const Gallery: React.SFC<GalleryProps> = ({ items }: any) => {
  const chunk = (array: any, size: any) => {
    const chunked_arr = []
    for (let i = 0; i < array.length; i++) {
      const last = chunked_arr[chunked_arr.length - 1]
      if (!last || last.length === size) {
        chunked_arr.push([array[i]])
      } else {
        last.push(array[i])
      }
    }

    return chunked_arr
  }

  const galleryImages = chunk(items, 2)

  return (
    <section id='work' className=' style3 primary'>
      <div className='content container'>
        <header>
          <h2>Gallery</h2>
        </header>

        <div className='container 75% gallery'>
          {galleryImages
            .filter(imageChunk => imageChunk.length === 2)
            .map((imageChunk, index) => (
              <div className='row 0% images'>
                <Slide left>
                  <div className='6u 12u(mobile)'>
                    <a
                      href={imageChunk[0].file.url}
                      className='image fit from-left'
                    >
                      <img
                        src={imageChunk[0].file.url}
                        alt='Gotham Glass Interior Photo'
                      />
                    </a>
                  </div>
                </Slide>

                {imageChunk[1] && (
                  <Slide right>
                    <div className='6u 12u(mobile)'>
                      <a
                        href={imageChunk[1].file.url}
                        className='image fit from-right'
                      >
                        <img
                          src={imageChunk[1].file.url}
                          alt='Gotham Glass Interior Photo'
                        />
                      </a>
                    </div>
                  </Slide>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
