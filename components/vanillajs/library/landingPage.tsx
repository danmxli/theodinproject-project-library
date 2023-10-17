'use client'
import React, { use, useState } from "react"
import Book from './libraryHelpers'

const LibraryLandingPage = () => {
    const [books, setBooks] = useState<{ id: number, name: string, author: string }[]>([])
    const [bookId, setBookId] = useState(0)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [idSelector, setIdSelector] = useState(0)

    const addBook = () => {
        if (books.length > 7) {
            alert('For demo purposes, we can only have 7 books in storage.')
        }
        else {
            setBookId(bookId + 1)
            const newBook = new Book(bookId, title, author)
            setBooks((prevBooks) => [...prevBooks, newBook])
            setTitle('')
            setAuthor('')
        }

    };

    const rmBook = () => {
        const updatedBooks = books.filter((book) => book.id !== idSelector);
        setBooks(updatedBooks)
    }

    return (
        <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
                <form className="bg-stone-200 dark:bg-slate-900 p-2 rounded-md">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-black dark:text-white">Title</label>
                        <input
                            type="text"
                            required
                            className="w-full py-2 px-3 text-black dark:text-purple-200 border border-gray-300 dark:border-gray-600 dark:bg-slate-800 rounded"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="author" className="block text-black dark:text-white">Author</label>
                        <input
                            type="text"
                            required
                            className="w-full py-2 px-3 text-black dark:text-purple-200 border border-gray-300 dark:border-gray-600 dark:bg-slate-800 rounded"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                </form>
                <button
                    className="text-black dark:text-purple-200 border border-gray-300 dark:border-gray-600 dark:bg-slate-800 rounded p-2 m-2"
                    onClick={() => addBook()}>Add</button>
                <form className="bg-stone-200 dark:bg-slate-900 p-2 rounded-md">
                    <label htmlFor="book_id">Book Id</label>
                    <input
                        type="number"
                        required
                        className="w-full py-2 px-3 text-black dark:text-purple-200 border border-gray-300 dark:border-gray-600 dark:bg-slate-800 rounded"
                        id="book_id" value={idSelector}
                        onChange={(e) => {
                            const input = parseInt(e.target.value, 10)
                            if (isNaN(input) || input < 0) {
                                setIdSelector(0)
                            }
                            else {
                                setIdSelector(input)
                            }
                        }} />
                </form>
                <button
                    className="text-black dark:text-purple-200 border border-gray-300 dark:border-gray-600 dark:bg-slate-800 rounded p-2 m-2"
                    onClick={() => rmBook()}>Remove</button>
            </div>

            <div>
                <ul className=" max-h-80 overflow-y-scroll">
                    {books.map((book, index) => (
                        <li key={index} className="bg-stone-200 dark:bg-slate-900 rounded-md p-2 m-4">
                            <div>
                                <strong>Book id:</strong> {book.id} <br /> <strong>Title:</strong> {book.name} <br /> <strong>Author:</strong> {book.author}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default LibraryLandingPage