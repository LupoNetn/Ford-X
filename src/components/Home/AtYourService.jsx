import { Dot } from 'lucide-react'
import React from 'react'

const AtYourService = () => {
  return (
    <>
     <div className='px-custom mt-5 md:my-10 flex flex-col items-center md:flex-row md:justify-between relative overflow-x-clip'>
        <div className='md:order-2 md:-mr-70 md:mt-30'>
            <img
              className="w-[100vw] max-w-[900px] md:w-[600px] lg:w-[900px] xl:w-[800px]"
              src="/truck.jpeg"
              alt=""
            />
        </div>
        <div className='md:order-1'>

          <div className='flex items-center'>
            <span className=''><Dot size={80} className='text-red-500'/></span>
            <h4 className='text-2xl text-blue-950 font-bold'>FORDX AT YOUR SERVICE</h4>
          </div>

          <h3 className='text-blue-950 text-4xl md:text-6xl '>
            We Peovide <span className='text-red-500'>End-to-end Logistics Services</span> for Timely Secure Delivery.
          </h3>

          <div className='mt-5 flex flex-col gap-5'>
            <div className='flex flex-col md:flex-row justify-between gap-20'>

              <div className='text-lg text-red-500'>
                <p>01</p>
                <p>Vision</p>
              </div>

              <div>
                <p>Our mission is to lead the global logistics industry by providing seamless, reliable, and innovative solutions that not only meet but exceed client expectations, driving long-term success and growth for buisnesses worldwide.</p>
              </div>

            </div>
            <div className='flex justify-between gap-20'>

              <div className='text-lg text-red-500'>
                <p>02</p>
                <p>Mission</p>
              </div>

              <div>
                <p>We connect buisnesses to a streamlined and efficient supply cahin by offering innovative and responsible logistics solutions that enhance operational performance, reduce costs, and fostre growth in a dynamic global market</p>
              </div>

            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default AtYourService
