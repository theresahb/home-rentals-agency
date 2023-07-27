import React, { useRef, useState } from 'react'
import { properties } from '../data/data'
import { motion } from 'framer-motion';


const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible : {
      opacity: 1,
      transition : { 
        delay: .2,
        duration: 1
      }
    },
  }

const Properties = () => {
    const propertiesPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [viewAllProperties, setViewAllProperties] = useState(false);
    const pageTopRef = useRef()

    const totalPageCount = Math.ceil(properties.length / propertiesPerPage);
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = viewAllProperties ? properties : properties.slice(indexOfFirstProperty, indexOfLastProperty);

    function handlePageChange(pageNumber) {setCurrentPage(pageNumber);
        setViewAllProperties(false); // Reset to paginated view when a page button is clicked
        scrollTop()
    }

    function handleNextPage() {
        setCurrentPage((prevPage) => (prevPage % totalPageCount) + 1);
        scrollTop()
    }

    function handleViewAllProperties() {
        setViewAllProperties(true);
    }
    
    function scrollTop (){
        const pageTop = document.getElementById('page-top');
        if (pageTop) {
            window.scrollTo({
                top: pageTop.offsetTop,
            });
        }
    }

    // Moving to a particular page clicked
    // function handleClick(e) {
    //     const target = e?.target;
    //     if (target) {
    //         const dataId = target.getAttribute('data-id');
    //         if (dataId) {
    //             setCurrentPage(parseInt(dataId));
    //             scrollTop();
    //         }
    //     }
    // }

    return (
    <section id="page-top" ref={pageTopRef}>
        <div className="bg-[#F5F5F5] px-10 py-16 w-full xs:px-4 md:px-12">
            <motion.div className="flex flex-col space-y-16 "
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
            >
                <div className="flex justify-between items-center xs:flex-col xs:gap-y-4 xs:items-start">
                    <div className="">
                        <h1 className='font-Inter text-xl xs:text-lg md:text-3xl text-[#18191F] font-bold capitalize leading-normal after:content-[""] md:after:block after:h-[4px] after:bg-orange after:w-[30%] after:-mt-1'>List of properties</h1>
                    </div>
                    <motion.button className='font-Manrope capitalize text-sm xs:text-xs text-white bg-orange w-fit px-4 py-2 rounded'  
                    onClick={handleViewAllProperties}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >View all properties</motion.button>
                </div>
                <div className="grid grid-cols-1 gap-12 font-DMSans md:grid-cols-3 md:gap-4">
                    {currentProperties.map((property, index) => (
                        <div key={property.id} className="flex flex-col space-y-4 text-start h-fit bg-white border border-[#81818148] rounded-2xl overflow-hidden cursor-pointer hover:border-[#81818115] hover:shadow-2xl transition ease-linear duration-500 delay-50">
                            <div className="overflow-hidden">
                                <img src={property.image} alt="" className="w-full min-h-full hover:scale-110 transition ease-linear duration-500 delay-200" />
                            </div>
                            <div className="flex flex-col space-y-3 px-4">
                                <h2 className=' text-lg text-[#18191F] font-bold capitalize leading-normal'>{property.caption}</h2>
                                <div className="">
                                    <p className='text-[#818181] text-sm'>{property.type}</p>
                                    <h2 className='text-lg text-orange font-bold'>{property.price}</h2>
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-8 border-t border-[#81818148]">
                                <div className="house-spec flex justify-center items-center space-x-2 ">
                                    <div className="">
                                        <img src={property.bedroomImage} alt="" />
                                    </div>
                                    <small>{property.bedroom}</small>
                                </div>
                                <div className="house-spec flex space-x-2 px-8 py-4 border-l border-r border-x-[#81818148]">
                                    <div className="">
                                        <img src={property.bathImage} alt="" />
                                    </div>
                                    <small>{property.baths}</small>
                                </div>
                                <div className="house-spec flex space-x-2 ">
                                    <div className="">
                                        <img src={property.sizeImage} alt="" />
                                    </div>
                                    <small>{property.size}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mr-auto ml-auto flex justify-center items-center w-fit text-sm font-Montserrat font-semibold border border-ash rounded-md overflow-hidden">
                    <button className='bg-white text-orange py-4 px-4 w-full border border-r-ash outline-none hover:bg-orange hover:text-white hover:border-orange cursor-pointer transition ease-linear duration-300 delay-50' 
                        onClick={() => handlePageChange(1)} >
                            First
                        </button>
                        {(() => {
                            const buttons = [];
                            for (let i = 1; i <= totalPageCount; i++) {
                                buttons.push(
                                <button
                                key={i}
                                className={`bg-white text-orange py-4 px-4 border ${currentPage === i ? 'border-r-ash' : ''} hover:bg-orange hover:text-white hover:border-orange transition ease-linear duration-300 delay-50`}
                                onClick={() => handlePageChange(i)}
                                >
                                {i}
                                </button>
                            );
                            }
                            return buttons;
                        })()}
                    <button className='bg-white text-orange py-4 px-4 border hover:bg-orange hover:text-white hover:border-orange transition ease-linear duration-300 delay-50' onClick={() => handleNextPage()}>Next</button>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Properties