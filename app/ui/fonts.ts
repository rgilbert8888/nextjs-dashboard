// You'll use this file to keep the fonts that will be used throughout your application

import {Inter, Lusitana} from 'next/font/google'; // Import the Inter font from the next/font/google module

export const inter = Inter({subsets: ['latin']}) // Then, specify what subset and font weight you'd like to load
export const lusitana = Lusitana({
    weight: "400", 
    subsets: ['latin']
})