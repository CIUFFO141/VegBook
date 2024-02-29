import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Img404 from '../assets/Image404.jpg'

function InfoRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=f427ca4dc09b48b3a3a708ea2c5b66f2`);
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setError('Errore durante il recupero delle informazioni sulla ricetta. Si prega di riprovare più tardi.')
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <>
      {loading &&
        <div role="status" className='flex justify-center items-center'>
          <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>}
      {error &&
        <div className="flex justify-center items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 mt-5" role="alert">
          <span className="font-medium"></span> {error}
        </div>}
      {recipe && (
        <div className="flex justify-center items-center p-5">
          <div className="flex flex-col justify-center border border-gray-300 rounded-xl shadow-xl p-3 ">
            <img src={recipe.image ? recipe.image : Img404} alt={recipe.title} className='rounded-xl h-96' />
            <h1 className='font-semibold p-3'>{recipe.title}</h1>
            <h2 className='font-semibold p-3'>Time to prepare : {recipe.readyInMinutes} minutes</h2>
            <h3 className='font-semibold p-3'>Ingredients:</h3>
            <div className='flex justify-center'>
              <ul className='list-disc text-green-500 list-inside p-3'>
                {recipe.extendedIngredients.map((ingredient, index) => (
                  <li key={index}>
                    <span className='text-black'>{ingredient.original}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex justify-center m-5'>
            <Link to={`/`}>
              <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"> Home </button>
            </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoRecipe;

