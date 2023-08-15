'use client';
import { Breadcrumb, Col, Row } from 'antd';
import Image from 'next/image';
import moment from 'moment';
import { useParams } from 'next/navigation';

import {
  CalendarOutlined,
  DollarCircleOutlined,
  FireFilled,
  HomeOutlined
} from '@ant-design/icons';

import { NewJobs } from '@/constants';

import * as S from './styled';

export default function DetailLimitTimeJob() {
  const params = useParams();
  const detail = NewJobs?.find(
    item => parseInt(item?.id) === parseInt(params?.id)
  );
  const breadcrumb = [
    {
      title: <HomeOutlined />,
      href: '/'
    },
    {
      title: 'Tuyển dụng gấp',
      href: '/user/tuyen-dung-gap'
    },
    {
      title: params?.id
    }
  ];

  return (
    <S.Wrapper>
      <Breadcrumb items={breadcrumb} />
      <Row gutter={[8, 8]} align="top">
        <Col md={6}>
          <Image
            src={detail?.image || '/images/logo.png'}
            height={100}
            width={100}
            alt="logo"
          />
        </Col>
        <Col md={18}>
          <Row>
            <Col md={24}> 
              <h2>{detail?.title}</h2>
            </Col>
            <Col md={12}>
              <S.TitleWrapper>
                <a>{detail?.company}</a>
                <span>{detail?.address}</span>
                <span>{detail?.salary}</span>
              </S.TitleWrapper>
            </Col>
            <Col md={12}>
              <span>Lượt xem: {detail?.view||'Đang cập nhật'}</span>
            </Col>
            {/* <Col md={12}></Col> */}
            <Col md={24}>
            <h3>Chi tiết tuyển dụng:</h3>
            </Col>
            <Col md={24}>
            <h4>Mô tả:</h4>
            </Col>
            <Col md={24}>{detail?.description||'Đang cập nhật ...'}</Col>
            <Col md={24}>
            <h4>Yêu cầu:</h4>
            </Col>
            <Col md={24}>{detail?.requirement||'Đang cập nhật ...'}</Col>
            <Col md={24}>
            <h4>Quyền lợi:</h4>
            </Col>
            <Col md={24}>{detail?.description||'Đang cập nhật ...'}</Col>
            <Col md={24}>
            <h4>Thông tin liên hệ:</h4>
            </Col>
            <Col md={24}>{detail?.description||'Đang cập nhật ...'}</Col>
            <Col md={24}><h3>Tin liên quan:</h3></Col>
            {NewJobs?.slice(0,6)?.map(item=>(
            <Col md={12} key={item?.id}>
              <S.RelatedTitle>{item?.title}</S.RelatedTitle>
              <S.RelatedSalary>{item?.salary}</S.RelatedSalary>
            </Col>))}
          </Row>
        </Col>
      </Row>
    </S.Wrapper>
  );
}
