import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from './footer'

const FooterQuery = graphql`
  query Footer {
    strapiFooter {
      Copyright
      Contact {
        childMarkdownRemark {
          html
        }
      }
      Sitemap {
        Link {
          ...StrapiLinkFragment
        }
      }
      PrivacyPolicy {
        Link {
          ...StrapiLinkFragment
        }
      }
      TermsOfUse {
        Link {
          ...StrapiLinkFragment
        }
      }
      LinkLists {
        LinkList {
          id
          HeadingLink {
            Link {
              ...StrapiLinkFragment
            }
          }
          Links {
            Link {
              ...StrapiLinkFragment
            }
          }
        }
      }
    }
  }
`

const FooterWrapper = () => {
  const data = useStaticQuery(FooterQuery)
  return <Footer data={data.strapiFooter} />
}

export default FooterWrapper
