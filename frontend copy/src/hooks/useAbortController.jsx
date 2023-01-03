import { useRef, useEffect } from 'react'

const isAbortControllerSupported = window.hasOwnProperty('AbortController')
const noOp = () => null

const initAbortController = () => (
    isAbortControllerSupported
        ?
        new AbortController()
        : { abort: noOp, signal: {} }
)

const useAbortController = (shouldAutoRestart = false) => {
    const abortController = useRef(initAbortController())

    useEffect(() => {
        if (shouldAutoRestart && abortController.current.signal.aborted) {
            abortController.current = initAbortController()
        }
    }, [abortController.current.signal.aborted])

    useEffect(() => () => abortController.current.abort(), [])

    return abortController.current
}

export default useAbortController
