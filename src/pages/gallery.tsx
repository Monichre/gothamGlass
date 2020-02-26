// import React from 'react'
// import Layout from '../components/layout'
// import { GalleryPage } from '../components/GalleryPage'
// import { StaticQuery, graphql } from 'gatsby'

// export interface GalleryProps {}

// const Gallery: React.SFC<GalleryProps> = () => {
//   return (
//     <Layout>
//       <StaticQuery
//         query={graphql`
//           query GalleryPage {
//             contentfulPage(name: { eq: "Gallery" }) {
//               name
//               gallery {
//                 ... on ContentfulHomeGallery {
//                   id
//                   images {
//                     file {
//                       url
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         `}
//         render={data => {
//           // tslint:disable-next-line:no-console
//           console.log(`TCL: data`, data)
//           const {
//             contentfulPage: { gallery }
//           } = data

//           return <GalleryPage images={gallery.images} />
//         }}
//       />
//     </Layout>
//   )
// }

// export default Gallery
