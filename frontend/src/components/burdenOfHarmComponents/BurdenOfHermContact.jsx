import React from 'react'
import { Link } from 'react-router-dom'

const BurdenOfHermContact = () => {
  return (
         <div className="w-full border-b border-gray-700/40 py-16 md:py-20 text-center px-4 sm:px-6 lg:px-8 w-full bg-[#2A2828] text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl">
            From burden to policy.

          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl font-medium leading-relaxed">
      Our policy positions follow directly from the evidence above. They are the things we believe the UK needs to do. We publish our modelling, label our own combinations as our own, and invite scrutiny of both. That is what distinguishes evidence from messaging.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              to="/get-help" 
              className="w-full sm:w-auto text-center bg-Primary hover:bg-[#145c7e] text-white font-bold px-6 py-3 rounded-xl text-base transition-colors shadow-sm"
            >
           Read our policy positions
            </Link>
            <Link
              to="/policy-positions" 
              className="w-full sm:w-auto text-center border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-bold px-6 py-3 rounded-xl text-base transition-all bg-transparent"
            >
             Latest publications
            </Link>
          </div>
        </div>
      </div>
  )
}

export default BurdenOfHermContact