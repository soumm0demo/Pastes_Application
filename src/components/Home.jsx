
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
    const [searchtitle, setsearchtitle] = useState("");
    const [value, setvalue] = useState('');

    const [searchparam, setsearchparam] = useSearchParams();
    const pasteId = searchparam.get("pasteId");
    const editLock = searchparam.get("editLock") === "true";
    const dispatch = useDispatch();
    const loc = useLocation(); 
 

   


    function createpaste() {
        const paste = {
            title: searchtitle,
            content: value,
            _id: pasteId || Date.now().toString(10),
            createdAt: new Date().toISOString()
        }

        if (pasteId) {
            dispatch(updateToPastes(paste))

        }
        else {
            dispatch(addToPastes(paste))

        }

        //cleaning task 
        setsearchtitle('')
        setvalue('');
        setsearchparam({});
    }

    useEffect(() => {
        if (pasteId) {
            const pastes =JSON.parse(localStorage.getItem("pastes") ) || []  ; 
            console.log(pastes);

            const index = pastes.findIndex((i) => i._id === pasteId)
            setsearchtitle(pastes[index].title);
            setvalue(pastes[index].content);

        } else {
            setsearchtitle('')
            setvalue('');
        }


    }, [loc,  pasteId])


    return (
        <div>
            <div className="flex sm:gap-x-8 mt-8 sm:mt-8  gap-y-4 mx-auto w-full flex-col sm:flex-row ">
                <input
                    type="text"
                    value={searchtitle}
                    onChange={(e) => setsearchtitle(e.target.value)}
                    placeholder="Give a  title "
                    className="p-4 bg-gray-700 md:w-[70%] sm:w-[14rem] rounded-xl"
                    disabled={editLock}

                />
                {
                    !editLock && (<button className="bg-gray-700 p-4 font-sans  rounded-3xl text-[#BFA181] w-[50%] sm:w-[30%] " onClick={createpaste}>
                        {pasteId ? "Update Paste" : "Create Paste "}
                    </button>)
                }
            </div>

            <div>
                <textarea
                    type='textarea'
                    value={value}
                    onChange={(e) => setvalue(e.target.value)}
                    placeholder="Jod down your things..."
                    className="bg-gray-700 
                    md:w-[36rem] lg:w-[38rem] sm:w-[25rem] w-[22rem] 
                    md:h-[30rem] h-[24rem]
                    mt-12 p-4 rounded-xl outline-none
                    resize-none
                    "
                    
                    disabled={editLock}
                />

            </div>
        </div>
    );
};

export default Home;
