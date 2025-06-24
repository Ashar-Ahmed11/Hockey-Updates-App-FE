import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../context/appContext';
import Sidebar from './RightSidebar';

const Posts = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const { id } = useParams(); // post ID from URL
  const { posts , categoryPosts} = useContext(AppContext);

  // Find the single post
  const post = categoryPosts.find(p => String(p._id) === String(id));
  

  // const categoryPosts = post
  // ? posts.filter(p => String(p.category) === String(post.category))
  // : [];
// useEffect(() => {
//   if(categoryPosts.length > 0){

//   }
// }, []);



  useEffect(() => {
    console.log("category posts:",categoryPosts)
  }, [categoryPosts]);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!post) {
    return (
      <div className="container text-center py-5">
        <h4 className="text-muted">Post not found</h4>
        <p className="text-muted">Please check the URL or try again later.</p>
      </div>
    );
  }

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: '22px' }}>
      <div className="row g-0">
        <div className={`${isMobile ? 'col-12' : 'col-lg-9'}`}>
          <div className="p-4">
            <div className="card border-0 shadow-sm">

              <div className="card-body p-4">
                <h1 className="card-title mb-3" style={{ fontSize: '36px', fontWeight: '700' }}>
                  {post.title}
                </h1>

              {/* Cover Image */}
              {post.coverImage && (
                <div className="position-relative overflow-hidden m-5">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="card-img-top w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}

                <p
                  className="card-text text-muted mb-3"
                  style={{ fontSize: '18px', lineHeight: '1.6' }}
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />

                <div className="d-flex justify-content-between align-items-center text-muted" style={{ fontSize: '16px' }}>
                  {post.author && <span>By {post.author}</span>}
                  {post.createdAt && <span>{new Date(post.createdAt).toLocaleDateString()}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        {!isMobile && (
          <div className="col-lg-3">
            <div className="sticky-top pr-3 mb-3" style={{ top: '0', paddingRight: '22px' }}>
              <Sidebar relatedPosts={categoryPosts} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
