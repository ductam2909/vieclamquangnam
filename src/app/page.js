"use client"

import { useEffect,useState } from 'react';
import { Breadcrumb,Col,Row } from 'antd'
import Image from 'next/image';
import moment from 'moment';

import { CalendarOutlined,DollarCircleOutlined,FireFilled,HomeOutlined } from '@ant-design/icons'
import SimpleSlider from '../app/components/Slider/index';
import Table from './components/Table/index'
import { NewJobs,Blogs,Partners,jobLists } from '../constants/index'

import * as S from '../app/styles/styled'
import Link from 'next/link';
import DetailBlock from './components/DetailBlock';



export default function Home() {
  const [screenWidth,setScreenWidth] = useState(false);

  useEffect(() => {
    setScreenWidth(window.screen.width > 768);
  },[]);

  const breadcrumb = [
    {
      title: <><HomeOutlined /> Home</>
    }
  ];

  const columns = [
    {
      key: 'position',
      title: 'Vị trí tuyển dụng',
      render: (record) => (<S.TitlePosition>
        <a className='position' href={ `/user/tat-ca-viec-lam/${record?.id}` }>{ record?.position }</a>
        <span className='company'>{ record?.company }</span>
      </S.TitlePosition>)
    },
    {
      key: 'salary',
      title: 'Mức lương',
      dataIndex: 'salary',
    },
    {
      key: 'expired',
      title: 'Hạn Hồ sơ',
      dataIndex: 'expired'
    }
  ]
  return (
    <S.Wrapper >
      <Breadcrumb items={ breadcrumb } />
      <Row gutter={ [16,16] }>
        {/* việc làm gấp */ }
        <Col span={ 24 }>
          <SimpleSlider banner slide={ NewJobs?.filter((item) => item?.limitTime) } title='Tuyển dụng gấp' />
        </Col>
        {/* Việc làm hấp dẫn */ }
        <Col span={ 24 }>
          <S.TitleSession>
            <h2>Việc làm hấp dẫn</h2>
            <Link href='/user/viec-lam-hap-dan'>Xem tất cả</Link>
          </S.TitleSession>
        </Col>
        { NewJobs?.filter(item => item?.hot)?.sort((a,b) => a?.updatedAt - b?.updatedAt)?.slice(0,6)?.map((item,index) => (
          <Col xs={ 24 } md={ 12 } key={ index }>
            <S.ItemWrapper >
              <Image src={ item?.image || '/images/logo.png' } alt='logo' width={ 70 } height={ 70 } />
              <S.Right >
                <S.ItemTitleWtImage >{ item?.title }</S.ItemTitleWtImage>
                <S.Salary><DollarCircleOutlined />: { item?.salary }</S.Salary>
                <S.Infor>
                  <S.Address><HomeOutlined />: { item?.address }</S.Address>
                  <S.Expired style={ { color: `${item?.expired - moment().valueOf() <= 10 * 24 * 60 * 60 * 1000 ? '#dc362e' : '#000'}` } }><CalendarOutlined />: { moment(item?.expired)?.format('DD/MM/YYYY') }</S.Expired>
                </S.Infor>

              </S.Right>
              { item?.hot && (
                <S.Hot className='test'>
                  <FireFilled style={ { color: '#dc362e',fontSize: '2em' } } />
                </S.Hot>
              ) }
            </S.ItemWrapper>
          </Col>
        )) }
        {/* Tất cả công việc */ }
        <Col span={ 24 }>
          <S.TitleSession>
            <h2>Tất cả việc làm</h2>
            <a>Xem tất cả</a>
          </S.TitleSession>
        </Col>
        <>
          { screenWidth && (
            <Col span={ 24 }>
              <Table columns={ columns } dataSource={ NewJobs?.map((item,index) => ({ ...item,key: index,expired: moment(item?.expired)?.format('DD/MM/YYYY') }))?.slice(0,10) } pagination={ false } />
            </Col>
          ) }
        </>
        <>
          { !screenWidth && NewJobs?.sort((a,b) => a?.updatedAt - b?.updatedAt)?.slice(0,6)?.map((item,index) => (
            <Col xs={ 24 } md={ 8 } key={ index } >
              <DetailBlock item={ item } />
            </Col>
          )) }
        </>
        <Col span={ 24 }>
          <SimpleSlider logo slide={ Partners } title='Nhà tuyển dụng nổi bật' />
        </Col>
        <Col xs={ 24 } md={ 24 }>
          <S.TitleSession>
            <h2>Tất cả ngành nghề</h2>
            <a>Xem tất cả</a>
          </S.TitleSession>
        </Col>
        <>
          {
            jobLists?.map((item,index) => (<Col xs={ 12 } md={ 8 } key={ index }>
              <span href=''>{ item?.name }</span>
            </Col>))
          }
        </>
        <Col xs={ 24 } md={ 24 }>
          <S.TitleSession>
            <h2>Blog vieclamquangnam.com.vn</h2>
            <a>Xem tất cả</a>
          </S.TitleSession>
        </Col>
        { Blogs?.map((item,index) => (
          <Col xs={ 24 } md={ 12 } key={ index }>
            <S.BlogWrapper >
              <Image width={ 100 } height={ 100 } alt='image' src={ item?.image || '/images/logo.png' } />
              <S.BlogInfo>
                <h3>{ item?.title }</h3>
                <S.DescriptionBlog >{ item?.description }</S.DescriptionBlog>
                <S.BlogInfoWrap>
                  <S.Author>{ item?.author }</S.Author>
                  <S.Date>{ moment(item?.createAt)?.format('DD/MM/YYYY') }</S.Date>
                </S.BlogInfoWrap>
              </S.BlogInfo>
            </S.BlogWrapper>
          </Col>
        )) }
      </Row>
    </S.Wrapper >
  )
}
