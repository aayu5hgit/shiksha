import React from 'react'
import logo from '.././images/blacklogo.png'
import logo1 from '.././images/blacklogomirror.png'

const Footer = () => {
  return (
//     <div className='bg-gray-800'>
//     <div className='bg-gradient-to-t py-6 px-4 grid lg:grid-cols-2 gap-30 text-gray-200'>
//         <div>
//               <img className="h-8" src={logo} alt='logo'/>
//             <p className='block ml-5 mt-2'>
//             Empowering Abilities, Unlocking Potential: Education for All! <br></br>
//             Shiksha is designed in such a way that it is accessible to students with various difficulties, like visual, auditory etc. <br></br>
// </p>
//             <div className='flex justify-start mt-4 ml-5'>
//                 <FaFacebookSquare size={30}/>
//                 <FaLinkedin size={30}/>
//                 <FaInstagramSquare size={30}/>
//                 <FaTwitterSquare size={30}/>
//             </div>      
//         </div>
//     <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-evenly">
//       <div className="lg:w-1/4 md:w-1/2 w-full px-2">
//         <h2 className="title-font font-medium text-white text-lg mb-3 underline">Quick Links</h2>
//         <nav className="list-none gap-2 mb-6">
//           <li>
//             <a className="text-white hover:text-gray-800 p-2 no-underline">About </a>
//           </li>
//           <li>
//             <a className="text-white hover:text-gray-800 p-2 no-underline"><Link to="/headlines" class="nav-link active">Headlines</Link></a>
//           </li>
//           <li>
//             <a className="text-white hover:text-gray-800 p-2 no-underline">Testimonials</a>
//           </li>
//         </nav>
//       </div>
//       <div className="lg:w-1/4 md:w-1/2 w-full">
//         <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3 underline">Home</h2>
//         <nav className="list-none gap-2  mb-6">
//           <li>
//             <a className="text-white hover:text-gray-400 no-underline p-2" href='#'>Disclaimer</a>
//           </li>
//           <li>
//             <a className="text-white  hover:text-gray-500 no-underline p-2" href='#'><Link to="/govtpolicy" class="nav-link active">Government policies</Link></a>
//           </li>
//           <li>
//             <a className="text-white hover:text-gray-800 no-underline p-2"><Link to="/donation" class="nav-link active">Donate Us</Link></a>
//           </li>          
//         </nav>
//       </div>
//      </div>    
//     </div>
//     </div>
<>
<footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="hover:bg-slate-300" href='/coursecat'>Courses</a> 
    <a className="hover:bg-slate-300" href='/'>Teaching</a> 
    <a className="hover:bg-slate-300" href='/'>Assessments</a> 
    <a className="hover:bg-slate-300" href='/'>Materials</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className=" hover:bg-slate-300" href='/aboutus'>About us</a> 
    <a className="hover:bg-slate-300" href='/'>Contact</a> 
    <a className="hover:bg-slate-300" href='/popup'>Guide</a> 
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="hover:bg-slate-300" href='/'>Terms of use</a> 
    <a className="hover:bg-slate-300" href='/'>Privacy policy</a> 
    <a className="hover:bg-slate-300" href='/'>Cookie policy</a>
  </div>
</footer> 
<footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
  <div className="items-center grid-flow-col">
    <img className="h-8" src={logo} alt='logo'/>
    <p>Empowering Abilities,<br/> Unlocking Potential: Education for All</p><img className="h-8" src={logo1} alt='logo mirror'/>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
</footer>
</>
  )
}

export default Footer