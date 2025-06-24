import React from 'react'
import AppContext from './appContext'
import { useEffect, useState,useRef } from 'react'
import useLocalStorage from '../components/hooks/uselocalstorage'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const AppState = (props) => {

    const history = useHistory()

    const world = "helloworldhowareyou"

    // const [appLoader, setappLoader] = useState(true)
    const [coverImages, setCoverImages] = useState([])
    const [adminToken, setAdminToken] = useLocalStorage('adminToken', null)
    const [admin, setAdmin] = useState(false)
    const [settings, setSettings] = useState(null);
    const [categories, setCategories] = useState([])
    const [posts, setPosts] = useState([])
    const [categoryPosts, setCategoryPost] = useState([])
    const [appLoader, setAppLoader] = useState(false)

    const signIn = async (username, password) => {

        // settheProductLoader(true)

        const url = "http://localhost:5000/api/auth/login"
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
            },

            body: JSON.stringify({ email: username, password }), // body data type must match "Content-Type" header
        });
        const data = await response.json(); // parses JSON response into native JavaScript objects
        localStorage.setItem('authToken', data.token);
        if (data.token) {
            history.push('/admin-dashboard/basic-settings')
            setAdmin(true)
        }
        console.log(data);



        // console.log(data.map((e)=>{return e.id}))
    }

    // console.log(adminToken);

    
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

        // setappLoader(false)
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



   const getBasicSettings = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/settings/getsettings");
    const data = await res.json();

    if (res.ok) {
      setSettings(data); 
      console.log(data)
    } else {
      console.error("Failed to fetch settings:", data.error || "Unknown error");
    }
  } catch (err) {
    console.error("Error fetching basic settings:", err);
  }
};

// let tokenExist;
useEffect(() => {
  //    tokenExist = localStorage.getItem("authToken")
  // if (tokenExist) {
    getBasicSettings();
    getCategories();
    getPosts();
  
}, []);



const updateSettings = async (newSettings) => {
  try {
    const res = await fetch("http://localhost:5000/api/settings/updatesettings", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSettings),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Failed to update settings:", data.error || data);
      return { success: false, error: data.error || "Update failed" };
    }

    console.log(" Settings updated successfully:", data);
    return { success: true, data };
  } catch (err) {
    console.error("Network/server error:", err.message);
    return { success: false, error: err.message };
  }
};


const getCategories = async()=>{
    try {
        const res = await fetch("http://localhost:5000/api/category/getcategories")
        const data = await res.json()
        
        if (res.ok) {
            setCategories(data)
    } else {
      console.error("Failed to fetch Categories:", data.error || "Unknown error");
    }
  } catch (err) {
    console.error("Error fetching categories:", err);
  } 
}


const createCategory = async (categoryData)=>{
     try {
      const res = await fetch('http://localhost:5000/api/category/createcategory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData),
      });

      const result = await res.json();

      if (res.ok) {
        alert('Category created successfully!');
      } else {
        alert('Failed to create category: ' + result.error);
      }
    } catch (error) {
      console.error('Error creating category:', error);
      alert('Server error.');
    }
}


const createPost = async (post)=>{
    try {
      const res = await fetch('http://localhost:5000/api/post/createpost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Post created successfully!');
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Something went wrong.');
    }
}


const getPosts = async ()=>{
    try {
        const res = await fetch('http://localhost:5000/api/post/getpost')
    const data = await res.json()
        
        if (res.ok) {
            setPosts(data)
    } else {
      console.error("Failed to fetch Posts:", data.error || "Unknown error");
    }
  } catch (err) {
    console.error("Error fetching posts:", err);
  } 
}



const updateCategory = async (id, updatedCategory) => {
  const res = await fetch(`http://localhost:5000/api/category/updatecategory/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedCategory),
  });
  return await res.json();
};




const updatePost = async (id,updatedPost) => {
  try {
    const res = await fetch(`http://localhost:5000/api/post/updatepost/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    });

    const result = await res.json();

    if (res.ok) {
      alert('Post updated successfully!');
      return { success: true, data: result };
    } else {
      alert('Failed to update post: ' + result.error);
      return { success: false, error: result.error };
    }
  } catch (error) {
    console.error('Error updating post:', error);
    return { success: false, error: error.message };
  }
};



const deleteCategory = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/api/category/deletecategory/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await res.json();

    if (res.ok) {
      alert('Category deleted successfully!');
      return { success: true, data: result };
    } else {
      alert('Error deleting category: ' + result.error);
      return { success: false, error: result.error };
    }
  } catch (error) {
    console.error('Error deleting category:', error);
    alert('Server error.');
    return { success: false, error: error.message };
  }
};


const deletePost = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/api/post/deletepost/${id}`, {
      method: 'DELETE',
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Delete failed:', data.error || 'Unknown error');
      alert('Failed to delete post.');
    } else {
      alert('Post deleted successfully!');
    }
  } catch (error) {
    console.error('Error deleting post:', error);
    alert('Server error while deleting post.');
  }
};



const getPostsByCategory = async (categoryId) => {
  try {
    const response = await fetch(`http://localhost:5000/api/post/getcategorypost/${categoryId}`);
    const data = await response.json();

    if (data.success) {
      console.log('Posts:', data.posts);
     setCategoryPost(data.posts) // or update your state here if in React
    } else {
      console.error('Failed to fetch posts');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


    // 


    //   console.clear()
    return (
        <AppContext.Provider value={{settings, appLoader, setAppLoader, getPostsByCategory,categoryPosts, deletePost,getBasicSettings, deleteCategory,updatePost, updateCategory, posts,getPosts,createPost ,createCategory ,getCategories,categories, updateSettings, deleteRoom,createRoom,editRooms,obj,setobj,allPackageData,roomButtonRef,setRoomSelectedImage,roomImageCloudinary,roomSelectedImage,editorLoader,setCoverImages,editImages,setImageLoader,selectedImage,setSelectedImage,modalRef, editLoader, siteData, world, signIn, coverImages, appLoader, adminToken, admin, setAdminToken, editSiteInfo, setSiteData,cloudinary }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppState