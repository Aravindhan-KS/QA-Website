import React from 'react';
import PropTypes from 'prop-types';
import { InstagramEmbed } from 'react-social-media-embed';

const InstagramPostEmbed = ({ url = "https://www.instagram.com/p/DMAe-fcSvCb/" }) => {
  return (
    <div className="instagram-post-container">
      <InstagramEmbed 
        url={url}
        width={328}
        height={480}
        hideCaption={false}
        style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      />
    </div>
  );
};

InstagramPostEmbed.propTypes = {
  url: PropTypes.string
};

export default InstagramPostEmbed;