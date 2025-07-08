import React from 'react';
import '../style/footer.scss';
import { NavLink } from 'react-router-dom';
export default function Footer() {
  return (
    <div id='footer' className=' footer'>
      <div
        className='footer__top py-20'
        style={{
          background: `url(../image/footer/footer_bg.png) center / cover no-repeat`,
          height: '100%',
        }}>
        <div className='container grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-7 '>
          <div>
            <img loading='lazy' src='../image/logo_movie.png' className='mb-4 md:mt-8' alt='...' />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div>
            <h4>Dịch vụ</h4>
            <ul className='space-y-4'>
              <li>
                <a href='#header' className='hover:text-orange-500 duration-300'>
                  Home
                </a>
              </li>
              <li>
                <NavLink to={'*'} className='hover:text-orange-500 duration-300'>
                  Coming soon
                </NavLink>
              </li>
              <li>
                <NavLink to={'*'} className='hover:text-orange-500 duration-300'>
                  Top rated
                </NavLink>
              </li>
            </ul>
          </div>
          <div id='recentPosts'>
            <h4>Bài viết gần đây</h4>
            <div className='mb-4 border-b border-white '>
              <div className='flex mb-5 recentPost__top'>
                <img
                  className='object-contain'
                  loading='lazy'
                  src='../image/footer/footIMG_1.jpg'
                  width={100}
                  alt='...'
                />
                <div className='recentPost__info'>
                  <h5>Sáu cuốn sách được chuyển thể thành phim đáng mong đợi vào mùa thu này</h5>
                  <span>April 28, 2022</span>
                  <span>/ 0 Comments</span>
                </div>
              </div>
            </div>
            <div className='border-b border-white recentPost__bot'>
              <div className='flex mb-5 recentPost__top'>
                <img
                  className='object-contain'
                  loading='lazy'
                  src='../image/footer/footIMG_2.jpg'
                  width={100}
                  alt='...'
                />
                <div className='recentPost__info'>
                  <h5>The Beatles: Eight Days a Week - The Touring</h5>
                  <span>April 28, 2022</span>
                  <span>/ 0 Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4>Liên hệ</h4>
            <div className='flex items-center '>
              <i className='fa-solid fa-location-arrow mr-4'></i>
              <p className='md:text-sm xl:text-base'>Lorem ipsum dolor sit.</p>
            </div>
            <div className='flex items-center '>
              <i className='fa-regular fa-envelope mr-4'></i>
              <p>nguyenduylk202@gmail.com</p>
            </div>
            <div className='flex items-center '>
              <i className='fa-solid fa-phone mr-4'></i>
              <p className='text-orange-500 font-semibold'>01-234-5678</p>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__bottom bg-black py-5'>
        <div className=' container  flex justify-between' style={{ color: '#666666' }}>
          <div>©copyright 2016 Movie</div>
          <div className='space-x-4 cursor-pointer'>
            <NavLink to={'https://www.facebook.com/'}>
              <i className='fa-brands fa-facebook-f hover:text-orange-500 duration-300'></i>
            </NavLink>
            <NavLink to={'https://twitter.com/'}>
              <i className='fa-brands fa-x-twitter hover:text-orange-500 duration-300'></i>
            </NavLink>
            <NavLink to={'https://www.linkedin.com/'}>
              <i className='fa-brands fa-linkedin-in hover:text-orange-500 duration-300'></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
