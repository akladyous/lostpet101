import { useState, useCallback, useEffect, useRef } from 'react';

export default function Image(props) {
    const { sourceImage, fallBackImage, alt, ...others } = props || {};
    const [image, setImage] = useState(sourceImage || fallBackImage);
    const isMounted = useRef(false);

    const onLoad = useCallback(() => {
        setImage(sourceImage);
    }, [sourceImage]);
    const onError = useCallback(() => {
        setImage(fallBackImage);
    }, [fallBackImage]);

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

    if (!image) return null;
    return <img src={image} alt={alt || 'image'} {...others} />;
}
