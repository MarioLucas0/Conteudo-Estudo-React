import { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

/**
 * It takes two strings and merges them together.
 *  @returns a string that is the result of merging two strings.
 */
const merge = function(s1, s2) {
    return [...s1].map((e, i) => `${e}${s2[i] || ""}`).join("")
}

export const UseRef = props => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

/* A hook that is called every time the value1 changes. */
    useEffect(function() {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])
    
/* A hook that is called every time the value2 changes. */
     useEffect(function() {
        count.current++
        myInput1.current.focus()
    }, [value2])


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!" />
    
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                 {/*  Merging the two strings and adding a space between them.  */}
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input type="text" className="input" 
                    ref={myInput1}
                    value={value1} onChange={e => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2}
                    value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

