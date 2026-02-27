import React from 'react'
import vol from './../images/volume.png' 
import img1 from './../images/info1.png'
import img2 from './../images/info2.png'
import img3 from './../images/info3.png'
import img4 from './../images/info1.png'
import { useSpeechSynthesis } from "react-speech-kit";

const features = [
  { name: 'Comprehensive Curriculum', description: 'Covers a wide range of topics' },
  { name: 'Online Course Catalogs', description: 'Providing easy access to the differently-abled children' },
  { name: 'Trusted by educators', description: 'Over 100 tutors with 300+ lectures' },
  { name: 'Immersive Learning Experience', description: 'Children are taught with fun and interactive sessions to enhance their learning potential' },
  { name: 'Includes', description: 'Support of multilingual / Regional language content' },
  { name: 'Communication and social learning', description: 'Discussion boards, Chats, Forums, Learning communities.'},
]

const Infor = () => {
  const { speak } = useSpeechSynthesis()
  // const { pause } = duseSpeechSynthesis.pause()
  const text = 'Why Shiksha? Shiksha is designed in such a way that it is accessible to students with various difficulties, like visual, auditory etc. Our platform will have features like captioning, audio to text, screen reading and many more. Shiksha will foster an inclusive learning environment by promoting diversity and acceptance. Visual aids like pictures, diagrams, and videos can make thoughts and ideas easier to understand for nonverbal or non-speaking people.'
  return (
    <div className='w-full bg-white py-4 px-8'>
        {/* <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[900px] ease-in-out duration-900 mt-20' src={img} alt="/" /> */}
            {/* <div className='bg-blue-500 text-white mt-20 p-4 rounded-3xl h-[320px] flex flex-col justify-center'>
                <h1 className='text-black font-bold text-center text-2xl mb-3 mt-2' onMouseOver={() => speak({ text: text })}>Why Shiksha? <button onClick={() => speak({ text: text })}>
        <img src={vol} alt="volume"></img>
      </button> </h1>
                
                <p className=' text-xl'>
</p>
            </div> */}
        {/* </div> */}
        
        <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" onMouseOver={() => speak({ text: text })}>Why Shiksha?</h2><button onClick={() => speak({ text: text })}>
        <img src={vol} alt="volume"></img>
      </button>
          <p className="mt-4 text-gray-500">
          Shiksha is designed in such a way that it is accessible to students with various difficulties, like visual, auditory etc. Our platform will have features like captioning, audio to text, screen reading and many more. Shiksha will foster an inclusive learning environment by promoting diversity and acceptance. Visual aids like pictures, diagrams, and videos can make thoughts and ideas easier to understand for nonverbal or non-speaking people.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4" >
                <dt className="font-medium text-gray-900" onMouseOver={() => speak({ text: feature.name })}>{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500" onMouseOver={() => speak({ text: feature.description })}>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={img1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 shadow-xl	"
          />
          <img
            src={img2}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100 shadow-xl	"
          />
          <img
            src={img3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 shadow-xl	"
          />
          <img
            src={img4}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 shadow-xl	"
          />
        </div>
      </div>
    </div>
    </div>

    
  )
}

export default Infor