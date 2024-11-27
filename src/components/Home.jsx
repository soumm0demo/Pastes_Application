
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
            <div className="flex gap-x-8 mt-4 w-[600px]">
                <input
                    type="text"
                    value={searchtitle}
                    onChange={(e) => setsearchtitle(e.target.value)}
                    placeholder="Enter title here"
                    className="p-4 bg-gray-700 w-[70%] rounded-xl"
                    disabled={editLock}

                />
                {
                    !editLock && (<button className="bg-gray-700 p-4 font-sans  rounded-3xl" onClick={createpaste}>
                        {pasteId ? "Update paste" : "Create paste "}
                    </button>)
                }
            </div>

            <div>
                <textarea
                    type='textarea'
                    value={value}
                    onChange={(e) => setvalue(e.target.value)}
                    placeholder="enter content"
                    className="bg-gray-700 w-[600px] h-[30rem]  mt-12 p-4 rounded-xl outline-none"
                    rows={20}
                    disabled={editLock}
                />

            </div>
        </div>
    );
};

export default Home;
