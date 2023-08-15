'use client'
import { useState,useEffect } from 'react';
import StyledComponentsRegistry from './lib/registry';
import Image from 'next/image';
import { Button,Col,Input,Row,Select,Space } from 'antd';
import Link from 'next/link';

import { Menus } from '../constants/index';
import { BellOutlined,CaretDownOutlined,GlobalOutlined,UserOutlined } from '@ant-design/icons';

import * as S from './styles/styled';

export default function RootLayout({ children }) {

  const [current,setCurrent] = useState('mail');
  const [isSubHeaderFixed,setSubHeaderFixed] = useState(false);
  const [activeItem,setActiveItem] = useState(null);
  const [hover,setHover] = useState(false);
  const [key,setKey] = useState(null);

  //menu
  const handleItemClick = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  const handleItemHover = () => {
    setHover(!hover);
  }

  const renderMenuItem = (item) => {
    return (
      <div key={ item.key }>
        <S.MenuItem
          onClick={ () => { handleItemClick(item); setKey(item?.key) } }
          onMouseOver={ () => { handleItemHover(); setKey(item?.key) } }
          onMouseLeave={ () => { handleItemHover(); setKey(item?.key) } }
        >
          <S.LinkCus className={ `menu-item ${activeItem === item ? 'active' : ''}` }
            href={ item?.path ? item?.path : '' }>
            { item.label }{ item?.children && <CaretDownOutlined style={ { paddingLeft: '10px' } } /> }
          </S.LinkCus>
        </S.MenuItem>
        { activeItem === item && item?.children && item?.children?.length > 0 && (
          <S.SubMenu className='submenu'>
            { item?.children?.map((childItem) => renderMenuItem(childItem)) }
          </S.SubMenu>
        ) }
      </div>
    );
  };

  //stick menu on top when scroll
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const subHeaderWrapper = document.querySelector('.subHeaderWrapper');
      const subHeaderHeight = subHeaderWrapper ? subHeaderWrapper.offsetHeight : 0;
      if (window.scrollY > headerHeight) {
        setSubHeaderFixed(true);
      } else {
        setSubHeaderFixed(false);
      }
    };

    // Attach the scroll event listener on the client-side
    window.addEventListener('scroll',handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll',handleScroll);
    };
  },[]);

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body >
        <StyledComponentsRegistry>
          <Row align='middle' gutter={ [8,8] }>
            <Col md={ 22 } className='header'>
              <S.Menu >
                { Menus.map((item) => renderMenuItem(item)) }
              </S.Menu>
            </Col>
            <Col md={ 2 }>
              <Space size='middle'>
                <BellOutlined style={ { fontSize: '2em',color: 'blue' } } />
                <GlobalOutlined style={ { fontSize: '2em',color: 'blue' } } />
              </Space>
            </Col>
            <Col md={ 1 }>
            </Col>
            <Col span={ 24 }>
              {/* Use a wrapper div for SubHeader */ }
              <S.SubHeaderWrapper className={ `subHeaderWrapper ${isSubHeaderFixed ? 'fixed' : ''}` }>
                <Row align='middle'>
                  <Col md={ 2 }>
                    <Link href='/' className='logo'>
                      <Image className='imgLogo' width={ 40 } height={ 40 } src="/images/logo.png" alt="logo" />
                    </Link>
                  </Col>
                  <Col md={ 10 }>
                    <Input placeholder="Tìm theo công ty, vị trí, mức lương" style={ { minWidth: '300px' } } />
                  </Col>
                  <Col md={ 6 }>
                    <Select placeholder="Tìm theo nơi làm việc" />
                  </Col>
                  <Col md={ 3 }>
                  </Col>
                  <Col md={ 3 }>
                    <Button><UserOutlined /> Đăng nhập</Button>
                  </Col>
                </Row>
              </S.SubHeaderWrapper>
            </Col>
            {/* End of the wrapper div */ }
            <S.Content>{ children }</S.Content>
            <S.Footer>
              <span>Copyright © Trang tin vieclamquangnam.com.vn</span>
            </S.Footer>
          </Row>
        </StyledComponentsRegistry>
      </body >
    </html >
  );
}