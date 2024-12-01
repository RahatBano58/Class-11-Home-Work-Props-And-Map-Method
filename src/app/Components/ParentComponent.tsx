import React from "react";
import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    const CarDetails = [
        {
            
            imagePath: "/images/Corolla.jpg",
            car_name: "Toyota Corolla",
            car_price: " 59.7 - 75.5",
            car_reviews: " 626"
        },
        {
            
            imagePath: "/images/Swift.jpg",
            car_name: "Suzuki Swift",
            car_price: " 43.4 - 47.2",
            car_reviews: " 467"
        },
        {
            
            imagePath: "/images/Cultus.png",
            car_name: "Suzuki Cultus",
            car_price: " 38.6 - 45.5",
            car_reviews: " 268"
        },
        {
            
            imagePath: "/images/Civic.jpg",
            car_name: "Honda Civic",
            car_price: " 86.6 - 99.0",
            car_reviews: " 363"
        },
    ];

    return (
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-2">
            {
                CarDetails.map((vehicle , index) => {
                    return (
                        <ChildComponent 
                            key={index}
                            image={vehicle.imagePath}
                            name={vehicle.car_name}
                            price={vehicle.car_price}
                            reviews={vehicle.car_reviews}
                        />
                        
                             
                    );
                })
            }
           
        </div>
    );
}

export default ParentComponent;
