
import { useState, useEffect } from 'react'

function useFetch<T>(url: string, defaultValue: T) {

   const [data, setData] = useState<T>(defaultValue);
   const [isFetching, setIsFetching] = useState(true);

   useEffect(() => {
      console.log('se esta utilizando el hook')
      fetch(url)
         .then(dataCruda => dataCruda.json())
         .then(data => {
            setData(data)
            setIsFetching(false)
            console.log('la data en el fetch es', data)
         });
   }, [url]);

   const res: [typeof data , boolean] = [data, isFetching];
   return res
}



export default useFetch
