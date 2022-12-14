import { useRef, useMemo, useState, useCallback } from 'react';

export function useFormWizard({ steps }) {
    const lastIndex = useRef(steps.length - 1);
    const [currentIndex, setCurrentIndex] = useState(0);
    // const currentIndex = useRef(0);

    const next = useCallback((data) => {
        if (currentIndex < lastIndex.current) {
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex.current === lastIndex.current) {
            onFinish();
        }
    }, []);

    const previous = useCallback((e) => {
        e.preventDefault();
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }, []);

    const onFinish = () => {
        //
    };
    const isFirstStep = currentIndex.current === 0;
    const isLastStep = currentIndex.current === lastIndex.current;
    return { currentIndex, lastIndex, next, previous };
}
