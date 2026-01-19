import React from 'react'
import { useState} from 'react'
import axios from 'axios'

const Admin = () => {

    const adminPass = 'Admin1'
    const [isAdmin, setIsAdmin] = useState(false)
    const [val, setVal] = useState('')
    const [errors, setErrors] = useState(false)
    const [orders, setOrders] = useState([])

    const showBase = async () => {
        try {
            const response = await axios.get('http://localhost:3000/Orders')
            setOrders(response.data)

        } catch (error) {
            console.error("was error!", error)
        }
    }

    const deleteBase = async (id) => {

        try {
            await axios.delete(`http://localhost:3000/Orders/${id}`)
            showBase()

        } catch (error) {
            console.error("was error", error)
        }
    }

    return (
        <div className='lg:px-20 sm:px-15 px-3'>
            {isAdmin ? (
                <>
                    <h3 className='text-6xl text-center Elegant mb-5'>Welcome to Admin Pages!</h3>

                    {orders.length > 0 &&
                        
                            <div>
                                <h3 className='text-5xl underline mb-5 text-center'>Date Base</h3>
                                <div className='flex flex-wrap  gap-3 justify-center'>
                                    {orders.map((order) => (

                                        <ul key={order.id} className='space-y-5 lg:text-2xl sm:text-xl  border border-b-6 rounded-3xl md:p-10 sm:p-8 p-5 overflow-hidden'>
                                            <li><span className='font-bold'>Id:</span> {order.id}</li>
                                            <li><span className='font-bold'>Name:</span> {order.name}</li>
                                            <li><span className='font-bold'>Email:</span> {order.email}</li>
                                            <li><span className='font-bold'>Occasion:</span> {order.occasion}</li>
                                            <li><span className='font-bold'>event_date:</span> {order.event_date}</li>
                                            <li className='max-w-100'><span className='font-bold'>Message:</span> {order.message}</li>
                                            <li><span className='font-bold'>hear_about_us:</span> {order.hear_about_us}</li>
                                            <li><span className='font-bold'>Agree:</span> {order.agree ? "Yes": "No"}</li>
                                            <button type='button' className='px-4 bg-black text-white py-2 rounded-2xl  cursor-pointer' onClick={(e) => {deleteBase(order.id)}}>Delete</button>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        }
                </>
            ) :

                <form onSubmit={(e)=>{
                    e.preventDefault()
                    
                    if (adminPass !== val) {
                        setErrors(true)
                        setVal('')
                    } else {
                        setVal('')
                        setIsAdmin(true)
                        showBase()
                    }
                }}>
                    <div className='justify-items-center mt-10'>

                        <div className='flex gap-3 items-center'>
                            <input type="password" className='border rounded-2xl px-3 py-3' value={val} onChange={(e) => setVal(e.target.value)} placeholder='Insert Admin password' />
                            <button className='bg-blue-600 px-4 py-2 rounded-2xl text-white cursor-pointer active:bg-blue-400' type='submit' >enter</button>
                        </div>
                        {errors && <p className='text-sm text-red-400 '>Invalid Password</p>}
                        <div className='text-3xl mt-5'>If you are not Admin, please return to <span className='text-blue-400'>Home</span> Page!</div>
                    </div>
                </form>



            }
        </div>
    )

}

export default Admin
