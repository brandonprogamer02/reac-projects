import React from 'react'
import css from './GaleriaFotos.module.css'
interface props { }
interface style { }
class GaleriaFotos extends React.Component<props, style> {

   images = [
      {
         author: {
            name: 'Vlad Bagacian',
            avatar: 'https://images.pexels.com/users/avatars/381880/vlad-bagacian-302.jpeg?w=256&h=256&fit=crop&crop=faces'
         },
         source: 'https://images.pexels.com/photos/1368388/pexels-photo-1368388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
         views: 153,
         id: 1
      },
      {
         author: {
            name: 'Moreno Matković',
            avatar: 'https://images.pexels.com/users/avatars/1265479/moreno-matkovic-149.jpeg?w=256&h=256&fit=crop&crop=faces'
         },
         source: 'https://images.pexels.com/photos/2779539/pexels-photo-2779539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
         views: 214,
         id: 2
      },
      {
         author: {
            name: 'Jarod Lovekamp',
            avatar: 'https://images.pexels.com/users/avatars/1263347/jarod-lovekamp-411.jpeg?w=256&h=256&fit=crop&crop=faces'
         },
         source: 'https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
         views: 985,
         id: 3
      },
      {
         author: {
            name: 'Xandro Vandewalle',
            avatar: 'https://images.pexels.com/users/avatars/1431801/xandro-vandewalle-530.jpeg?w=256&h=256&fit=crop&crop=faces'
         },
         source: 'https://images.pexels.com/photos/2763239/pexels-photo-2763239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
         views: 124,
         id: 4
      },
      {
         author: {
            name: 'Two Dreamers',
            avatar: 'https://images.pexels.com/users/avatars/1190917/two-dreamers-438.jpeg?w=256&h=256&fit=crop&crop=faces'
         },
         source: 'https://images.pexels.com/photos/2717087/pexels-photo-2717087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
         views: 987,
         id: 5
      },
      {
         author: {
            name: 'Luis Quintero',
            avatar: 'https://images.pexels.com/users/avatars/447123/luis-quintero-294.jpeg?w=256&h=256&fit=crop&crop=faces'
         },
         source: 'https://images.pexels.com/photos/1408196/pexels-photo-1408196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
         views: 147,
         id: 6
      },
      {
         author: {
            name: 'Tobias Bjørkli',
            avatar: 'https://images.pexels.com/users/avatars/706370/tobias-bjorkli-371.jpeg?w=256&h=256&fit=crop&crop=faces'
         },
         source: 'https://images.pexels.com/photos/1940041/pexels-photo-1940041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
         views: 387,
         id: 7
      },
      {
         author: {
            name: 'Renato Abati',
            avatar: 'https://images.pexels.com/users/avatars/963082/renato-abati-706.jpeg?w=256&h=256&fit=crop&crop=faces'
         },
         source: 'https://images.pexels.com/photos/2768877/pexels-photo-2768877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
         views: 143,
         id: 8
      },
      {
         author: {
            name: 'Vlad Bagacian',
            avatar: 'https://images.pexels.com/users/avatars/381880/vlad-bagacian-302.jpeg?w=256&h=256&fit=crop&crop=faces'
         },
         source: 'https://images.pexels.com/photos/1368388/pexels-photo-1368388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
         views: 721,
         id: 9
      },
      {
         author: {
            name: 'Brayden Law',
            avatar: 'https://images.pexels.com/users/avatars/851295/brayden-law-840.jpeg?w=256&h=256&fit=crop&crop=faces'
         },
         source: 'https://images.pexels.com/photos/1829191/pexels-photo-1829191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
         views: 637,
         id: 10
      }
   ]
   render = () => {
      return (
         <div>
            <h2>A CONTINUACION LA REAL GALERIA DE FOTOS</h2>
            <div className={css['images']}>
               {this.images.map(image => (
                  <Image
                     image={image}
                     key={image.id}
                  />
               ))}
            </div>
         </div>
      )
   }
}

const Image = (props: tipo) => (
   <div className={css['card']}>
      <img
         src={props.image.source}
         alt='Imagen'
         className={css['image']}
         />
      <div className={css['footer']}>
         <img
            src={props.image.author.avatar}
            alt='Avatar'
            className={css['avatar']}
            />
         <div>
            {props.image.author.name}
         </div>
         <div>
            {props.image.views}
         </div>
      </div>
   </div>
)
interface tipo {
   image:
   {
      source: string ;
      author: {
         avatar: string ;
         name: React.ReactNode
      };
      views: React.ReactNode
   }
}

export default GaleriaFotos