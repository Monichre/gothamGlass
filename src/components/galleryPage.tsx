import React from 'react'

import { Gallery } from './gallery'

export interface HomePageProps {
  images: any
}

export const GalleryPage: React.SFC<HomePageProps> = ({ images }) => {
  return <Gallery items={images} />
}
