import {
  CalendarOutlined,
  DollarCircleOutlined,
  FireFilled,
  HomeOutlined
} from '@ant-design/icons';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';

import * as S from './styled';

const DetailBlock = ({item, $image}) => {
  return (
    <>
      {$image ? (
        <S.ItemWrapper>
          <Image
            src={item?.image || '/images/logo.png'}
            alt="logo"
            width={70}
            height={70}
          />
          <S.Right>
            <S.ItemTitleWtImage>{item?.title}</S.ItemTitleWtImage>
            <S.Salary>
              <DollarCircleOutlined />: {item?.salary}
            </S.Salary>
            <S.Infor>
              <S.Address>
                <HomeOutlined />: {item?.address}
              </S.Address>
              <S.Expired
                style={{
                  color: `${
                    item?.expired - moment().valueOf() <=
                    10 * 24 * 60 * 60 * 1000
                      ? '#dc362e'
                      : '#000'
                  }`
                }}
              >
                <CalendarOutlined />:{' '}
                {moment(item?.expired)?.format('DD/MM/YYYY')}
              </S.Expired>
            </S.Infor>
          </S.Right>
          {item?.hot && (
            <S.Hot className="test">
              <FireFilled style={{ color: '#dc362e', fontSize: '2em' }} />
            </S.Hot>
          )}
        </S.ItemWrapper>
      ):(
        <S.ItemWrapper>
          <S.Right>
            <S.ItemTitleWtImage>{item?.title}</S.ItemTitleWtImage>
            <S.Salary>
              <DollarCircleOutlined />: {item?.salary}
            </S.Salary>
            <S.Infor>
              <S.Address>
                <HomeOutlined />: {item?.address}
              </S.Address>
              <S.Expired
                style={{
                  color: `${
                    item?.expired - moment().valueOf() <=
                    10 * 24 * 60 * 60 * 1000
                      ? '#dc362e'
                      : '#000'
                  }`
                }}
              >
                <CalendarOutlined />:{' '}
                {moment(item?.expired)?.format('DD/MM/YYYY')}
              </S.Expired>
            </S.Infor>
          </S.Right>
          {item?.hot && (
            <S.Hot className="test">
              <FireFilled style={{ color: '#dc362e', fontSize: '2em' }} />
            </S.Hot>
          )}
        </S.ItemWrapper>
      )}
    </>
  );
};

export default DetailBlock;
