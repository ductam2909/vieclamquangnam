"use client"
import { NewJobs } from '@/constants'
import { CalendarOutlined, DollarCircleOutlined, FireFilled, HomeOutlined } from '@ant-design/icons'
import { Breadcrumb, Col, Row } from 'antd'
import Image from 'next/image'
import moment from 'moment'

import * as S from './styled'
import DetailBlock from '@/app/components/DetailBlock'

export default function LimitTimeJobs() {
    const breadcrumb = [
        {
            title: <HomeOutlined />,
            href:'/'
        },
        {
            title: 'Tuyển dụng gấp',
        }
    ]
    return (
        <S.Wrapper >
            <Breadcrumb items={breadcrumb } />
            <Row gutter={[8,8]} align='bottom'>
              {NewJobs?.filter((item)=>item?.limitTime)?.map((item, index)=>(
              <Col xs={ 24 } md={ 8 } key={ index }>
                <DetailBlock item={item} $image/>
            </Col>
              ))}
            </Row>
        </S.Wrapper>
    )
}
