import { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

export const UseEffect = (props) => {


    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [status, setStatus] = useState("Ímpar")

  /* A hook that is called every time the number changes. */
    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

  
 /* Changing the title of the page when the fatorial is greater than 1 million. */
    useEffect(function() {
        if(fatorial > 1000000) {
            document.title = "Eita!!!"
        }
    }, [fatorial])

 /* A hook that is called every time the number changes. */
    useEffect(() => {
        setStatus(number %  2 === 0 ? "Par" : "Impar")
    },[number])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' :  fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02"/>

        <div  className="center">
            <span className="text">Status: </span>
            <span className="text red">{status}</span>
        </div>
        </div>
    )
}


