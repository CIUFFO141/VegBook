import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchRecipes, searchRandomRecipes } from '../redux/action';
import logo from '../assets/favicon.png'

function NavBar() {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchRecipes(query));
    }

    const handleRandom = (event) => {
        event.preventDefault();
        dispatch(searchRandomRecipes());
    }

    return (
        <div className='flex items-center justify-between w-full mx-auto p-4 bg-slate-200 gap-3 rounded-xl mt-2'>
            <div className=' flex justify-center items-center gap-5'>
                <img src={logo} className=' w-12 rounded-lg' />
                <h1 className=' hidden sm:block'>Vegetarian <br />cookbook</h1>
            </div>
            <form onSubmit={handleSubmit} className='w-96'>
                <div className="relative w-full min-w-[200px] h-10">
                    <input
                        value={query}
                        onChange={handleChange}
                        className="peer w-full h-full bg-white text-blue-gray-700 font-sans font-semibold outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[8px] border-blue-gray-200 focus:border-green-500"
                        placeholder=" " />
                    <label
                        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-black peer-focus:text-green-500 before:border-green-200 peer-focus:before:!border-green-500 after:border-green-200 peer-focus:after:!border-green-500">
                        Search for recipes...
                    </label>
                </div>
            </form>
            <div className=' flex flex-row gap-2 *:font-semibold'>
                <button type="submit" onClick={handleSubmit} className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded">Search</button>
                <button type="submit" onClick={handleRandom} className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded">Random</button>
            </div>
        </div>
    )
}

export default NavBar