import { useRef, useMemo, useState, useReducer, useCallback } from 'react';

export function useSteps({ titles }) {
    const lastIndex = useRef(titles.length - 1);
    const currentIndex = useRef(0);

    const next = useCallback((data) => {
        if (currentIndex.current < lastIndex.current) {
            currentIndex.current += 1;
        } else if (currentIndex.current === lastIndex.current) {
            onFinish();
        }
    }, []);

    const previous = useCallback((e) => {
        e.preventDefault();
        if (currentIndex.current > 0) {
            currentIndex.current -= 1;
        }
    }, []);

    const onFinish = () => {
        //
    };
    const isFirstStep = currentIndex.current === 0;
    const isLastStep = currentIndex.current === lastIndex.current;
    return { currentIndex, lastIndex, next, previous };
}
