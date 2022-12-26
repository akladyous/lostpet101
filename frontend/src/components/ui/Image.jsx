import { useState, useCallback, useEffect, useRef } from 'react';

export function Image(props) {
  const { sourceImage, fallBackImage, ...rest } = props || {};
  const [image, setImage] = useState(sourceImage || fallBackImage);
  const isMounted = useRef(false);

  const onLoad = useCallback(() => {
    setImage(sourceImage);
  }, [sourceImage]);
  const onError = useCallback(() => {
    setImage(fallBackImage);
  }, [sourceImage]);

  useEffect(() => {
    isMounted.current = true;
    if (!isMounted.current) return;

    const img = new window.Image();
    img.src = sourceImage;
    img.addEventListener('load', onLoad);
    img.addEventListener('error', onError);

    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('onerror', onError);
      isMounted.current = false;
    };
  }, [sourceImage, onLoad, onError]);

  if (!image) return fallBackImage;
  return <img src={image} {...rest} />;
}
