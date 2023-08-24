import Head from 'next/head';
import {
  BsFillMoonStarsFill,
  BsFillLightningFill,
  BsFillBriefcaseFill,
  BsLink45Deg,
} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import Image from 'next/image';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/terpel.png';
import web2 from '../public/test.png';
import magento_icon from '../public/magento-icon.svg';
import js_icon from '../public/js.svg';
import vuejs_icon from '../public/vue-js-icon.svg';
import reactjs_icon from '../public/react-js-icon.svg';
import xml_icon from '../public/xml-file-icon.svg';
import php_icon from '../public/php-icon.svg';
import css_icon from '../public/css-icon.svg';
import html_icon from '../public/html-icon.svg';

import Tetss from './testss.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wilmer Pungo Porfolio</title>
        <meta name="description" content="Wilmer Pungo web porfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='hidden'>
        <header className='bg-white mx-5 md:gap-32 px-5 xs:px-10 my-6 sm:px-14 xl:max-w-7xl xl:mx-auto py-10 mb-3 flex justify-between'>
          <h1 className='text-xl font-burtons'>Wilmer Pungo</h1>
          <ul className='flex items-center gap-3 '>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
            </li>
            <li>ES</li>
          </ul>
        </header>
        <main className='bg-white mx-5 md:gap-32 px-5 xs:px-10 my-6 sm:px-14 xl:max-w-7xl xl:mx-auto flex flex-col gap-16'>      
          <section className='main flex flex-col items-center'>
            {/* <Image src={deved} width={200} height={200} alt='image' /> */}
            <div className='py-10'>
              <h2 className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl 2xl:text-8xl py-2 font-medium lg-hidden'>Soy <span className='text-indigo-500'>Wilmer Pungo</span> desarrollador front-end especializado en Magento.</h2>
              <p className='text-md py-4 leading-7 text-gray-800'>Potenciando la excelencia visual y funcional hacia el éxito digital</p>
              <div className='flex justify-between items-center gap-3 text-gray-800'>
                <div className='text-4xl flex justify-center gap-3 py-1 text-gray-800'>
                  <a href="https://github.com/pungow"><AiFillGithub /></a>                  
                  <a href="https://www.linkedin.com/in/wilmerpungo-developer/"><AiFillLinkedin /></a>                  
                </div>
                <a className='text-white bg-indigo-500 px-4 py-2 rounded-md' href="#">Resume</a>
              </div>
            </div>
          </section>

          <section className='w-full'>
            <header className='font-bold text-2xl text-indigo-400 mb-6 flex items-center gap-3'>
              <div><BsFillLightningFill className='cursor-pointer text-2xl'/></div>
              <h2>Proyectos</h2>
            </header>
            <div className='grid gap-10'>
              <article className='grid gap-4 sm:gap-7 md:grid-cols-2'>
                <a href="" className='bg-cover bg-center max-w-sm max-h-xs rounded-lg'>
                  <Image src={web1} alt='design' className='bg-cover w-auto rounded-r-lg'/>
                </a>
                <div className='flex flex-col gap-2.5 justify-center'>
                  <h3 className='font-bold text-3xl text-slate-800'>Tiendas TIA</h3>
                  <p>La nueva y renovada tienda, con markeplace incluido</p>
                  <div className='flex gap-3 items-center '>
                    <a href=""><Image src={magento_icon} width={20} height={20} alt='design' /></a>
                    <a href=""><Image src={js_icon} width={20} height={20} alt='design' /></a>
                    <a href=""><Image src={html_icon} width={20} height={20} alt='design' /></a>
                    <a href=""><Image src={css_icon} width={20} height={20} alt='design' /></a>
                    <a href=""><Image src={xml_icon} width={20} height={20} alt='design' /></a>
                  </div>
                  <a className='text-white bg-indigo-500 px-4 py-2 rounded-md flex w-fit ' href="#">Link 
                  <BsLink45Deg className='cursor-pointer text-2xl ml-2'/>
                  </a>
                </div>
              </article>
              <article className='grid gap-4 sm:gap-7 md:grid-cols-2'>
                <a href="" className='bg-cover bg-center max-w-sm max-h-xs rounded-lg'>
                  <Image src={web2} alt='design' className='bg-cover w-auto rounded-r-lg'/>
                </a>
                <div className='flex flex-col gap-2.5 justify-center'>
                  <h3 className='font-bold text-3xl text-slate-800'>Tiendas TIA</h3>
                  <p>La nueva y renovada tienda, con markeplace incluido</p>
                  <div className='flex gap-3 items-center '>
                    <a href=""><Image src={magento_icon} width={20} height={20} alt='design' /></a>
                    <a href=""><Image src={js_icon} width={20} height={20} alt='design' /></a>
                    <a href=""><Image src={html_icon} width={20} height={20} alt='design' /></a>
                    <a href=""><Image src={css_icon} width={20} height={20} alt='design' /></a>
                    <a href=""><Image src={xml_icon} width={20} height={20} alt='design' /></a>
                  </div>
                  <a className='text-white bg-indigo-500 px-4 py-2 rounded-md flex w-fit ' href="#">Link 
                  <BsLink45Deg className='cursor-pointer text-2xl ml-2'/>
                  </a>
                </div>
              </article>
              
              <article>

              </article>
            </div>
          </section>

          <section className='w-full'>
            <header className='font-bold text-2xl text-indigo-400 mb-6 flex items-center gap-3'>
              <div><BsFillBriefcaseFill className='cursor-pointer text-2xl'/></div>
              <h2>Experiencia</h2>
            </header>

            <h3>
              <span className='text-2xl font-bold'>Front-end Developer (Magento) -
              <a href="https://www.omni.pro/es/" className='underline'>Omni.pro </a></span>
              <p>Nov 2021 - May 2023 </p>
            </h3>
            <ul>
              <li>Gestión integral y optimización de tiendas en línea mediante Magento.</li>
              <li>Desarrollo de sitios de comercio electrónico con enfoque en UX y diseño responsivo.</li>
              <li>Integración de extensiones para mejorar la funcionalidad y la eficiencia operativa</li>
              <li>Mejoré en un 50% la velocidad de carga de una tienda Magento a través de optimización.</li>
              <li>Incrementé conversiones en un 30% con estrategias de optimización y UX.</li>
              <li>Diseñé sitios de comercio electrónico únicos que impulsaron ventas en línea.</li>
            </ul>
          </section>

          <section>
            <div>
              <h3 className='text-3xl py-1'>Services I offer</h3>
              <p className='text-md py-2 leading-8 text-gray-800'>I am a excelent transmite UI desing to siteWeb speciales in <span className='text-orange-600'>Magento</span> and other services the e-commerce </p>
            </div>
            <div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={design} width={100} height={100} alt='design' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Disenos maravillosos</h3>
                <p className='py-2'>Creando disenos elgantes desde UI a la practica</p>

                <h4 className='text-teal-600 py-4'>Herarmientas Usada</h4>
                <p className='text-gray-800 py-1'>Magento (Abode Commerce)</p>
                <p className='text-gray-800 py-1'>JavaScript</p>
                <p className='text-gray-800 py-1'>PHP</p>
                <p className='text-gray-800 py-1'>LESS</p>
              </div>

              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={code} width={100} height={100} alt='design' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Disenos maravillosos</h3>
                <p className='py-2'>Creando disenos elgantes desde UI a la practica</p>

                <h4 className='text-teal-600 py-4'>Herarmientas Usada</h4>
                <p className='text-gray-800 py-1'>Magento (Abode Commerce)</p>
                <p className='text-gray-800 py-1'>JavaScript</p>
                <p className='text-gray-800 py-1'>PHP</p>
                <p className='text-gray-800 py-1'>LESS</p>
              </div>

              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={consulting} width={100} height={100} alt='design' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Disenos maravillosos</h3>
                <p className='py-2'>Creando disenos elgantes desde UI a la practica</p>

                <h4 className='text-teal-600 py-4'>Herarmientas Usada</h4>
                <p className='text-gray-800 py-1'>Magento (Abode Commerce)</p>
                <p className='text-gray-800 py-1'>JavaScript</p>
                <p className='text-gray-800 py-1'>PHP</p>
                <p className='text-gray-800 py-1'>LESS</p>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h3 className='text-3xl py-1'>Projects</h3>
              <div>
                <Image src={web1} alt='design' />
                <h4>TIENDAS TIA</h4>
                <p className='text-md py-2 leading-8 text-gray-800'>Create new store for chain of stores famous in Ecuador 🇪🇨 </p>
                <div>
                  <AiFillGithub />
                  <AiFillLinkedin />
                  <AiFillTwitterCircle />
                </div>
                <div>
                  <a href="#">Live</a>
                </div>
              </div>          
            </div>

            <div>
              <Image src={web1} width={100} height={100} alt='design' />
            </div>
          </section>
          <section>
            <h3>Email</h3>
            <div>
              <input type="text" />
              <div>
                <a href="mailto:pungowilmer@gmail.com"></a>

              </div>
            </div>
          </section>
        </main>
      </section>      
    </>
  )
}
