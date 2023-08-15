"use client"
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'

import * as S from './styled'

export default function About() {
    const breadcrumb = [

        {
            title: <HomeOutlined />,
            href:'/'
        },
        {
            title: 'About',
        }

    ]
    return (
        <S.Wrapper >
            <Breadcrumb items={breadcrumb } />
            About
        </S.Wrapper>
    )
}
