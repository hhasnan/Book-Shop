import React, { useState, useContext } from 'react';
import Books from '../data/books.json'
import ExploreBookSection from '../components/ExploreBookSection';
import { ThemeContext } from '../context/ThemeContext';



// Function to create a sorted set of genres from the books data

const genreBookSet = (Books) => {
    const genreSet = new Set();
    Books.forEach(book => {
        book.genres.forEach(genre => genreSet.add(genre))
    })
    return Array.from(genreSet).sort();
}

const genreSortedSet = genreBookSet(Books);

// ---------------------------------------


const ExploreBook = () => {

    const { darkTheme } = useContext(ThemeContext);

    const [genre, setGenre] = useState('all')
    const [sort, setSort] = useState('latest')

    const filteredBooks = genre === 'all' ? Books : Books.filter(book => book.genres.includes(genre))
    const sortedBooks = sort === 'latest' ? [...filteredBooks].sort((a, b) => b.year - a.year) : [...filteredBooks].sort((a, b) => a.title.localeCompare(b.title))

    return (
        <>
            <div className={`${darkTheme ? 'dark-1 dark-text-1' : 'bg-white text-black'}`}>
                <h1 className='text-center text-3xl pt-5 lg:pt-10 mb-5 lg:mb-7'>Explore Books</h1>
                <div className='mx-auto w-fit'>
                    <select id="genres" name="genres" className={`${darkTheme ? "dark-1 dark-text-1" : "bg-white text-black"} border rounded px-2`} onChange={(e) => {setGenre(e.target.value)}}>
                        <option value="allgenre">By Genres</option>
                        {genreSortedSet.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </select>
                    <select name="sortby" id="sortbty" className={`${darkTheme ? "dark-1 dark-text-1" : "bg-white text-black"} border rounded px-2 ms-2`} onChange={(e) => {setSort(e.target.value)}}>
                        <option value="latest">latest</option>
                        <option value="alphabetically">Alphabetically</option>
                    </select>
                </div>
                <div className={`mt-10 ${darkTheme ? 'dark-2 dark-text-2' : 'bg-[#F5F5F5] text-black'}`}>
                    <div className='pt-7 container mx-auto flex flex-wrap pb-10' style={{ justifyContent: 'center' }}>
                        <ExploreBookSection bookGroup={sortedBooks}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreBook