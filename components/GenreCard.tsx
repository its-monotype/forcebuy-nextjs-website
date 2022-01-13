import { motion } from 'framer-motion'
import { Sword } from 'phosphor-react'
import React from 'react'

export const GenreCard = () => {
  return (
    <button>
      <motion.div
        className="bg-gray-100 p-5 rounded-xl flex items-center space-x-5 justify-center"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.1 }}>
        <Sword size={40} className="text-blue-600" />
        <div className="font-semibold text-lg text-black">RPG</div>
      </motion.div>
    </button>
  )
}
