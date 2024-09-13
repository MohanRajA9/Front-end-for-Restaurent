import React from 'react';
import './Menu.css';
import { Card, CardTitle, CardBody, CardText } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';

const breakfast = [
    {
        id: 1,
        name: 'Idly',
        description: "Idly, Sambar, chutny, vadai",
        price: '₹20'
    },
    {
        id: 2,
        name: "Dosa",
        description: "Dosa, sambar, chutney, vadai",
        price: '₹25'
    },
    {
        id: 3,
        name: "Pongal",
        description: "Pongal, sambar, chutney, vadai",
        price: '₹30'
    }
]

const lunch = [
    {
        id: 1,
        name: 'Full Meals',
        description: "Rice, sambar, greavy, veg fries, curd, Rasam",
        price: '₹150'
    },
    {
        id: 2,
        name: "Briyani",
        description: "Briyani, chiken leg, Greavy, Egg",
        price: '₹350'
    },
    {
        id: 3,
        name: "Mini meals",
        description: "Tomato Rice, Lemon Rice, Curd Rice, Chappathi, veg Salad",
        price: '₹150'
    }
]

const dinner = [
    {
        id: 1,
        name: 'Parota',
        description: "Greavy, Masal, Onions",
        price: '₹30'
    },
    {
        id: 2,
        name: "Dosa",
        description: "Greavy, Masal, Chutney, Tomato Chutney",
        price: '₹50'
    },
    {
        id: 3,
        name: "Chiken Fried Rice",
        description: "Chiken, Onions, Tomato sauce, Hot sauce",
        price: '₹60'
    }
]

const dessert = [
    {
        id: 1,
        name: 'Lemon Cake',
        description: 'Flour, Sugar, Baking Powder lemon',
        price: '₹35'
    },
    {
        id: 2,
        name: 'Cinnamon Rolls',
        description: 'Flour, Salt, Sugar, Cinnamon, Yeast, Sour cream, Milk',
        price: '₹30'
    },
    {
        id: 3,
        name: 'Vegan Pancakes',
        description: 'Flour, Sugar, Baking powder, Soya Milk, Blueberries',
        price: '₹45'
    }
]


function Menu() {
    return (
        <div className='menu-page' >
            <header className='mt-5' >
                <div className='container h-100 d-flex justify-content-center align-items-center'>
                    <h1 className="text-light">
                        Menu
                    </h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Breakfast</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakfastImg} alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-around">
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id} >
                                    <Card className='border-0 my-3'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text-light py-5'>
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Lunch</h2>
                    <div className='row'>
                        <div className="col-lg-6 d-flex flex-column justify-content-around">
                            {lunch.map((lunch) => (
                                <div key={lunch.id} >
                                    <Card className='border-0 my-3 text-light bg-dark'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {lunch.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunch.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={LunchImg} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>


            <div className='dinner my-5'>
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">dinner</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DinnerImg} alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-around">
                            {dinner.map((dinner) => (
                                <div key={dinner.id} >
                                    <Card className='border-0 my-3'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dinner.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinner.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        
            <div className='dessert bg-dark text-light py-5'>
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Dessert</h2>
                    <div className='row'>
                        <div className="col-lg-6 d-flex flex-column justify-content-around">
                            {dessert.map((dessert) => (
                                <div key={dessert.id} >
                                    <Card className='border-0 my-3 text-light bg-dark'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dessert.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DessertImg} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu