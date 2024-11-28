import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removePastes } from '../redux/pasteSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './style.css'

const SinglePaste = (props) => {

    // const pastes = useSelector((state) => state.paste.pastes)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [isHover, setHover] = useState(false);

    const handleShare = () => {
        if (item._id) {
            // const link = `/?pasteId=${item._id}`
            // navigate(link);
            const shareLink = `${window.location.origin}/?pasteid=${item._id}`;
            navigator.clipboard.writeText(shareLink);
            toast.success("Share Link copied !")
        }
        else
            toast.error("Failed to copy ")

    }


    const item = props.items;
    return (
        <div className="flex flex-row gap-2 border p-4 rounded-xl relative justify-between">
            {/* Content Section */}
            <div>
                <p className="text-[#BFA181] font-semibold text-lg">{item.title}</p>
                <div>{item.content}</div>
                <div>{item.createdAt}</div>
            </div>

            {/* Action Buttons */}
            <div className="flex sm:flex-row flex-col gap-x-4 gap-y-2 text-lg absolute left-[80%] sm:left-[70%]">
                {/* First Row of Buttons */}
                <div className="flex flex-row gap-x-1 sm:gap-x-2">
                    <button onClick={() => navigate(`/?pasteId=${item._id}`)}>
                        <div className="group">
                            <i className="ri-edit-2-line group-hover:scale-120 transition-transform"></i>
                        </div>
                    </button>

                    <button onClick={() => navigate(`/?pasteId=${item._id}&&editLock=true`)}>
                        <div className="group">
                            <i className="ri-eye-fill group-hover:scale-120 transition-transform"></i>
                        </div>
                    </button>

                    <button onClick={() => dispatch(removePastes(item))}>
                        <div className="group">
                            <i className="ri-delete-bin-3-line group-hover:scale-120 transition-transform"></i>
                        </div>
                    </button>
                </div>

                {/* Second Row of Buttons */}
                <div className="flex flex-row gap-x-1 sm:gap-x-2 bttn">
                    {/* Share Icon */}
                    <button onClick={handleShare} className="group">
                        <div>
                            <i className="ri-share-line group-hover:scale-120 transition-transform"></i>
                        </div>
                    </button>

                    {/* Clipboard Icon */}
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(item?.content);
                            toast.success("Successfully copied!");
                        }}
                        className="group"
                    >
                        <div>
                            <i className="ri-clipboard-fill group-hover:scale-120 transition-transform bttn"></i>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SinglePaste