import * as React from 'react';
import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const SearchInput = () => {
    return (
        <div class="w-5/12 mx-auto">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div class="relative focus:border-gray-400">
                <button type="submit" class="absolute inset-y-0 end-4 flex items-center ps-3">
                    <svg class="w-4 h-4 text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </button>
                <input type="text" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 shadow-xl rounded-lg focus:border-gray-400 bg-[#EDEDED]" placeholder="Search..." required />
            </div>
        </div>
    );
}

const UserInfo = () => {
    return (
        <div class="flex flex-row items-center space-x-3 md:space-x-4">
            <img class="w-8 h-8 rounded-full" src="" alt="user photo" />
            <div class="px-2 py-3">
                <span class="text-m font-bold text-gray-900">Vanhau</span>
            </div>
        </div>
    );
}

const DropDownList = () => {
    const [isHidden, setHidden] = useState(true);
    return (
        <div class='mx-4'>
            <button onClick={ () => {
                setHidden(!isHidden)
            }} type='button' id="dropdownInformationButton">
                <FaChevronDown/>
            </button>
            {!isHidden && (
            <div id="dropdownInformation" class="absolute right-4 transition ease-out duration-300 my-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownInformationButton">
                <li>
                    <a href="#" class="relative block px-4 py-2">Settings</a>
                </li>
                </ul>
                <div class="py-2">
                <a href="#" class="relative block px-4 py-2 text-sm">Sign out</a>
                </div>
            </div>
            )}
        </div>
    );
}

const NavBar = () => {
    return (
        <nav class='flex flex-row items-center px-6 py-4'>
            <SearchInput />
            <UserInfo />
            <DropDownList />
            <FaBell class='mx-4' />
        </nav>
    )
}
export default NavBar;