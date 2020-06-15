import React from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import GoogleMap from '../components/GoogleMap'
import Layout from '../components/Layout'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  address,
  address1,
  phone,
  phone1,  
  email,
  locations
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <Content source={body} />
          <div className="Contact--Details">
            {address && (
              <a
                className="Contact--Details--Item"
                href="https://goo.gl/maps/fe2whESTTuTcNDYM8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address}
              </a>
            )}
{address1 && (
              <a
                className="Contact--Details--Item"
                href="https://goo.gl/maps/bcJTkrNRTpKPApB59"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address1}
              </a>
            )}
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <Smartphone /> {phone}
              </a>
            )}
{phone1 && (
              <a className="Contact--Details--Item" href={`tel:${phone1}`}>
                <Smartphone /> {phone1}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
          </div>
        </div>

        <div>
          <FormSimpleAjax name="Contact Form" />
        </div>
      </div>
    </section>

    <GoogleMap locations={locations} />
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        address
        address1
        phone
        phone1
        email
        locations {
          mapLink
          lat
          lng
        }
      }
    }
  }
`
