import axios from 'axios';
import { BASE_URL, configHeaders, https } from './config';

export let dangNhap = (values) => {
  return https.post('QuanLyNguoiDung/DangNhap', values);
};
export let getBanner = () => {
  return axios({
    url: `${BASE_URL}QuanLyPhim/LayDanhSachBanner`,
    method: 'GET',
    headers: configHeaders(),
  });
};
export let getListMovie = () => {
  return axios({
    url: `${BASE_URL}QuanLyPhim/LayDanhSachPhim?maNhom=GP02`,
    method: 'GET',
    headers: configHeaders(),
  });
};

export let getInfoMovie = (id) => {
  return axios({
    url: `${BASE_URL}QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: 'GET',
    headers: configHeaders(),
  });
};
export let userRegister = (values) => {
  return https.post('QuanLyNguoiDung/DangKy', values);
};
export let getMovieTheater = () => {
  return axios({
    url: `${BASE_URL}QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03`,
    method: 'GET',
    headers: configHeaders(),
  });
};
export let getInfoShowtimes = (id) => {
  return axios({
    url: `${BASE_URL}QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
    method: 'GET',
    headers: configHeaders(),
  });
};
export let getTicketRoom = (id) => {
  return https.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
};
export let bookTicket = (values) => {
  return https.post('QuanLyDatVe/DatVe', values);
};

export let getThongTinTaiKhoan = () => {
  return https.post('QuanLyNguoiDung/ThongTinTaiKhoan');
};

export let updateUserInfo = (values) => {
  return https.put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', values);
};
