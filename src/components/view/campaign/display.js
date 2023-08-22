import React from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";

const Displaycampaign = ({ camplist }) => {
    return (
        <div className="flex justify-start items-center gap-4">
            {camplist.map((campaign, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-4"
                >
                    {Object.entries(campaign).map(([key, value]) => (
                        <div
                            key={key}
                            className="flex justify-between items-center gap-4"
                        >
                            <div className="text-gray-400">{key}</div>
                            <div className="text-gray-800">{value}</div>
                        </div>
                    ))}
                    <div className="flex justify-between items-center">
                        <RiEditLine className="text-blue-500 cursor-pointer bg-gray-100 w-7 h-7 p-1 rounded-full" />
                        <RiDeleteBin6Line className="text-red-600 cursor-pointer bg-gray-100 w-7 h-7 p-1 rounded-full" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Displaycampaign;
