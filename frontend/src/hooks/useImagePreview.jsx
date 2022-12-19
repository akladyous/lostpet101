import { useState, useCallback, useEffect, useRef } from "react";

export function useImagePreview(props) {
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
    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);

    console.log("Image  sourceImage: ", sourceImage);

    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("onerror", onError);
      isMounted.current = false;
    };
  }, [sourceImage, onLoad, onError]);

  if (!image) return null;
  return <img src={image} {...rest} />;
}
