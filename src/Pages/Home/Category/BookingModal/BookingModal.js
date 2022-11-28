import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../../Contexts/AuthProvider';

const BookingModal = ({ product }) => {
    const { user } = useContext(Authcontext);
    const [bookingError, setBookingError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { name, price, image, _id } = product;
    const navigate = useNavigate();
    const handleBooking = data => {
        setBookingError('');
        const booking = {
            buyerName: user.displayName,
            buyerEmail: user.email,
            name: name,
            price: price,
            image: image,
            phone: data.phone,
            location: data.location,
            productId: _id

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged === true) {
                    toast.success('The Item is Successfully Booked')
                    navigate('/dashboard/bookings')
                    return
                }
                toast.error("Sorry The item you have already Booked")
            })
            .catch(error => setBookingError(error.message))

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Book For {name}</h3>
                    <form onSubmit={handleSubmit(handleBooking)} className='grid grid-cols-1 gap-3 mt-4'>
                        <input type="text" disabled value={name} className="input w-full input-bordered " />
                        <input type="text" defaultValue={price} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input type="text" placeholder="Phone Number" {...register("phone", {
                            required: "Phone is Required"
                        })} className="input w-full input-bordered" />
                        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                        <input type="text" placeholder="Meeting Location" {...register("location", {
                            required: "Location is Required"
                        })} className="input w-full input-bordered" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                        {bookingError && <p className='text-red-500'>{bookingError}</p>}
                        <button><label htmlFor="booking-modal" className="btn btn-accent">Submit</label></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;