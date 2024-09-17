import React, { useState } from 'react';
import { CiDark } from 'react-icons/ci';
import { MdOutlineLightMode } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
    const location = useLocation()
    const [count, setCount] = useState(false);
    const [topic, setTopic] = useState(true);
    return (
        <header className='shadow-[0px_2px_4px_0px_#00000040] relative z-40' >
            <nav className='cont flex justify-between items-center px-[20px] py-1'>
                <Link to="/home">
                    <img src="/logo.svg" className='w-[150px] hidden xs:block' alt="" />
                    <img src="/logo2.svg" className='w-[25px] block xs:hidden' alt="" />
                </Link>
                <div className="svg_1 flex items-center gap-[20px]">
                    <Link to="/home" className={`link_color ${location.pathname === '/home' ? 'actove_link' : ''} text-[8px] flex items-center gap-2`}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='hover_svg' fill-rule="evenodd" clip-rule="evenodd" d="M21.849 0.771405L26.6631 5.709V2.85793C26.6631 2.0677 27.261 1.42709 27.9985 1.42709H31.9997C32.7372 1.42709 33.3351 2.0677 33.3351 2.85793V12.5522L39.588 18.9655C40.1208 19.5119 40.1393 20.4177 39.6293 20.9885C39.1193 21.5593 38.2739 21.5791 37.7411 21.0327L35.9996 19.2464V37.1407C35.9996 37.899 35.7184 38.6263 35.218 39.1625C34.7175 39.6988 34.0387 40 33.331 40H25.3319C24.5943 40 23.9965 39.3594 23.9965 38.5692V26.4274C23.9965 26.2386 23.9265 26.0575 23.8019 25.924C23.6773 25.7905 23.5083 25.7155 23.3321 25.7155H16.6662C16.49 25.7155 16.321 25.7905 16.1964 25.924C16.0718 26.0575 16.0018 26.2386 16.0018 26.4274V38.5692C16.0018 39.3594 15.4039 40 14.6664 40H6.66729C5.95953 40 5.28076 39.6988 4.7803 39.1625C4.27984 38.6263 3.99868 37.899 3.99868 37.1407V19.2482L2.25885 21.0327C1.72608 21.5791 0.880743 21.5593 0.370742 20.9885C-0.139258 20.4177 -0.120795 19.5119 0.41198 18.9655L18.1521 0.770238C18.6965 0.178913 19.4383 -0.001084 20.0052 4.90455e-06C20.5698 0.00108938 21.3089 0.18256 21.849 0.771405ZM6.66952 16.5089V37.1383H13.331V26.4274C13.331 25.4796 13.6824 24.5707 14.3078 23.9005C14.9333 23.2304 15.7816 22.8539 16.6662 22.8539H23.3321C24.2166 22.8539 25.065 23.2304 25.6904 23.9005C26.3159 24.5707 26.6673 25.4796 26.6673 26.4274V37.1383H33.3288V16.5071L20.0257 2.86284C20.0179 2.86212 20.0094 2.86169 20.0004 2.86167C19.9911 2.86166 19.9824 2.86208 19.9743 2.86281L6.66952 16.5089ZM30.6643 9.81281V4.28876H29.3339V8.44834L30.6643 9.81281Z" fill="#9298A4" />
                        </svg>
                        Home
                    </Link>
                    <Link to="/leads" className={`link_color ${location.pathname === '/leads' ? 'actove_link' : ''} text-[8px] flex items-center gap-2`}>
                        <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='hover_svg' fill-rule="evenodd" clip-rule="evenodd" d="M5.81973 2.86158C4.21467 2.86158 2.91352 4.13954 2.91352 5.71599V34.284C2.91352 35.8605 4.21467 37.1384 5.81973 37.1384H26.1803C27.7853 37.1384 29.0865 35.8605 29.0865 34.284V5.71599C29.0865 4.13955 27.7853 2.86158 26.1803 2.86158H5.81973ZM0 5.71599C0 2.55914 2.60558 0 5.81973 0H26.1803C29.3944 0 32 2.55914 32 5.71599V34.284C32 37.4409 29.3944 40 26.1803 40H5.81973C2.60558 40 0 37.4409 0 34.284V5.71599ZM7.27288 8.57403C7.27288 7.78382 7.92509 7.14324 8.72963 7.14324H23.275C24.0795 7.14324 24.7317 7.78382 24.7317 8.57403C24.7317 9.36423 24.0795 10.0048 23.275 10.0048H8.72963C7.92509 10.0048 7.27288 9.36423 7.27288 8.57403ZM7.27288 15.7166C7.27288 14.9264 7.92509 14.2858 8.72963 14.2858H23.275C24.0795 14.2858 24.7317 14.9264 24.7317 15.7166C24.7317 16.5068 24.0795 17.1474 23.275 17.1474H8.72963C7.92509 17.1474 7.27288 16.5068 7.27288 15.7166ZM7.27288 22.8598C7.27288 22.0696 7.92509 21.429 8.72963 21.429H16.0066C16.8111 21.429 17.4634 22.0696 17.4634 22.8598C17.4634 23.65 16.8111 24.2906 16.0066 24.2906H8.72963C7.92509 24.2906 7.27288 23.65 7.27288 22.8598Z" fill="#9298A4" />
                        </svg>

                        Leads
                    </Link>
                    <Link to="/quotes" className={`link_color ${location.pathname === '/quotes' ? 'actove_link' : ''} text-[8px] flex items-center gap-2`}>
                        <svg width="32" className='' height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='hover_svg ' fill-rule="evenodd" clip-rule="evenodd" d="M5.81973 2.86158C5.04895 2.86158 4.30975 3.16231 3.76473 3.69762C3.2197 4.23293 2.91352 4.95896 2.91352 5.71599V34.284C2.91352 35.041 3.2197 35.7671 3.76473 36.3024C4.30975 36.8377 5.04895 37.1384 5.81973 37.1384H26.1803C26.951 37.1384 27.6903 36.8377 28.2353 36.3024C28.7803 35.7671 29.0865 35.041 29.0865 34.284V17.147H18.9116C17.7537 17.147 16.6432 16.6953 15.8245 15.8911C15.0057 15.0869 14.5458 13.9963 14.5458 12.859V2.86158H5.81973ZM17.4593 4.88749L27.0278 14.2854H18.9116C18.5264 14.2854 18.157 14.1352 17.8846 13.8677C17.6123 13.6001 17.4593 13.2373 17.4593 12.859V4.88749ZM1.70456 1.67418C2.79597 0.602219 4.27624 0 5.81973 0H14.7956C15.953 0.000171774 17.0632 0.451752 17.8817 1.25546L30.7216 13.8666C31.5399 14.6705 31.9998 15.7607 32 16.8975V34.284C32 35.8 31.3868 37.2539 30.2954 38.3258C29.204 39.3978 27.7238 40 26.1803 40H5.81973C4.27624 40 2.79597 39.3978 1.70456 38.3258C0.613149 37.2539 0 35.8 0 34.284V5.71599C0 4.20002 0.613149 2.74613 1.70456 1.67418ZM7.27288 22.8574C7.27288 22.0672 7.92509 21.4266 8.72963 21.4266H23.275C24.0795 21.4266 24.7317 22.0672 24.7317 22.8574C24.7317 23.6476 24.0795 24.2882 23.275 24.2882H8.72963C7.92509 24.2882 7.27288 23.6476 7.27288 22.8574ZM7.27288 29.9989C7.27288 29.2087 7.92509 28.5681 8.72963 28.5681H23.275C24.0795 28.5681 24.7317 29.2087 24.7317 29.9989C24.7317 30.7891 24.0795 31.4296 23.275 31.4296H8.72963C7.92509 31.4296 7.27288 30.7891 7.27288 29.9989Z" fill="#9298A4" />
                        </svg>
                        Quotes
                    </Link>
                    <Link to="/orders" className={`link_color ${location.pathname === '/orders' ? 'actove_link' : ''} text-[8px] flex items-center gap-2`}>
                        <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='hover_svg' fill-rule="evenodd" clip-rule="evenodd" d="M15.9997 0C16.8042 0 17.4564 0.64059 17.4564 1.4308V25.1136L22.2392 20.4161C22.8081 19.8573 23.7305 19.8573 24.2994 20.4161C24.8683 20.9749 24.8683 21.8808 24.2994 22.4396L17.0267 29.5826C16.4578 30.1414 15.5354 30.1414 14.9665 29.5826L7.69387 22.4396C7.12497 21.8808 7.12497 20.9749 7.69387 20.4161C8.26277 19.8573 9.18514 19.8573 9.75404 20.4161L14.5429 25.1196V1.4308C14.5429 0.64059 15.1951 0 15.9997 0ZM5.09257 14.2886C4.51465 14.2886 3.9604 14.5141 3.55174 14.9155C3.14309 15.3169 2.91352 15.8612 2.91352 16.4289V34.9982C2.91352 35.5658 3.14309 36.1102 3.55174 36.5115C3.9604 36.9129 4.51465 37.1384 5.09257 37.1384H26.9074C27.4854 37.1384 28.0396 36.9129 28.4483 36.5115C28.8569 36.1102 29.0865 35.5658 29.0865 34.9982V16.4289C29.0865 15.8612 28.8569 15.3169 28.4483 14.9155C28.0396 14.5141 27.4854 14.2886 26.9074 14.2886H23.2716C22.4671 14.2886 21.8149 13.6481 21.8149 12.8578C21.8149 12.0676 22.4671 11.427 23.2716 11.427H26.9074C28.2581 11.427 29.5534 11.954 30.5084 12.892C31.4635 13.8301 32 15.1023 32 16.4289V34.9982C32 36.3247 31.4635 37.597 30.5084 38.535C29.5534 39.473 28.2581 40 26.9074 40H5.09257C3.74194 40 2.44662 39.473 1.49158 38.535C0.536537 37.597 0 36.3247 0 34.9982V16.4289C0 15.1023 0.536537 13.8301 1.49158 12.892C2.44662 11.954 3.74194 11.427 5.09257 11.427H8.72838C9.53292 11.427 10.1851 12.0676 10.1851 12.8578C10.1851 13.6481 9.53292 14.2886 8.72838 14.2886H5.09257Z" fill="#9298A4" />
                        </svg>

                        Orders
                    </Link>
                    <Link to="/tickets" className={`link_color ${location.pathname === '/tickets' ? 'actove_link' : ''} text-[8px]  flex items-center gap-2`}>

                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='hover_svg' fill-rule="evenodd" clip-rule="evenodd" d="M23.8724 0.485199C24.1833 0.174524 24.6047 6.55136e-07 25.0442 6.55136e-07C25.4837 6.55136e-07 25.9051 0.174524 26.216 0.485199L29.8895 4.16296C29.8906 4.16404 29.8917 4.16513 29.8928 4.16621C30.1875 4.45996 30.3608 4.85394 30.3782 5.26977C30.3957 5.68714 30.2548 6.0957 29.9837 6.41353L29.9825 6.41492L29.9813 6.41631C29.5616 6.90561 29.3421 7.5353 29.3667 8.17945C29.3913 8.82323 29.6578 9.43403 30.1131 9.88984C30.5695 10.3442 31.1806 10.6096 31.8243 10.6332C32.4684 10.6567 33.0977 10.4363 33.5863 10.0159L33.5885 10.014L33.5906 10.0122C33.9084 9.74109 34.317 9.60013 34.7344 9.61759C35.1505 9.63499 35.5447 9.80853 35.8385 10.1035C35.8394 10.1045 35.8403 10.1054 35.8412 10.1063L39.5148 13.7799C39.8255 14.0907 40 14.5122 40 14.9516C40 15.3911 39.8255 15.8126 39.5148 16.1234L33.653 21.9852C33.2907 22.3475 32.8489 22.6207 32.3629 22.7829C32.269 22.8144 32.1838 22.8673 32.1139 22.9374C32.0438 23.0077 31.9912 23.0933 31.96 23.1874L31.9596 23.1886L31.9592 23.1899C31.7971 23.6762 31.5243 24.1182 31.1621 24.4811L16.1276 39.5148C15.8168 39.8255 15.3953 40 14.9558 40C14.5163 40 14.0949 39.8255 13.784 39.5148L10.1105 35.8412C10.1096 35.8403 10.1086 35.8394 10.1077 35.8385C9.81269 35.5447 9.63916 35.1505 9.62176 34.7344C9.6043 34.317 9.74525 33.9085 10.0163 33.5906L10.0178 33.5889L10.0193 33.5872C10.4394 33.0981 10.6592 32.4683 10.6348 31.824C10.6103 31.1797 10.3434 30.5684 9.88751 30.1125C9.43159 29.6566 8.82029 29.3897 8.17599 29.3652C7.53169 29.3408 6.90193 29.5606 6.41279 29.9807L6.41108 29.9822L6.40936 29.9837C6.09153 30.2548 5.68298 30.3957 5.2656 30.3782C4.84992 30.3609 4.45607 30.1876 4.16235 29.8931C4.16116 29.8919 4.15998 29.8907 4.15879 29.8895L0.485198 26.216C0.174524 25.9051 0 25.4837 0 25.0442C0 24.6047 0.174524 24.1833 0.485198 23.8724L15.5189 8.84206C15.8813 8.48035 16.3227 8.20771 16.8084 8.04557M25.0438 3.0851L19.896 8.23287C19.8263 8.30256 19.7738 8.38751 19.7426 8.48099C19.5811 8.96768 19.3086 9.41014 18.9466 9.77335C18.5841 10.1371 18.1419 10.4113 17.6549 10.5743L17.654 10.5746L17.6532 10.5749C17.5589 10.6063 17.4733 10.6592 17.4029 10.7293L3.08477 25.0443L5.44808 27.4076C6.29927 26.9114 7.27962 26.6627 8.27704 26.7005C9.59315 26.7504 10.8418 27.2956 11.7731 28.2269C12.7044 29.1582 13.2496 30.4069 13.2995 31.723C13.3373 32.7204 13.0886 33.7007 12.5924 34.5519L14.9558 36.9153L29.2747 22.5973C29.3446 22.5272 29.3973 22.442 29.4288 22.3482C29.5903 21.8611 29.8629 21.4184 30.2251 21.0549C30.5876 20.6912 31.0298 20.417 31.5168 20.254L31.5187 20.2533C31.6123 20.2222 31.6974 20.1696 31.7671 20.0998L36.9153 14.9516L34.5524 12.5887C33.7024 13.085 32.7233 13.3345 31.7268 13.2981C30.4112 13.2499 29.1623 12.707 28.2298 11.7778L28.2288 11.7769L28.2279 11.7759C27.2971 10.8449 26.7521 9.59671 26.7019 8.28113C26.6639 7.28381 26.9123 6.30346 27.4081 5.45214L25.0438 3.0851Z" fill="#9298A4" />
                            <path className='hover_svg' fill-rule="evenodd" clip-rule="evenodd" d="M39.5148 16.1276C39.8255 15.8167 40 15.3953 40 14.9558C40 14.5163 39.8255 14.0949 39.5148 13.784L35.837 10.1105C35.836 10.1094 35.8349 10.1083 35.8338 10.1072C35.54 9.8125 35.1461 9.63915 34.7302 9.62176C34.3129 9.6043 33.9041 9.74478 33.5863 10.0159L33.5851 10.0175L33.5837 10.0187C33.0944 10.4384 32.4647 10.6579 31.8206 10.6333C31.1768 10.6087 30.566 10.3422 30.1102 9.88694C29.6558 9.43045 29.3904 8.81939 29.3668 8.17575C29.3433 7.5316 29.5633 6.90215 29.9837 6.41353L29.986 6.41153L29.9878 6.40937C30.2589 6.09155 30.3999 5.683 30.3824 5.26561C30.365 4.84954 30.1915 4.45534 29.8965 4.16153C29.8955 4.16062 29.8946 4.1597 29.8937 4.15879L26.2201 0.485199C25.9093 0.174539 25.4878 5.2408e-09 25.0484 0C24.6089 -5.2408e-09 24.1874 0.174539 23.8766 0.485199L18.0148 6.34699C17.6525 6.70929 17.3793 7.15106 17.2171 7.63711C17.1856 7.73098 17.1327 7.81624 17.0626 7.88614C16.9923 7.95615 16.9068 8.00883 16.8126 8.04L16.8114 8.04041L16.8101 8.04082C16.3238 8.20288 15.8818 8.47575 15.5189 8.83789L0.485198 23.8724C0.174524 24.1833 0 24.6047 0 25.0442C0 25.4837 0.174524 25.9051 0.485198 26.216L4.15879 29.8895C4.1597 29.8904 4.16062 29.8914 4.16154 29.8923C4.45534 30.1873 4.84954 30.3608 5.2656 30.3782C5.68298 30.3957 6.09153 30.2548 6.40936 29.9837L6.41108 29.9822L6.41279 29.9807C6.90193 29.5606 7.53169 29.3408 8.17599 29.3652C8.82029 29.3897 9.43159 29.6566 9.88751 30.1125C10.3434 30.5684 10.6103 31.1797 10.6348 31.824C10.6592 32.4683 10.4394 33.0981 10.0193 33.5872L10.0178 33.5889L10.0163 33.5906C9.74525 33.9085 9.6043 34.317 9.62176 34.7344C9.63914 35.1501 9.81238 35.5439 10.1069 35.8376C10.1081 35.8388 10.1093 35.84 10.1105 35.8412L13.784 39.5148C14.0949 39.8255 14.5163 40 14.9558 40C15.3953 40 15.8168 39.8255 16.1276 39.5148L31.1579 24.4811C31.5196 24.1187 31.7923 23.6773 31.9544 23.1916M36.9149 14.9562L31.7671 20.104C31.6974 20.1737 31.6125 20.2262 31.519 20.2574C31.0323 20.4189 30.5899 20.6914 30.2266 21.0534C29.8629 21.4159 29.5887 21.8581 29.4257 22.3451L29.4254 22.346L29.4251 22.3468C29.3937 22.4411 29.3408 22.5267 29.2707 22.5971L14.9558 36.9153L12.5924 34.5519C13.0886 33.7007 13.3373 32.7204 13.2995 31.723C13.2496 30.4069 12.7044 29.1582 11.7731 28.2269C10.8418 27.2956 9.59315 26.7504 8.27704 26.7005C7.27962 26.6627 6.29927 26.9114 5.44808 27.4076L3.08477 25.0443L17.4027 10.7253C17.4728 10.6554 17.558 10.6027 17.6518 10.5712C18.1389 10.4097 18.5816 10.1371 18.9451 9.77491C19.3088 9.41241 19.583 8.97016 19.746 8.48322L19.7467 8.48128C19.7779 8.38768 19.8304 8.30263 19.9002 8.23287L25.0484 3.0847L27.4113 5.44762C26.915 6.29763 26.6655 7.27674 26.702 8.27323C26.7501 9.58879 27.293 10.8377 28.2222 11.7702L28.2231 11.7712L28.2241 11.7721C29.1551 12.7029 30.4033 13.2479 31.7189 13.2981C32.7162 13.3361 33.6965 13.0877 34.5479 12.5918L36.9149 14.9562Z" fill="#9298A4" />
                            <path className='hover_svg' fill-rule="evenodd" clip-rule="evenodd" d="M17.223 8.05129C17.7437 7.53059 18.5879 7.53059 19.1086 8.05129L20.4845 9.42714C21.0052 9.94784 21.0052 10.7921 20.4845 11.3128C19.9638 11.8335 19.1196 11.8335 18.5988 11.3128L17.223 9.93692C16.7023 9.41622 16.7023 8.572 17.223 8.05129ZM21.3493 12.1792C21.8697 11.6583 22.714 11.6579 23.2349 12.1784L24.1524 13.0951C24.6733 13.6155 24.6737 14.4598 24.1533 14.9807C23.6328 15.5016 22.7886 15.502 22.2676 14.9815L21.3501 14.0649C20.8292 13.5444 20.8288 12.7002 21.3493 12.1792ZM25.0193 15.8467C25.5403 15.3263 26.3845 15.3267 26.9049 15.8476L27.8216 16.7651C28.3421 17.286 28.3417 18.1303 27.8208 18.6507C27.2998 19.1712 26.4556 19.1708 25.9351 18.6499L25.0185 17.7324C24.498 17.2114 24.4984 16.3672 25.0193 15.8467ZM28.6872 19.5155C29.2079 18.9948 30.0522 18.9948 30.5729 19.5155L31.9487 20.8914C32.4694 21.4121 32.4694 22.2563 31.9487 22.777C31.428 23.2977 30.5838 23.2977 30.0631 22.777L28.6872 21.4012C28.1665 20.8805 28.1665 20.0362 28.6872 19.5155Z" fill="#9298A4" />
                        </svg>
                        Tickets
                    </Link>
                </div>
                <div className="svg_2 flex items-center gap-5">
                    <form action="" className='flex  px-2 py-1 gap-2 w-[130px] bg-[#F5F7FA] rounded-[40px]' >
                        <img src="/search.svg" className='w-[10px]' alt="" />
                        <input
                            type="text"
                            placeholder='Global search'
                            className='bg-transparent w-full outline-none text-[10px] placeholder-[#8BA3CB] ' />
                    </form>
                    <button className='btn_hover w-[20px] rounded-[50%] h-[20px] flex justify-center items-center bg-[#F5F7FA]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                            <g clip-path="url(#clip0_705_419)">
                                <path d="M20.1924 38H17.8075C15.8787 38 14.3093 36.4307 14.3093 34.5018V33.695C13.4893 33.433 12.6925 33.1023 11.9271 32.7062L11.3553 33.278C9.97047 34.6645 7.75215 34.6239 6.40753 33.2775L4.72195 31.592C3.37495 30.2464 3.33621 28.0289 4.72239 26.6442L5.29373 26.0728C4.89762 25.3074 4.56698 24.5108 4.30491 23.6906H3.49815C1.56936 23.6906 0 22.1213 0 20.1925V17.8075C0 15.8787 1.56936 14.3094 3.49823 14.3094H4.30498C4.56705 13.4893 4.8977 12.6926 5.2938 11.9272L4.72202 11.3555C3.33665 9.97159 3.37488 7.75378 4.72247 6.40768L6.4082 4.72202C7.75593 3.37243 9.97374 3.33873 11.3559 4.72247L11.9272 5.29373C12.6926 4.8977 13.4893 4.56698 14.3094 4.30491V3.49815C14.3094 1.56928 15.8787 0 17.8076 0H20.1925C22.1213 0 23.6906 1.56928 23.6906 3.49815V4.30498C24.5107 4.56698 25.3074 4.8977 26.0728 5.2938L26.6446 4.72202C28.0295 3.33546 30.2478 3.37614 31.5924 4.72254L33.278 6.40805C34.625 7.75356 34.6637 9.97114 33.2775 11.3558L32.7062 11.9272C33.1023 12.6926 33.4329 13.4892 33.695 14.3094H34.5018C36.4306 14.3094 38 15.8787 38 17.8075V20.1925C38 22.1213 36.4306 23.6906 34.5018 23.6906H33.695C33.4329 24.5107 33.1023 25.3074 32.7062 26.0728L33.278 26.6446C34.6633 28.0285 34.6251 30.2463 33.2775 31.5924L31.5918 33.2781C30.2441 34.6276 28.0263 34.6613 26.6441 33.2776L26.0728 32.7063C25.3074 33.1024 24.5107 33.4331 23.6906 33.6952V34.502C23.6906 36.4307 22.1213 38 20.1924 38ZM12.2993 30.3681C13.3626 30.9969 14.5071 31.472 15.7008 31.7801C16.1925 31.9069 16.5359 32.3503 16.5359 32.8581V34.5018C16.5359 35.203 17.1065 35.7734 17.8076 35.7734H20.1925C20.8936 35.7734 21.4641 35.203 21.4641 34.5018V32.8581C21.4641 32.3503 21.8076 31.9069 22.2992 31.7801C23.493 31.472 24.6374 30.9969 25.7008 30.3681C26.1383 30.1094 26.6953 30.1797 27.0547 30.5392L28.2191 31.7036C28.7211 32.2062 29.5273 32.1945 30.017 31.7041L31.7037 30.0174C32.1922 29.5295 32.2086 28.7232 31.7042 28.2195L30.5393 27.0546C30.1799 26.6952 30.1096 26.1381 30.3682 25.7007C30.9971 24.6374 31.4721 23.493 31.7802 22.2992C31.9071 21.8075 32.3505 21.4641 32.8581 21.4641H34.5018C35.203 21.4641 35.7735 20.8937 35.7735 20.1925V17.8076C35.7735 17.1065 35.203 16.536 34.5018 16.536H32.8581C32.3504 16.536 31.9071 16.1925 31.7802 15.701C31.4721 14.5072 30.997 13.3627 30.3682 12.2995C30.1096 11.862 30.1799 11.3049 30.5393 10.9456L31.7037 9.78114C32.2071 9.27838 32.1939 8.47237 31.7042 7.98319L30.0175 6.29657C29.5287 5.80702 28.7224 5.7927 28.2196 6.29612L27.0548 7.46099C26.6954 7.82043 26.1382 7.89079 25.7008 7.63206C24.6375 7.00321 23.4931 6.52813 22.2993 6.22005C21.8077 6.09321 21.4642 5.64983 21.4642 5.1421V3.49815C21.4642 2.79701 20.8937 2.22656 20.1925 2.22656H17.8077C17.1065 2.22656 16.536 2.79701 16.536 3.49815V5.14195C16.536 5.64968 16.1925 6.09306 15.7009 6.2199C14.5072 6.52798 13.3627 7.00306 12.2994 7.63191C11.8618 7.89057 11.3048 7.82021 10.9454 7.46084L9.78107 6.29642C9.27905 5.79381 8.47281 5.80547 7.98319 6.2959L6.29642 7.9826C5.80791 8.47051 5.79159 9.27675 6.29598 9.78055L7.46084 10.9454C7.82021 11.3048 7.89057 11.8619 7.63191 12.2993C7.00306 13.3626 6.52806 14.507 6.21998 15.7008C6.09306 16.1925 5.64968 16.5359 5.14202 16.5359H3.49823C2.79708 16.5359 2.22656 17.1064 2.22656 17.8075V20.1925C2.22656 20.8936 2.79708 21.4641 3.49823 21.4641H5.14195C5.64968 21.4641 6.09299 21.8075 6.2199 22.2991C6.52798 23.4929 7.00306 24.6374 7.63184 25.7006C7.89049 26.1381 7.82013 26.6951 7.46077 27.0545L6.29635 28.2189C5.793 28.7217 5.80613 29.5277 6.2959 30.0169L7.98252 31.7035C8.4714 32.1931 9.27772 32.2074 9.78047 31.7039L10.9453 30.5391C11.2101 30.2743 11.761 30.0497 12.2993 30.3681Z" fill="#718EBF" />
                                <path d="M18.9999 27.2684C14.4409 27.2684 10.7319 23.5594 10.7319 19.0004C10.7319 14.4414 14.4409 10.7324 18.9999 10.7324C23.5589 10.7324 27.2679 14.4414 27.2679 19.0004C27.2679 23.5594 23.5589 27.2684 18.9999 27.2684ZM18.9999 12.959C15.6686 12.959 12.9585 15.6692 12.9585 19.0004C12.9585 22.3316 15.6687 25.0418 18.9999 25.0418C22.3311 25.0418 25.0413 22.3316 25.0413 19.0004C25.0413 15.6692 22.3312 12.959 18.9999 12.959Z" fill="#718EBF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_705_419">
                                    <rect width="38" height="38" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </button>
                    <button className='btn_hover w-[20px] rounded-[50%] h-[20px] flex justify-center items-center bg-[#F5F7FA]'>
                        <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_130_1835)">
                                <path d="M17.3918 38C14.1193 38 11.4543 35.3368 11.4543 32.0625C11.4543 31.407 11.9863 30.875 12.6418 30.875C13.2973 30.875 13.8293 31.407 13.8293 32.0625C13.8293 34.0276 15.4285 35.625 17.3918 35.625C19.3552 35.625 20.9543 34.0276 20.9543 32.0625C20.9543 31.407 21.4863 30.875 22.1418 30.875C22.7973 30.875 23.3293 31.407 23.3293 32.0625C23.3293 35.3368 20.6647 38 17.3918 38Z" fill="#718EBF" />
                                <path d="M30.4543 33.25H4.32933C2.80147 33.25 1.55859 32.0071 1.55859 30.4793C1.55859 29.6684 1.91171 28.9007 2.5275 28.3733C2.56721 28.3385 2.60983 28.3069 2.65419 28.2782C4.97845 26.25 6.30859 23.3319 6.30859 20.2507V15.8332C6.30859 9.72179 11.2818 4.75 17.3918 4.75C17.6452 4.75 17.9192 4.75464 18.1726 4.79755C18.82 4.90511 19.2572 5.51799 19.1493 6.16393C19.0417 6.80986 18.4178 7.24706 17.7829 7.13921C17.6562 7.11862 17.5171 7.125 17.3918 7.125C12.5914 7.125 8.68359 11.0311 8.68359 15.8332V20.2507C8.68359 24.0762 7.00671 27.6958 4.08725 30.1798C4.06348 30.1989 4.04289 30.2163 4.01738 30.2337C3.97476 30.2876 3.93359 30.37 3.93359 30.4793C3.93359 30.6944 4.11421 30.875 4.32933 30.875H30.4543C30.6697 30.875 30.8504 30.6944 30.8504 30.4793C30.8504 30.3682 30.8092 30.2876 30.7648 30.2337C30.7411 30.2163 30.7205 30.1989 30.6967 30.1798C27.7755 27.694 26.1004 24.0762 26.1004 20.2507V18.5251C26.1004 17.8696 26.6324 17.3376 27.2879 17.3376C27.9434 17.3376 28.4754 17.8696 28.4754 18.5251V20.2507C28.4754 23.3337 29.8069 26.2531 32.1344 28.2831C32.177 28.3116 32.2182 28.3417 32.2562 28.375C32.8722 28.9007 33.2254 29.6684 33.2254 30.4793C33.2254 32.0071 31.9825 33.25 30.4543 33.25Z" fill="#718EBF" />
                                <path d="M28.4754 15.8332C24.1101 15.8332 20.5586 12.282 20.5586 7.91676C20.5586 3.55148 24.1101 0 28.4754 0C32.8406 0 36.3918 3.55148 36.3918 7.91676C36.3918 12.282 32.8406 15.8332 28.4754 15.8332ZM28.4754 2.375C25.4193 2.375 22.9336 4.86075 22.9336 7.91676C22.9336 10.9725 25.4193 13.4582 28.4754 13.4582C31.5311 13.4582 34.0168 10.9725 34.0168 7.91676C34.0168 4.86075 31.5311 2.375 28.4754 2.375Z" fill="#718EBF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_130_1835">
                                    <rect width="38" height="38" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </button>
                    <button className='btn_hover w-[20px] rounded-[50%] h-[20px] flex justify-center items-center bg-[#F5F7FA]'>
                        <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0029 18.3247C13.4768 18.3247 14.6716 17.1085 14.6716 15.6083C14.6716 14.1081 13.4768 12.8919 12.0029 12.8919C10.529 12.8919 9.33418 14.1081 9.33418 15.6083C9.33418 17.1085 10.529 18.3247 12.0029 18.3247Z" fill="#718EBF" />
                            <path d="M20.0014 18.3247C21.4753 18.3247 22.6701 17.1085 22.6701 15.6083C22.6701 14.1081 21.4753 12.8919 20.0014 12.8919C18.5275 12.8919 17.3327 14.1081 17.3327 15.6083C17.3327 17.1085 18.5275 18.3247 20.0014 18.3247Z" fill="#718EBF" />
                            <path d="M28.0025 18.3247C29.4763 18.3247 30.6712 17.1085 30.6712 15.6083C30.6712 14.1081 29.4763 12.8919 28.0025 12.8919C26.5286 12.8919 25.3338 14.1081 25.3338 15.6083C25.3338 17.1085 26.5286 18.3247 28.0025 18.3247Z" fill="#718EBF" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.6746 1.09992e-05C34.6157 0.00564294 36.4757 0.793009 37.8483 2.1901C39.2209 3.58719 39.9945 5.48043 40 7.45621L40 7.46393L40 23.7579C39.9945 25.7336 39.2209 27.6269 37.8483 29.024C36.4758 30.421 34.6157 31.2084 32.6746 31.214L32.667 31.2141L19.6282 31.2141L12.3738 37.3705C11.5791 38.0449 10.4729 38.1905 9.53584 37.7439C8.59882 37.2973 8.00024 36.3393 8.00024 35.2862V31.2141H7.32539C5.38427 31.2084 3.52425 30.421 2.15167 29.024C0.779095 27.6269 0.00554393 25.7336 2.16125e-05 23.7579L0 23.7501L1.08063e-05 7.45621C0.00553312 5.48043 0.779094 3.58719 2.15167 2.1901C3.52425 0.793008 5.38428 0.00564294 7.32539 2.19985e-05L7.33297 0L32.6746 1.09992e-05ZM10.6664 28.5003H7.33297C6.09634 28.4967 4.91137 27.9951 4.03693 27.105C3.1625 26.215 2.66969 25.0088 2.66617 23.7501V7.46393C2.66969 6.20521 3.1625 4.99908 4.03693 4.10903C4.91137 3.21898 6.09634 2.71737 7.33297 2.71379H32.667C33.9037 2.71737 35.0886 3.21898 35.9631 4.10903C36.8375 4.99908 37.3303 6.20521 37.3338 7.46393V23.7501C37.3303 25.0088 36.8375 26.215 35.9631 27.105C35.0886 27.9951 33.9037 28.4967 32.667 28.5003H18.9041C18.7479 28.5002 18.5966 28.5561 18.4766 28.658L10.6664 35.2862V28.5003Z" fill="#718EBF" />
                            <ellipse cx="32.4464" cy="30.2174" rx="7.46688" ry="7.60023" fill="#FF4F00" />
                        </svg>

                    </button>
                    <button className='w-[20px]  bg-[#F5F7FA] overflow-hidden rounded-[50%]  h-[20px]'>
                        <img src="/img.png" onClick={() => setCount(!count)} className='w-full' alt="" />
                        <div className={`absolute bottom-0 ${!count ? 'translate-x-full' : 'translate-x-0'} w-16 bg-[#ECF3FF] overflow-hidden right-0 translate-y-full p-2 px-3 rounded-[0px_0px_0px_10px]`}>
                            <p className='text-[8px] text-start mb-1'><Link to={'profile'}>Profile</Link></p>
                            <p className='text-[8px] text-start mb-1'><Link to={'admin'}>Admin</Link></p>
                            <p className='text-[8px] text-start mb-1'>Help</p>
                            <p className='text-[8px] text-start mb-1'>Calls</p>
                            <div
                                onClick={() => setTopic(!topic)}
                                className={`w-full ${topic ? 'bg-[#FF4F00]' : 'bg-[#102759]'} flex items-center relative h-4 rounded-lg `}>
                                <p className={`text-[7px] ${!topic ? 'hidden' : 'flex'}  justify-end w-full pr-2 text-white`}>Light</p>
                                <p className={`text-[7px] ${!topic ? 'flex' : 'hidden'}  justify-start w-full pl-2 text-white`}>Light</p>
                                <div className={`w-3 ${!topic ? 'right-[2px]' : 'left-[2px]'} h-3 flex items-center justify-center  absolute top-1/2 -translate-y-1/2  rounded-full bg-white`}>
                                    <MdOutlineLightMode className={`text-[8px] ${!topic ? 'hidden ' : 'text-[#FF4F00]'} `} />
                                    <CiDark className={`text-[8px] ${!topic ? 'text-[#102759]' : 'hidden '} `} />
                                </div>
                            </div>
                            <p className='text-[8px] text-start mb-1'><Link to={'register'}>Logout</Link></p>
                        </div>
                    </button>
                </div>
            </nav>
        </header>
    );
};



export default Header;