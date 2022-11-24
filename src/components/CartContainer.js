import React from 'react'
import App from '../'
import Cart from './Cart'

const CartContainer = () => {
    let cartValue = [
        {
            plan: "free",
            price: "$0",
            detile: [
                {
                    para: "Single User",
                    isTrue: true,

                },
                {
                    para: "5GsB Storage",
                    isTrue: true,
                },
                {
                    para: "Unlimited Public Projects",
                    isTrue: true,
                },
                {
                    para: "Community Access",
                    isTrue: true,
                },
                {
                    para: "Unlimited Private Projects",
                    isTrue: false,
                },
                {
                    para: "Dedicated Phone Support",
                    isTrue: false,

                },
                {
                    para: "Free Subdomain",

                    isTrue: false,

                },
                {
                    para: "Monthly Status Reports",
                    isTrue: false,

                },

            ]
        },
        {
            plan: "PLUS",
            price: "$9",
            detile: [
                {
                    para: "5 Users",
                    isTrue: true,

                },
                {
                    para: "50GB Storage",
                    isTrue: true,
                },
                {
                    para: "Unlimited Public Projects",
                    isTrue: true,
                },
                {
                    para: "Community Access",
                    isTrue: true,
                },
                {
                    para: "Unlimited Private Projects",
                    isTrue: true,
                },
                {
                    para: "Dedicated Phone Support",
                    isTrue: true,

                },
                {
                    para: "Free Subdomain",

                    isTrue: true,

                },
                {
                    para: "Monthly Status Reports",
                    isTrue: false,

                },

            ]
        },
        {
            plan: "PLUS",
            price: "$49",
            detile: [
                {
                    para: "Unlimited Users",
                    isTrue: true,

                },
                {
                    para: "150GB Storage",
                    isTrue: true,
                },
                {
                    para: "Unlimited Public Projects",
                    isTrue: true,
                },
                {
                    para: "Community Access",
                    isTrue: true,
                },
                {
                    para: "Unlimited Private Projects",
                    isTrue: true,
                },
                {
                    para: "Dedicated Phone Support",
                    isTrue: true,

                },
                {
                    para: "Unlimited Free Subdomains",
                    isTrue: true,

                },
                {
                    para: "Monthly Status Reports",
                    isTrue: true,

                },

            ]
        },
    ]
    return (
        <div className='CartContainer'>
            <div className='row'>
                {
                    cartValue.map((cart) => {
                        return <Cart val={cart}></Cart>
                    })
                }
            </div>
        </div>
    )
}
export default CartContainer
