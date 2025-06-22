import React from 'react'
import AppContext from './appContext'
import { useEffect, useState,useRef } from 'react'
import useLocalStorage from '../components/hooks/uselocalstorage'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const AppState = (props) => {

    const history = useHistory()

    const world = "helloworldhowareyou"

    const [appLoader, setappLoader] = useState(true)
    const [coverImages, setCoverImages] = useState([])
    const [adminToken, setAdminToken] = useLocalStorage('adminToken', null)
    const [admin, setAdmin] = useState(false)
    const signIn = async (username, password) => {

        // settheProductLoader(true)

        const url = "https://hotel-management-backend-application-three.vercel.app/api/auth/login"
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
            },

            body: JSON.stringify({ username, password }), // body data type must match "Content-Type" header
        });
        const data = await response.json(); // parses JSON response into native JavaScript objects
        setAdminToken(data.authToken)
        if (data.authToken) {
            history.push('/admin-dashboard')
            setAdmin(true)
        }
        console.log(data);



        // console.log(data.map((e)=>{return e.id}))
    }

    console.log(adminToken);

    
    const [siteData, setSiteData] = useState({ title: "", email: "", contact: "", description: "", about: "" })
    const [allPackageData, setAllPackageData] = useState([])
    const getAppData = async () => {

        const url = "https://hotel-management-backend-application-three.vercel.app/api/coverImages/getImages"
        const response = await fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
            },

            // body: JSON.stringify({ username, password }), // body data type must match "Content-Type" header
        });
        const data = await response.json(); // parses JSON response into native JavaScript objects
        setCoverImages(data.assets)


        const responseTwo = await fetch("https://hotel-management-backend-application-three.vercel.app/api/rooms/allrooms", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
            },

            // body: JSON.stringify({ username, password }), // body data type must match "Content-Type" header
        });
        const roomData = await responseTwo.json(); // parses JSON response into native JavaScript objects
        // setCoverImages(data.assets)
        // console.log(data.assets);
        console.log(roomData);
        const responseThree = await fetch("https://hotel-management-backend-application-three.vercel.app/api/metadata/getSite/", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
            },

            // body: JSON.stringify({ username, password }), // body data type must match "Content-Type" header
        });
        const siteData = await responseThree.json(); // parses JSON response into native JavaScript objects
        setSiteData({ id: siteData._id, title: siteData.title, email: siteData.email, phone: siteData.phone, description: siteData.description, about: siteData.about })
        // setCoverImages(data.assets)
        // console.log(data.assets);
        console.log(siteData);

        const responseFour = await fetch("https://hotel-management-backend-application-three.vercel.app/api/rooms/allrooms", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
            },

            // body: JSON.stringify({ username, password }), // body data type must match "Content-Type" header
        });
        const allRoomData = await responseFour.json(); // parses JSON response into native JavaScript objects
        console.log(allRoomData);
        setAllPackageData(allRoomData)

        setappLoader(false)
    }

    const [editLoader, setEditLoader] = useState(false)

    const editSiteInfo = async () => {
        setEditLoader(true)
        const { title, description, email, phone, about } = siteData
        const responseThree = await fetch(`https://hotel-management-backend-application-three.vercel.app/api/metadata/editSite/${siteData.id}`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
            },

            body: JSON.stringify({ title, description, email, phone, about }), // body data type must match "Content-Type" header
        });
        const resData = await responseThree.json(); // parses JSON response into native JavaScript objects
        setSiteData({ id: siteData.id, title: resData.title, email: resData.email, phone: resData.phone, description: resData.description, about: resData.about })
        setEditLoader(false)

    }

    useEffect(() => {
        getAppData()
    }, [])


    const modalRef = useRef(null)
        const [selectedImage, setSelectedImage] = useState(null)
        const [setImageLoader, setSetImageLoader] = useState(false)

        const [roomSelectedImage, setRoomSelectedImage] = useState(null)
    
        const cloudinary = async (file) => {
        // setEditorLoader(true)
        setSetImageLoader(true)
        const url = "https://api.cloudinary.com/v1_1/dextrzp2q/image/upload"

        // https://faithful-bass-yoke.cyclic.app/api/sendImg/

        const formData = new FormData()

        formData.append('file', file)
        formData.append('upload_preset', 'dga8po59')

        const response = await fetch(url, {
            method: 'post', // *GET, POST, PUT, DELETE, etc.



            body: formData // body data type must match "Content-Type" header
        });
        const myres = await response.json();
        modalRef.current.click()
        console.log(myres.secure_url)
        // const finalAdd = coverImages.push()
        // console.log(finalAdd);
        
        setCoverImages([...coverImages,{url:myres.secure_url}])
        setSelectedImage(null)
        setSetImageLoader(false)
    }

    const roomButtonRef = useRef(null)
    const [obj, setobj] = useState(null)
    const roomImageCloudinary = async (file) => {
        // setEditorLoader(true)
        // setSetImageLoader(true)
        const url = "https://api.cloudinary.com/v1_1/dextrzp2q/image/upload"
        setSetImageLoader(true)
        // https://faithful-bass-yoke.cyclic.app/api/sendImg/

        const formData = new FormData()

        formData.append('file', file)
        formData.append('upload_preset', 'dga8po59')

        const response = await fetch(url, {
            method: 'post', // *GET, POST, PUT, DELETE, etc.



            body: formData // body data type must match "Content-Type" header
        });
        const myres = await response.json();
        modalRef.current.click()
        console.log(myres.secure_url)
        const newAssets = [...obj.assets,{url:myres.secure_url}]
        setobj({...obj,assets:newAssets})

        console.log(newAssets)
        console.log(obj)
        // const finalAdd = coverImages.push()
        // console.log(finalAdd);
        setSetImageLoader(false)
        roomButtonRef.current.click()
        // setCoverImages([...coverImages,{url:myres.secure_url}])
        setRoomSelectedImage(null)
        
    }

    const [editorLoader, setEditorLoader] = useState(false)
    const editImages = async () => {
        // setEditLoader(true)
        // const { title, description, email, phone, about } = siteData
        setEditorLoader(true)
        console.log(coverImages);
        
        const responseThree = await fetch(`https://hotel-management-backend-application-three.vercel.app/api/coverImages/editImages/6796b7f14be1c2f2c3a30100`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
            },

            body: JSON.stringify({assets:coverImages}), // body data type must match "Content-Type" header
        });
        const resData = await responseThree.json(); // parses JSON response into native JavaScript objects
        console.log(resData);
        setEditorLoader(false)
        
        // setSiteData({ id: siteData.id, title: resData.title, email: resData.email, phone: resData.phone, description: resData.description, about: resData.about })
        // setEditLoader(false)

    }
    const editRooms = async () => {
        // setEditLoader(true)
        // const { title, description, email, phone, about } = siteData
        setEditorLoader(true)
        // console.log(coverImages);
        
        const responseThree = await fetch(`https://hotel-management-backend-application-three.vercel.app/api/rooms/editRoom/${obj._id}`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
            },

            body: JSON.stringify(obj), // body data type must match "Content-Type" header
        });
        const resData = await responseThree.json(); // parses JSON response into native JavaScript objects
        console.log(resData);
        getAppData()
        setEditorLoader(false)
        
        // setSiteData({ id: siteData.id, title: resData.title, email: resData.email, phone: resData.phone, description: resData.description, about: resData.about })
        // setEditLoader(false)

    }
    const createRoom = async () => {
        // setEditLoader(true)
        // const { title, description, email, phone, about } = siteData
        setEditorLoader(true)
        // console.log(coverImages);
        
        const responseThree = await fetch(`https://hotel-management-backend-application-three.vercel.app/api/rooms/createRoom`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
            },

            body: JSON.stringify(obj), // body data type must match "Content-Type" header
        });
        const resData = await responseThree.json(); // parses JSON response into native JavaScript objects
        console.log(resData);
        getAppData()
        setEditorLoader(false)
        
        // setSiteData({ id: siteData.id, title: resData.title, email: resData.email, phone: resData.phone, description: resData.description, about: resData.about })
        // setEditLoader(false)

    }
    const deleteRoom = async () => {
        // setEditLoader(true)
        // const { title, description, email, phone, about } = siteData
        setEditorLoader(true)
        // console.log(coverImages);
        
        const responseThree = await fetch(`https://hotel-management-backend-application-three.vercel.app/api/rooms/deleteRoom/${obj._id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
            },

            body: JSON.stringify(obj), // body data type must match "Content-Type" header
        });
        const resData = await responseThree.json(); // parses JSON response into native JavaScript objects
        console.log(resData);
        getAppData()
        setEditorLoader(false)
        
        // setSiteData({ id: siteData.id, title: resData.title, email: resData.email, phone: resData.phone, description: resData.description, about: resData.about })
        // setEditLoader(false)

    }

    // 


      console.clear()
    return (
        <AppContext.Provider value={{deleteRoom,createRoom,editRooms,obj,setobj,allPackageData,roomButtonRef,setRoomSelectedImage,roomImageCloudinary,roomSelectedImage,editorLoader,setCoverImages,editImages,setImageLoader,selectedImage,setSelectedImage,modalRef, editLoader, siteData, world, signIn, coverImages, appLoader, adminToken, admin, setAdminToken, editSiteInfo, setSiteData,cloudinary }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppState