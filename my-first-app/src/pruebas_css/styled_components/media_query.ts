const sizes = {
   mobile: '430px',
   tablet: '800px',
   desktop: '1024px'
}

export const devices = {
   desktop: (styles: string) => (`@media screen and (max-width:${sizes.desktop}){ 
      ${styles} 
   }`),
   tablet: (styles: string) => (`@media screen and (max-width:${sizes.tablet}){ 
      ${styles} 
   }`),
   
   mobile: (styles: string) => (`@media screen and (max-width:${sizes.mobile}){
      ${styles}
   }`)
}

