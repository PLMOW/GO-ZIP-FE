import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      ></meta>
    </Helmet>
  );
};

export default Head;
