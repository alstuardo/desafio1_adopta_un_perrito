import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './assets/components/Header'
import MyCard from './assets/components/MyCard';

import Footer from './assets/components/Footer';

function App():JSX.Element {
 
  return (
    <>
    <Header title='Adopta un perrito'/>
    <MyCard
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurujju7jiO1mWYY6Pg_lsjmF2vCsLGzJeDA&usqp=CAU'
    name='Toby'
    description='Pastor siberiano 8 meses'
    color='success'
    text='Disponible'
    />

<MyCard
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurujju7jiO1mWYY6Pg_lsjmF2vCsLGzJeDA&usqp=CAU'
    name='Toby'
    description='Pastor siberiano 8 meses'
    color='success'
    text='Disponible'
    />

<MyCard
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurujju7jiO1mWYY6Pg_lsjmF2vCsLGzJeDA&usqp=CAU'
    name='Toby'
    description='Pastor siberiano 8 meses'
    color='success'
    text='Disponible'
    />

<MyCard
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurujju7jiO1mWYY6Pg_lsjmF2vCsLGzJeDA&usqp=CAU'
    name='Toby'
    description='Pastor siberiano 8 meses'
    color='success'
    text='Disponible'
    />
    <Footer text='
Bienvenido a nuestra encantadora galería de fotos de perritos en adopción. Sumérgete en un mundo de ternura y esperanza mientras exploras las imágenes de estos adorables compañeros peludos que están buscando un hogar amoroso, te invitamos a conocer a estos encantadores caninos, en la esperanza de que encuentren un lugar especial en tu corazón y en tu hogar. Adoptar no solo cambia la vida del perrito, sino que también enriquece la tuya. ¡Descubre el amor incondicional que estos amigos peludos están listos para ofrecer y considera la posibilidad de hacer de tu casa su hogar para siempre!'/>
    </>
  )
}

export default App
