"use client"
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.svg';
import Image from 'next/image';
import CustomSidebar from './Sidebar';

const Navbar = () => {


    return (
        <nav className="absolute top-0 z-50 w-full text-custom-primary py-5 bg-white border-2 lg:bg-transparent">
            <div className="flex justify-center md:justify-between items-center max-w-screen-xl mx-auto px-4">
                {/* for mobile secreen  */}
                <div className="absolute md:hidden left-6">
                    <CustomSidebar />
                </div>

                {/* Logo and Navigation */}
                <div className="flex gap-10">
                    <Image src={logo} alt='logo' width={60} height={50} />

                    {/* Navigation Links */}
                    <div className='hidden md:block'>
                        <ul className="flex gap-8 items-center">
                            {/* Home */}
                            <li className="relative group flex items-center h-8">
                                <a href="#" className="flex items-center gap-1 hover:underline">
                                    Programme <ChevronDown className='size-5' />
                                </a>
                                <div className="absolute hidden group-hover:flex flex-wrap justify-around min-w-60 bg-white text-black shadow-lg py-8 px-6 rounded-2xl gap-4 top-8 left-0 z-50">
                                    <a href="#" className="block hover:underline">Home 1</a>
                                    <a href="#" className="block hover:underline">Home 2</a>
                                    <a href="#" className="block hover:underline">Home 3</a>
                                    <a href="#" className="block hover:underline text-blue-500">Home 4</a>
                                </div>
                            </li>

                            {/* Results */}
                            <li>
                                <a href="#" className="hover:underline">
                                    Results
                                </a>
                            </li>

                            {/* About */}
                            <li>
                                <a href="#" className="hover:underline">
                                    About
                                </a>
                            </li>

                            {/* Experts */}
                            <li>
                                <a href="#" className="hover:underline">
                                    Experts
                                </a>
                            </li>

                            {/* Resources */}
                            <li className="relative group flex items-center h-8">
                                <a href="#" className="flex items-center gap-1 hover:underline">
                                    Resources <ChevronDown className='size-5' />
                                </a>
                                <div className="absolute hidden group-hover:flex justify-around min-w-60 bg-white text-black shadow-lg py-8 px-6 rounded-2xl gap-12 top-8 left-0 z-50 whitespace-nowrap">
                                    <div className="">
                                        <h3 className='text-lg'>Listing Styles</h3>
                                        <a href="#" className="block hover:underline">Car Listings</a>
                                        <a href="#" className="block hover:underline">Bike Listings</a>
                                        <a href="#" className="block hover:underline">Rental Options</a>
                                        <a href="#" className="block hover:underline">Luxury Cars</a>
                                    </div>

                                    <div className="">
                                        <h3 className='text-lg'>Listing Details</h3>
                                        <a href="#" className="block hover:underline">Car Listings</a>
                                        <a href="#" className="block hover:underline">Bike Listings</a>
                                        <a href="#" className="block hover:underline">Rental Options</a>
                                        <a href="#" className="block hover:underline">Luxury Cars</a>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* Sign In and Submit Button */}
                <div className="hidden md:flex">
                    <Link href="#" className="hover:underline">
                        Login
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
