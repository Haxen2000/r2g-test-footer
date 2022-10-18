import React from 'react'
import renderer from 'react-test-renderer'
import * as financeHelper from '@helpers/finance'
// import * as emailHelper from '@helpers/email'
import Footer from './footer'

jest.mock('../shared/link', () => 'RTGLink')

jest.mock('./email-subscribe-form', () => 'EmailSubscribeForm')

beforeEach(() => {
  financeHelper.getFinancePlans = jest.fn(() => [{ promoMessage: 'Test Promo Message' }])
})

describe('Footer', () => {
  const testProps = {
    activeMenu: '',
    email: '',
    zip: '',
    error: null,
    success: null,
    submitted: false,
    loading: false,
    fields: [false, false],
    setState: jest.fn(),
    node: {
      Copyright: 'Copyright &copy; 2021 Rooms To Go. All Rights Reserved',
      Contact: {
        childMarkdownRemark: {
          html:
            '<p><span class="heading no-border" role="heading" aria-level="3">Connect With Us</span>\t\t\t\t\t</p>\n<p>Mon-Sat: 9am - 10pm EST<br/>Sun: 11am - 7pm EST</p>\n<p>Internet Sales:<br/><a href="tel:888-709-5380">(888)&nbsp;709-5380</a>&nbsp;Option&nbsp;#1</p>\n<p>All Other Inquiries:<br/><a href="tel:800-766-6786">(800) 766-6786</a></p>\n<p>Want to Text with us?<br/>Message ROOMS (76667)<br/>Keyword SALES or CARE</p>',
        },
      },
      Sitemap: {
        Link: {
          id: 'link:5009',
          Title: 'Sitemap',
          DisplayText: null,
          InternalUrl: '/sitemap',
          ExternalUrl: null,
          Color: null,
          Target: null,
          AlternateDescription: 'View Sitemap',
        },
      },
      PrivacyPolicy: {
        Link: {
          id: 'link:21',
          Title: 'Link : Customer Service - Privacy Notice',
          DisplayText: 'Privacy Notice',
          InternalUrl: '/customer-service/privacy-policy',
          ExternalUrl: 'https://legal.roomstogo.com/rtg-online#contract-fxauo3tp2',
          Color: null,
          Target: '_blank',
          AlternateDescription: 'View the Privacy Notice',
        },
      },
      TermsOfUse: {
        Link: {
          id: 'link:14',
          Title: 'Link : Customer Service - Terms of Use',
          DisplayText: 'Terms of Use',
          InternalUrl: '/customer-service/terms-of-use',
          ExternalUrl: 'https://legal.roomstogo.com/rtg-online#contract-7siltltgm',
          Color: null,
          Target: '_blank',
          AlternateDescription: 'View our Terms of Use & Dispute Resolution/Arbitration Agreement',
        },
      },
      LinkLists: [
        {
          LinkList: {
            HeadingLink: {
              Link: {
                id: 'link:4945',
                Title: 'COMPANY',
                DisplayText: null,
                InternalUrl: '/company',
                ExternalUrl: null,
                Color: null,
                Target: null,
                AlternateDescription: 'View Company Information',
              },
            },
            Links: [
              {
                Link: {
                  id: 'link:515',
                  Title: 'Link :  About Us',
                  DisplayText: 'About Us',
                  InternalUrl: '/about-us',
                  ExternalUrl: null,
                  Color: null,
                  Target: null,
                  AlternateDescription: 'About Us',
                },
              },
              {
                Link: {
                  id: 'link:3015',
                  Title: 'Link : Careers',
                  DisplayText: 'Careers',
                  InternalUrl: '/careers',
                  ExternalUrl: 'https://careers.roomstogo.com/',
                  Color: null,
                  Target: '_blank',
                  AlternateDescription: 'Careers (opens in new window)',
                },
              },
              {
                Link: {
                  id: 'link:5028',
                  Title: 'Find a Showroom',
                  DisplayText: null,
                  InternalUrl: '/stores',
                  ExternalUrl: null,
                  Color: null,
                  Target: null,
                  AlternateDescription: 'Find a Showroom',
                },
              },
              {
                Link: {
                  id: 'link:3308',
                  Title: 'Link : Home Blog',
                  DisplayText: 'Home Blog',
                  InternalUrl: '/home-blog',
                  ExternalUrl: 'https://blog.roomstogo.com/',
                  Color: null,
                  Target: null,
                  AlternateDescription: 'Home Furniture Blog',
                },
              },
              {
                Link: {
                  id: 'link:5001',
                  Title: 'Link : Rooms To Go - Outlet',
                  DisplayText: 'Rooms To Go Outlet',
                  InternalUrl: 'https://www.roomstogo-outlet.com/',
                  ExternalUrl: 'https://www.roomstogo-outlet.com',
                  Color: null,
                  Target: '_blank',
                  AlternateDescription: 'Shop Rooms To Go Outlet (opens in new window)',
                },
              },
              {
                Link: {
                  id: 'link:4664',
                  Title: 'Link : Furniture.com',
                  DisplayText: 'Furniture.com',
                  InternalUrl: 'https://www.furniture.com',
                  ExternalUrl: 'https://www.furniture.com',
                  Color: null,
                  Target: '_blank',
                  AlternateDescription: 'Furniture.com (opens in new window)',
                },
              },
            ],
          },
        },
      ],
    },
  }

  it('renders correctly with default props', () => {
    renderer.create(<Footer {...testProps} />).toJSON()
  })

  // it('calls setState on email input change', () => {
  //   const tree = renderer.create(<Footer {...testProps} />)
  //   tree.root.findByProps({ className: 'signup-email' }).props.onChange({ target: { value: 'hi' } })
  //   expect(testProps.setState).toHaveBeenCalled()
  // })

  // it('calls setState on zip input change', () => {
  //   const tree = renderer.create(<Footer {...testProps} />)
  //   tree.root.findByProps({ className: 'signup-zip' }).props.onChange({ target: { value: 'hi' } })
  //   expect(testProps.setState).toHaveBeenCalled()
  // })

  // it('calls emailSubscribe on submit click', () => {
  //   const tree = renderer.create(<Footer {...testProps} />)
  //   emailHelper.emailSubscribe = jest.fn()
  //   tree.root.findByProps({ className: 'signup-btn' }).props.onClick()
  //   expect(emailHelper.emailSubscribe).toHaveBeenCalled()
  // })
})
