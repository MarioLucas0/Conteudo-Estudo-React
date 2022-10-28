import { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

export const UseRef = props => {
 /* Creating a state variable called `value1` and a ref variable called `count`. */
    const [value1, setValue1] = useState("")
    const count = useRef(0)

  /* Incrementing the count.current value by 1 every time the value1 changes. */
    useEffect(() => {
      count.current = count.current + 1
    },[value1])

  return (
    <div className="useref">
      <PageTitle title="Hook UseRef" subtitle="Retorna um Objeto mutavel com a propidade"/>

      <SectionTitle  title="Exercicio #01"/>

      <div className="center">
        <div>
        <span className="text">Valor: </span>
         <span className="text">{value1} [</span>
         <span className="text">{count.current}</span>
         <span className="text">]</span>
        </div>

        {/*   A controlled component.  */}
          <input type="text" className="input" value={value1}  onChange={e => setValue1(e.target.value)}/>
      </div>
      
    </div>
  )

  
};

