import { gql } from '@apollo/client';

export const HOME_PAGE_DATA = gql`
  query {
    homePage {
      data {
        attributes {
          landingTitle
          landingSubTitle
          landingButtonText
          portfolioPreviews {
            __typename
            ... on ComponentPortfolioPreviewPortfolio {
              platform
              title
              roles {
                title
              }
              portfolioImage {
                altText
                image {
                  data {
                    attributes {
                      formats: url
                    }
                  }
                }
              }
            }
          }
          experiences {
            __typename
            ... on ComponentExperienceExperience {
              title
              body
            }
          }
          socials {
            __typename
            ... on ComponentProfessionalPresencePresence {
              title
              email
              link {
                title
                link
              }
            }
          }
        }
      }
    }
  }
`;
