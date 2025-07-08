import React, { Fragment, useEffect, useState } from 'react';
import { getListMovie } from '../../../Services/api';
import './features.scss';
import moment from 'moment/moment';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { getTrailer } from '../../../redux/reducer/featuresMovieSlice';
import { message } from 'antd';

export default function FeaturesMovie() {
  const [movieArr, setMovieArr] = useState([]);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);
  let { trailer } = useSelector((state) => state.featuresMovieSlice);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await getListMovie();
        setMovieArr(res.data.content);
      } catch (err) {
        message.error(err.response.data);
      }
    };
    fetchData();
  }, []);
  let renderMovie = () => {
    return movieArr.slice(0, 5).map((item, index) => {
      return (
        <Fragment key={index}>
          <div className='feature__item'>
            <div className='feature__img'>
              <img src={item.hinhAnh} loading='lazy' alt='...' />
            </div>
            <div className='features__info flex flex-col'>
              <h3 className='text-center font-bold mt-1 md:mt-2 text-base md:text-lg'>
                {item.tenPhim}
              </h3>
              <span className='text-[13px]'>
                {item.moTa.length > 50 ? item.moTa.slice(0, 50) + '...' : item.moTa}
              </span>
              <p className='text-sm md:text-base'>
                Khởi chiếu: <span>{moment(item.ngayKhoiChieu).format('ll')}</span>
              </p>
              <div></div>
            </div>
            <div className='overlay text-white flex flex-col justify-between'>
              <div className='overlay__info'>
                <h4 className='text-2xl font-bold mb-5 text-center hover:text-orange-500 duration-300'>
                  {item.tenPhim}
                </h4>
                <p>
                  <span>Khởi chiếu: </span>
                  {moment(item.ngayKhoiChieu).format('ll')}
                </p>
                <p>
                  <span>Thể loại: </span> Mystery
                </p>
                <div className='flex items-center text-white'>
                  <div className='bg-yellow-400 p-1 mr-4 rounded-md text-black font-bold'>IMDb</div>
                  <span>{item.danhGia}</span>
                </div>
              </div>
              <div className='flex justify-around'>
                {/* modal video trailer */}
                <button
                  onClick={() => {
                    dispatch(getTrailer(item.trailer));
                    setOpen(true);
                  }}
                  className='opacity-70 hover:opacity-100 duration-300'>
                  <i className='fa-solid fa-play bg-orange-500 h-6 w-6 leading-6 text-white mr-1 rounded-full '></i>
                  <span>Trailer</span>
                </button>
                <Modal
                  open={open}
                  styles={{
                    modal: {
                      width: '100%',
                      height: '80%',
                      padding: '0px',
                      background: 'transparent',
                      margin: 0,
                      maxWidth: '950px',
                    },
                  }}
                  onClose={onCloseModal}
                  closeIcon={<i className='fa-solid fa-x text-white'></i>}
                  center>
                  <ReactPlayer controls={true} url={trailer} width={'100%'} height={'100%'} />
                </Modal>
                <NavLink to={`/detail/${item.maPhim}`}>
                  <button className='opacity-70 hover:opacity-100 duration-300'>
                    <i className='fa-solid fa-exclamation bg-orange-500 h-6 w-6 leading-6 text-white mr-1 rounded-full text-center'></i>
                    <span>Chi tiết</span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </Fragment>
      );
    });
  };
  return (
    <div id='featuresMovie' className='container '>
      <div className='features_header flex'>
        <span className='seperator'></span>
        <h2>Now Playing</h2>
        <span className='seperator'></span>
      </div>

      <div className='features__list grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:gap-8 mt-10'>
        {renderMovie()}
      </div>
    </div>
  );
}
