import { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

/**
 * `useCallback` returns a memoized callback
 * @returns A memoized function.
 */

export const UseCallback = props => {
    
    const [count, setCount] = useState(0)
    
/* Creating a memoized function. */
    const inc = useCallback(function (delta) {
        setCount(current => current + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!" />

            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

