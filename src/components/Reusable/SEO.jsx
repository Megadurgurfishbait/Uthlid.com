import React from 'react';
import {Helmet} from 'react-helmet';

const SEO = ({ title, description, keywords}) => (

    <Helmet>
      <title> { "Úthlíð | " + title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords}  />
      <meta theme ="#373737" />
    </Helmet>

);


export default SEO;