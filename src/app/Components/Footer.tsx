import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
    
        <div className="text-white px-2 py-2 justify-center bg-gray-500 mt-8 text-sm
        text-center font-semibold md:text-lg lg:text-xl m-8">
            {/* LinkedIn Profile */}
            <p className="mt-4 hover:text-blue-500 cursor-pointer">
                <Link href="https://www.linkedin.com/in/rahat-bano-5b78b41b3/"
                    target="_blank">
                        Developed By: Rahat Bano
                </Link>
            </p>

            {/* Homework Information */}
            <p className="text-white hover:text-yellow-300 cursor-pointer">
                HomeWork Given By Sir <b>&quot;Ali Jawwad&quot;</b> Slot: Tuesday 7:00 PM - 10:00 PM
            </p>
        </div>
    
    );
}

export default Footer;
