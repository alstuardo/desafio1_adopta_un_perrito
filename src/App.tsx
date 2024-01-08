import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './assets/components/Header'
import MyCard from './assets/components/MyCard';

import Footer from './assets/components/Footer';

function App():JSX.Element {
 

  return (
    <>
    <Header title='Adopta un perrito'/>
    <section className='card-container'>
    <MyCard 
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurujju7jiO1mWYY6Pg_lsjmF2vCsLGzJeDA&usqp=CAU'
    name='Loky'
    description='¡Conoce a nuestro propio héroe canino, Loki! Al igual que su homónimo de Marvel, este perrito es todo un encantador y travieso personaje. Con 8 meses, Loki es un compañero juguetón y leal, listo para aventuras emocionantes.'
    color='success'
    text='Disponible'
    />

<MyCard
    image='https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=600'
    name='Thor'
    description='¡Conoce a Thor, nuestro poderoso amigo de cuatro patas! Al igual que su homónimo de Marvel, Thor es un perro valiente y fuerte, listo para robarse tu corazón. Con dos meses, Thor es un compañero leal y juguetón.'
    color='success'
    text='Disponible'
    />

<MyCard
    image='https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?auto=compress&cs=tinysrgb&w=600'
    name='Ironman'
    description='Al igual que el genio multimillonario, filántropo y superhéroe, este Iron Man de cuatro patas tiene una personalidad única que te dejará asombrado. Es inteligente, juguetón y siempre está listo para la acción.'
    color='danger'
    text='Adoptado'
    />

<MyCard
    image='https://images.pexels.com/photos/3498989/pexels-photo-3498989.jpeg?auto=compress&cs=tinysrgb&w=300'
    name='Hawkeyes'
    description='Como el arquero maestro, Hawkeye es observador y siempre está atento a su entorno. Su personalidad única y su lealtad lo convierten en el compañero perfecto para aventuras cotidianas que necesitas.'
    color='danger'
    text='Adoptado'
    />

<MyCard
    image='https://images.pexels.com/photos/1954515/pexels-photo-1954515.jpeg?auto=compress&cs=tinysrgb&w=600'
    name='Hulk'
    description='Aunque pueda parecer grande y poderoso, Hulk es un amoroso compañero con un corazón tierno. Su energía contagiosa y su lealtad hacen de él un perro extraordinario para aquellos que buscan una fuerza amigable en su hogar.'
    color='success'
    text='Disponible'
    />

<MyCard
    image='https://images.pexels.com/photos/11605151/pexels-photo-11605151.jpeg?auto=compress&cs=tinysrgb&w=300'
    name='Black'
    description='Black, lleva consigo una elegancia única y un aura regia. Su pelaje oscuro y brillante es tan imponente como su personalidad refinada. Este cachorro leal, proporcionará la compañía de un compañero distinguido.'
    color='success'
    text='Disponible'
    />
    </section>
    <Footer text='
Bienvenido a nuestra encantadora galería de fotos de perritos en adopción. Sumérgete en un mundo de ternura y esperanza mientras exploras las imágenes de estos adorables compañeros peludos que están buscando un hogar amoroso, te invitamos a conocer a estos encantadores caninos, en la esperanza de que encuentren un lugar especial en tu corazón y en tu hogar. Adoptar no solo cambia la vida del perrito, sino que también enriquece la tuya. ¡Descubre el amor incondicional que estos amigos peludos están listos para ofrecer y considera la posibilidad de hacer de tu casa su hogar para siempre!'/>
    </>
  )
}

export default App
