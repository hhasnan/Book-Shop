import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Books from '../data/books.json'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";  

const CartPage = () => {

  const [ warning, setWarning] = useState('')

  const { darkTheme } = useContext(ThemeContext)

  const storedCart = JSON.parse(localStorage.getItem('cart')) || []

  const [cart, setCart] = useState(storedCart)

  const simpleCartFilter = new Set()
  

  storedCart.map(item => {
    const book = Books.find(b => b.id === item)
    if(book) {
      simpleCartFilter.add(book)
    }
  })

  const cartFilteredData = [...simpleCartFilter]

  useEffect(() => {
    if (storedCart.length === 0) {
      setWarning('Your cart is empty. Please add some books to your cart.')
    }
  }, [storedCart])

  const totalAmount = cartFilteredData.reduce((acc, item) => acc + item.price, 0)
  const roundedTotalAmount = Number(totalAmount.toFixed(2))
  const taxAmount = roundedTotalAmount * 0.1 // Assuming a tax rate of 10%
  const roundedTaxAmount = Number(taxAmount.toFixed(2))

  const removeBook = (id) => {
    const updatedcart = cart.filter(item => item !== id)
    setCart(updatedcart)
    localStorage.setItem('cart', JSON.stringify(updatedcart))
  }


  return (
    <div className={`${darkTheme ? 'dark-1 dark-text-1 ' : 'bg-white text-dark'} cart-container overflow-hidden`}>
      {storedCart.length === 0 ? <h1 className='text-center pt-10 text-red-600 text-lg'>{warning}</h1> : <div className={`container flex flex-col md:flex-row pt-10 px-5 lg:mx-auto`}>
        <div className='w-full md:w-[70%] border-r-0 md:border-r-2 border-solid border-gray-300 pt-5 h-[56dvh] md:h-[65dvh] overflow-auto scrollbar-hide'>
          <table className='w-full'>
            <tr>
              <th className='w-[50%]'>Book</th>
              <th>Price</th>
              <th></th>
            </tr>
            <br />
            {cartFilteredData.reverse().map((c) => {
              return (
              <tr className='text-center pt-3' key={c.id}>
                <td>
                  <div className='w-fit me-auto flex'>
                    <img src={c.image_url} alt="" className='w-[50px] h-[75px] mb-4' />
                    <div className='text-[12px] ms-2 mt-1 text-start '>
                      <h1><span className='font-bold'>Name : </span>{c.title}</h1>
                      <h1 className='hidden md:block'><span className='font-bold '>Author : </span>{c.author}</h1>
                    </div>
                  </div>
                </td>
                <td className='text-[14px] font-bold'>{Number(c.price.toFixed(2))} $</td>
                <td>
                  <button onClick={() => removeBook(c.id)} className={`px-4 py-1 rounded-sm bg-[#8D6E63] text-white text-[12px] font-medium shadow-md hover:bg-[#7C5D55] transition duration-300 ease-in-out`}>Remove</button>
                </td>
              </tr>)
            })}

          </table>
        </div>
        <div className='ms-auto me-0 md:me-4 mt-10 md:mt-auto mb-5'>
          <div className='flex w-fit h-fit align-bottom ms-auto mb-3'>
            <div className='text-[16px] font-bold'>
              <h1>Subtotal :</h1>
              <h1>Tax :</h1>
              <h1>Total :</h1>
            </div>
            <div className='text-[16px] ms-10'>
              <h1>{roundedTotalAmount} $</h1>
              <h1>{roundedTaxAmount} $</h1>
              <h1>{Number(roundedTotalAmount + roundedTaxAmount).toFixed(2)} $</h1>
            </div>
          </div>
          <Link to='/payment' className={`px-4 py-1 rounded-sm bg-[#8D6E63] text-white text-sm font-medium shadow-md hover:bg-[#7C5D55] transition duration-300 ease-in-out`}>Proceed to payment <FaArrowRight className="inline"/></Link>
        </div>
      </div>}
    </div>
  )
}

export default CartPage
