import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react'


const Hijo = forwardRef((props, ref) => {
   const [inputValue, setInputValue] = useState('Aqui no hay nada todavia')
   useImperativeHandle(ref, () => ({
      inputValue: inputValue,
      setInputValue: (value: string) => setInputValue(value)
   }))

   return (
      <div>
         <input type="text" disabled value={inputValue} />
      </div>
   )
})

const App = () => {
   const refHijo: any = useRef(null)
   const [countButton, setCountButton] = useState(0)
   // componentDidMoun - componentDidUpdate
   useEffect(() => {
      refHijo.current.setInputValue(countButton)
   }, [countButton])

   return (
      <div>
         <button
            onClick={() => setCountButton(countButton + 1)}
         >Aumentar ({countButton}) </button>
         < Hijo ref={refHijo} />
      </div>
   )
}

export default App