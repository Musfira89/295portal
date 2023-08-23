"use client"
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import axios from "axios";
import { useRouter } from "next/navigation";

const Displaycampaign = ({ camplist, getcampaign }) => {
    const router = useRouter()
    async function deletecampaign(id) {
        try {
            const res = await axios.delete(`/api/campaign?id=${id}`);
            if (res.status === 200) {
                getcampaign()
            }
        } catch (error) {
            console.log(error);
        }
    }
    // pass full campaign to edit page
    function editcampaign(id) {
        router.push(`/campaign/editcampaign?id=${id}`)
    }

    return (
        <div className="flex flex-wrap justify-start items-center gap-4">

            {camplist.map((campaign, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-8 w-[300px]"
                >
                    {Object.entries(campaign).map(([key, value]) => (
                        <div
                            key={key}
                            className="flex justify-between items-center gap-16"
                        >
                            <div className="text-gray-400">{key}</div>
                            <div className="text-gray-800">{value}</div>
                        </div>
                    ))}
                    <div className="flex justify-between items-center">
                        <RiEditLine
                            className="text-blue-500 cursor-pointer bg-gray-100 w-7 h-7 p-1 rounded-full"
                            onClick={() => editcampaign(campaign.id)} />
                        <RiDeleteBin6Line
                            className="text-red-600 cursor-pointer bg-gray-100 w-7 h-7 p-1 rounded-full"
                            onClick={() => deletecampaign(campaign.id)} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Displaycampaign;
