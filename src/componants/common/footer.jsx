import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './icons';
import {data} from '../common/data'
const  Footer = () => {
    return (
        <footer>
            <ul className='flex justify-center'>
                <li className='mx-3'>
                    <a href='https://www.facebook.com/vishallsuthar' target="_blank"><FacebookIcon/></a>
                </li>
                <li className='mx-3'>
                    <a href='https://www.instagram.com/vishallsuthar' target="_blank"><InstagramIcon/></a>
                </li>
                <li className='mx-3'>
                    <a href='https://twitter.com/vishallsuthar94' target="_blank"><TwitterIcon/></a>
                </li>
                <li className='mx-3'>
                    <a href='https://www.linkedin.com/in/vishallsuthar94' target="_blank"><LinkedinIcon/></a>
                </li>
            </ul>
            <p className='text-center text-sm text-dark pt-6 pb-10'>Copyright ©2020 All rights reserved </p>
            
        </footer>
    )

}
export default Footer;