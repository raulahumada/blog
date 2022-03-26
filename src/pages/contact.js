import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = ({ data: { site } }) => {
  console.log(site);
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={'Contact page of ' + site.siteMetadata.description}
        />
      </Helmet>
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`,
            marginBottom: 0,
          }}
        >
          <h1 className="post-title">Contáctame</h1>
          <p>Déjame ayudarte a poner en marcha tu próximo proyecto &rarr;</p>
        </div>
        <div>
          <form
            className="form-container"
            action="https://formsubmit.co/raulahumada00@gmail.com"
            method="post"
          >
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label htmlFor="w3lName">Nombre</label>
              <input type="text" name="name" id="w3lName" />
            </div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input type="email" name="email" id="w3lSender" />
            </div>
            <div>
              <label>Asunto</label>
              <input type="text" name="_subject" />
            </div>
            <div>
              <label>Mensaje</label>
              <textarea name="message" style={{ resize: 'none' }}></textarea>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <input
                type="submit"
                className="button -primary"
                style={{ marginRight: 0 }}
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
