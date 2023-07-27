import React from 'react'
import { motion } from 'framer-motion'

const handleSubmit = (event) => {
    event.preventDefault()
}

const AddProperty = () => {
    return (
    <section>
        <div className="flex flex-col space-y-12 px-10 py-16 w-full bg-[#ffffffa8] xs:px-4 md:px-12">
            <div className="">
                <h2 className='capitalize font-Inter text-xl font-semibold'>Your property with us and be confident that your room will be filled out</h2>
            </div>
            <div className="flex flex-col space-y-16 bg-[#ffffff] shadow-2xl py-16 p-8 rounded-lg xs:px-4 lg:p-16">
                <h1 className='capitalize font-Poppins text-orange text-2xl font-semibold'>Add a new property</h1>
                <form action="#" className='flex flex-col space-y-6' onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-6 xs:grid-cols-1 md:grid-cols-3">
                        <div className="flex flex-col items-start space-y-1">
                            <label htmlFor="name" className='font-Poppins text-base font-semibold  after:content-["*"] after:text-orange after:ml-1'>Name</label>
                            <input type="text" name="name" id="" placeholder='Enter Name' className='font-Inter font-light bg-[#F9F9F9] caret-[#737373] text-[#737373] text-sm py-2 px-3 w-full border border-[#81818148] rounded-[4px] outline-none' />
                        </div>
                        <div className="flex flex-col items-start space-y-1">
                            <label htmlFor="name" className='font-Poppins text-base font-semibold after:content-["*"] after:text-orange after:ml-1'>Address</label>
                            <input type="text" name="name" id="" placeholder='Enter Address' className='font-Inter font-light bg-[#F9F9F9] caret-[#737373] text-[#737373] text-sm py-2 px-3 w-full border border-[#81818148] rounded-[4px] outline-none' />
                        </div>
                        <div className="flex flex-col items-start space-y-1">
                            <label htmlFor="name" className='font-Poppins text-base font-semibold after:content-["*"] after:text-orange after:ml-1'>Unit Number</label>
                            <input type="number" name="number" id="" placeholder='Enter Unit' className='font-Inter font-light bg-[#F9F9F9] caret-[#737373] text-[#737373] text-sm py-2 px-3 w-full border border-[#81818148] rounded-[4px] outline-none' />
                        </div>
                        <div className="flex flex-col items-start space-y-1">
                            <label htmlFor="name" className='font-Poppins text-base font-semibold after:content-["*"] after:text-orange after:ml-1'>City</label>
                            <select name="cities" id="cities" placeholder='Select City' className='font-Inter font-light bg-[#F9F9F9] caret-[#737373] text-[#737373] text-sm py-2 px-3 w-full border border-[#81818148] rounded-[4px] outline-none'>
                                <option value="select">Select City</option>
                                <option>San Diego</option>
                                <option>New Orleans</option>
                                <option>Denver</option>
                                <option>Nashvi</option>
                                <option>Las Vegas</option>
                                <option>Boston</option>
                                <option>San Francisco</option>
                                <option>San Antonio</option>
                                <option>Colorado Sprin</option>
                                <option>Seattle</option>
                                <option>New York City</option>
                                <option>Tampa</option>
                                <option>Tamp</option>
                                <option>Charlotte</option>
                                <option>Miami</option>
                                <option>Austi</option>
                                <option>Virgi</option>
                                <option>Phoen</option>
                                <option>Atlan</option>
                                <option>Dallas</option>
                                <option>Memphis</option>
                                <option>Long Beach</option>
                                <option>Philadelphia</option>
                                <option>Chicago</option>
                                <option>Portland </option>
                                <option>Tucson</option>
                                <option>Houston</option>
                                <option>Los Angele</option>
                                <option>Jacksonvil</option>
                                <option>Portland</option>
                                <option>Sacramento</option>
                                <option>Fort Worth</option>
                            </select>
                        </div>
                        <div className="flex flex-col items-start space-y-1">
                            <label htmlFor="name" className='font-Poppins text-base font-semibold after:content-["*"] after:text-orange after:ml-1'>State</label>
                            <select name="states" id="states" className='font-Inter font-light bg-[#F9F9F9] caret-[#737373] text-[#737373] text-sm py-2 px-3 w-full border border-[#81818148] rounded-[4px] outline-none'>
                                <option value="select" className='text-[#737373]' >Select State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div className="flex flex-col items-start space-y-1">
                            <label htmlFor="name" className='font-Poppins text-base font-semibold after:content-["*"] after:text-orange after:ml-1'>Room Type</label>
                            <select name="room-type" id="room-type" className="font-Inter font-light bg-[#F9F9F9] caret-[#737373] text-[#737373] text-sm py-2 px-3 w-full border border-[#81818148] rounded-[4px] outline-none">
                                <option value="">Select Room Type</option>
                                <option>Standard Suite Room </option>
                                <option>Junior Suites </option>
                                <option>Presidential Suites </option>
                                <option>Penthouse Suites </option>
                            </select>
                        </div>
                        <div className="flex flex-col items-start space-y-1">
                            <label htmlFor="name" className='font-Poppins text-base font-semibold after:content-["*"] after:text-orange after:ml-1'>Price</label>
                            <input type="number" name="price" id="" placeholder='Enter Price' className='font-Inter font-light bg-[#F9F9F9] caret-[#737373] text-[#737373] text-sm py-2 px-3 w-full border border-[#81818148] rounded-[4px] outline-none' />
                        </div>
                    </div>
                    <div className="flex flex-col items-start space-y-1">
                        <label htmlFor="name" className='font-Poppins text-base font-semibold after:content-["*"] after:text-orange after:ml-1'>Description</label>
                        <textarea name="" id="" cols="30" rows="8" placeholder='Enter Description' className='font-Inter font-light bg-[#F9F9F9] caret-[#737373] text-[#737373] text-sm resize-none py-2 px-3 w-full border border-[#81818148] rounded-[4px] outline-none' />
                    </div>
                    <div className="flex flex-col items-start space-y-1 font-Poppins">
                        <label htmlFor="name" className='text-base font-semibold'>Upload Photos</label>
                        <div className="w-full border border-dashed border-[#f4501ea2] bg-[#f4501e05] rounded-lg py-12 xs:px-8">
                            <div className="">
                                <h3 className='text-md font-semibold'>Drag your images here, or <span className='text-orange'><input type="file" name="" id="files" className='hidden' multiple /><label for="files" className=' cursor-pointer'>browse</label></span></h3>
                                <p className='text-sm text-ash'>Supported: JPG, JPEG, PNG</p>
                            </div>
                        </div>
                    </div>
                    <motion.button className='font-Inter text-white text-sm capitalize w-fit my-0 mx-auto bg-orange px-6 py-2 rounded'
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >Add new property</motion.button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default AddProperty