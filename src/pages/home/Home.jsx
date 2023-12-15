import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import bg1 from '../../assets/bg1.avif'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
      <Topbar/>
      <div className='' style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>
        <div className='text-center flex flex-col justify-center items-center text-stone-700 max-w-2xl p-4 ml-6'>
              <h1 className='text-5xl font-serif mb-9 mt-24'>RITS HOMECARE</h1>
              <p className='text-xl font-serif text-white bg bg-blue-200 bg-opacity-10'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum fuga nobis ratione blanditiis deleniti nisi iste vitae atque repellendus unde vero, quos reiciendis amet rerum, incidunt explicabo ipsam necessitatibus voluptate dolor? Omnis blanditiis, est cum possimus eaque expedita. Minus quae cumque mollitia ut illum delectus eos, consequatur eligendi, harum reiciendis facere impedit adipisci sapiente autem ad omnis cupiditate dolorem, explicabo non nisi! Architecto repudiandae doloremque culpa? Voluptas rerum mollitia, natus maiores dolore perferendis aliquid possimus atque iusto et itaque animi veniam a distinctio esse similique! Reprehenderit nostrum eius ipsa sequi tempore cum, dolor libero labore sunt non nemo ducimus qui veniam! Dicta, tenetur quos dolorem blanditiis quasi corporis, natus provident reprehenderit ut molestiae, eum voluptatibus minus esse optio nemo facilis tempora recusandae nihil.
              </p>
              <div className='mt-6'>
                <button className='mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue'>
                  Learn more
                </button>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green'>
                  Contact us
                </button>
              </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home