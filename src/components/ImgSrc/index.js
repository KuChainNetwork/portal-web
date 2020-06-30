import React, { useState, useEffect } from 'react';
import { pull } from 'utils/request';

const ImgSrc = ({ featured_media, title }) => {
  const [src, setSrc] = useState(undefined);

  useEffect(() => {
    const fetchImg = async () => {
      if (featured_media) {
        const { source_url } = await pull(`/news/api/wp-json/wp/v2/media/${featured_media}`);
        if (source_url) {
          setSrc(source_url);
        }
      }
    };
    fetchImg();
  }, [featured_media]);

  return <img src={src} alt={title ? title.rendered || '' : ''} />;
};

export default ImgSrc;
