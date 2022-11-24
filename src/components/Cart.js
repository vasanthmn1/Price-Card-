import React from 'react'

const Cart = ({ val }) => {


    return (
        <div className='col-lg-4'>
            <div class="card mt-5">
                <div class="card-body">
                    <div class="text-center text-muted">{val.plan}</div>
                    <h1 class="price text-center">{val.price} <span class="h6">/month</span></h1>
                    <hr />
                    <ul>
                        {
                            val.detile.map((item) => {
                                return <li className={`py-2 pe-3 ${item.isTrue ? '' : 'opacity-50 '}`}><span ><i class={`px-2   ${item.isTrue ? "fa-solid fa-circle-check" : "fa-sharp fa-solid fa-circle-xmark"}`}></i></span>{item.para}</li>
                            })
                        }

                    </ul>
                    <button class="btn rounded-pill bg-primary text-white w-100 border p-2">Button</button>
                </div>
            </div>
        </div >

    )
}

export default Cart
