import React from 'react';
import Books from '../data/books.json'
import ExploreBookSection from '../components/ExploreBookSection';

const genreBookSet = (Books) => {
    const genreSet = new Set();
    Books.forEach(book => {
        book.genres.forEach(genre => genreSet.add(genre))
    })
    return Array.from(genreSet).sort();
}

const genreSortedSet = genreBookSet(Books);

const ExploreBook = () => {

    return (
        <>
            <div>
                <h1 className='text-center text-3xl mt-5 lg:mt-10 mb-5 lg:mb-7'>Explore Books</h1>
                <div className='mx-auto w-fit'>
                    <select id="genres" name="genres" className='border rounded px-2'>
                        <option value="allgenre">By Genres</option>
                        {genreSortedSet.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </select>
                    <select name="sortby" id="sortbty" className='border rounded px-2 ms-2'>
                        <option value="latest">latest</option>
                        <option value="Alphabetically">Alphabetically</option>
                    </select>
                </div>
                <div className='bg-[#F5F5F5] mt-10'>
                    <div className='pt-7 container mx-auto flex flex-wrap pb-10' style={{ justifyContent: 'center' }}>
                        <ExploreBookSection />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreBook