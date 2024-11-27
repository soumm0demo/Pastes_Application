import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removePastes, updateToPastes } from '../redux/pasteSlice';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const SinglePaste = (props) => {

    const pastes = useSelector((state) => state.paste.pastes)
    const dispatch = useDispatch();
    const [searchparam, setSearchparam] = useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();

    const handleShare = () => {
        if (item._id) {
            const link = `/?pasteId=${item._id}`
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
        <div className='flex flex-row gap-2 border p-4 rounded-xl relative'>

            <div>
                <p>{item.title}</p>
                <div>{item.content}</div>
                <div>{item.createdAt}</div>
            </div>

            <div className=' flex gap-x-2 text-lg absolute left-[70%]'>

                <button onClick={() => {


                    navigate(`/?pasteId=${item._id}`)
                }}>
                    <div>
                        <i className="ri-edit-2-line"></i>

                    </div>

                </button>


                <button onClick={() => {
                    navigate(`/?pasteId=${item._id}&&editLock=true`)
                }}>
                    <div>
                        <i className="ri-eye-fill"></i>
                    </div>

                </button>

                <button onClick={() => {

                    dispatch(removePastes(item))
                }}>
                    <div>
                        <i className="ri-delete-bin-3-line"></i>
                    </div>
                </button>

                <button onClick={handleShare}>
                    <div>
                        <i className="ri-share-line"></i>
                    </div>
                </button>

                <button onClick={() => {
                    navigator.clipboard.writeText(item?.content)
                    toast.success("successfully copied  !")
                }}>

                    <i className="ri-clipboard-fill"></i>


                </button>


            </div>

        </div>
    )
}

export default SinglePaste