import React ,{useRef} from 'react'
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import feedimg from './../images/feedback.png'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v6z4web', 'template_71rki5m', form.current, 'WBsHhIONN4glZMqDK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
<form ref={form} onSubmit={sendEmail}>
        <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 mt-2 md:mb-0">
            <img class=" object-cover object-center rounded" alt="hero" src={feedimg}></img>
        </div>
    <div class=" lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8  md:mt-0">
      <h2 class="text-black text-2xl text-center mb-1 font-bold title-font">Feedback Form</h2>
      <p class="leading-relaxed text-center  text-black"></p>
      <div class="relative mb-1">
        <label for="name" class="leading-7 text-center text-sm text-black">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
      </div>
      <div class="relative mb-1">
        <label for="email" class="leading-7 text-center text-sm text-black">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
      </div>
      <div class="relative mb-1">
        <label for="message" class="leading-7 text-center text-sm text-black">Feedback Message</label>
        <textarea id="message" name="message" class="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">Submit</button>
   
    </div>
  </div>
</section>
    </form>

    //create a form with 3 input fields and a submit button and use firebase  
  )
}

export default Contact