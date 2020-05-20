import * as React from 'react'
import AppLoadQuery from '../HOC/AppLoadQuery'
import { StaticQuery, graphql } from 'gatsby'
import {
  HeroBanner,
  Paragraph,
  HeaderTwo,
  ActionsMenu,
} from '../components/heroBanner'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { ScheduleAppointment } from '../components/scheduleAppointment'

export interface ContentProps {
  children: any
}

const Content: React.SFC<ContentProps> = ({ children }) => {
  return <Paragraph>{children}</Paragraph>
}

const GlassRepair = () => (
  <StaticQuery
    query={graphql`
      query GlassRepairQuery {
        contentfulPage(name: { eq: "Emergency Glass Repair" }) {
          name
          pageSections {
            header
            title
            childContentfulPageSectionContentRichTextNode {
              json
            }
            featuredImage {
              file {
                url
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      console.log('data: ', data)
      // tslint:disable-next-line:no-console
      const {
        contentfulPage: { pageSections },
      } = data

      const hero = pageSections.find(
        (section: any) => section.title === 'Hero CTA'
      )
      console.log('hero: ', hero)

      // const document = {
      //   nodeType: 'document',
      //   content: [
      //     {
      //       nodeType: 'embedded-entry-block',
      //       data: {
      //         target: (...)Link<'Entry'>(...);
      //       },
      //     },
      //   ]
      // };
      const options = {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
            <Content>{children}</Content>
          ),
        },
      }

      const pContent = documentToReactComponents(
        hero.childContentfulPageSectionContentRichTextNode.json,
        options
      )
      console.log('pContent: ', pContent)

      return (
        <AppLoadQuery>
          <HeroBanner backgroundImage={hero.featuredImage.file.url}>
            <div className='content'>
              <HeaderTwo>{hero.header}</HeaderTwo>
              {pContent}
            </div>
            <ActionsMenu>
              <ScheduleAppointment />
            </ActionsMenu>
          </HeroBanner>
        </AppLoadQuery>
      )
    }}
  />
)

export default GlassRepair
