'use client';
import Link from 'next/link';
import styled,{ css } from 'styled-components';
import { Col } from 'antd';

export const Layout = styled.div`
  background-color: burlywood;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 50px;
  width: 100%;
  background-color: burlywood;
  order: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubHeader = styled.div`
  height: 50px;
  width: 100%;
  background-color: burlywood;
  order: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.main`
  display: flex;
  /* background-color: lightblue; */
  order: 3;
  min-height: calc(100vh - 100px);
  min-width: 100vw;
`;
export const Footer = styled.div`
  height: 50px;
  width: 100%;
  background-color: burlywood;
  order: 4;
  text-align: center;
  padding: 30px 0 0;
`;

export const MenuWrapper = styled.div`
  height: 50px;
  width: 100vw;
  background-color: aliceblue;
`;

export const SubHeaderWrapper = styled.div`
  transition: top 0.3s ease;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index:9999;
  }
  .imgLogo:hover {
    border:1px solid #4096ff;
    height:38px;
    width: 38px;
  }
`;

export const Wrapper = styled.main`
  padding: 16px 32px;
  .ant-breadcrumb {
    padding: 0 0 20px 0;
  }
  p{
    margin: 0 !important
  }
  @media only screen and (max-width: 768px) {
    padding: 16px;
  }
`;

//Menu
export const Menu = styled.div`
  display: flex;
`;

export const MenuItem = styled.main`
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  display: flex;
  align-items: end;
  &:hover {
    color: #4096ff;
    animation-timing-function: ease;
  }
  &.menu-item.active {
    color: #4096ff;
    animation-timing-function: ease;
  }
  &:hover .submenu {
    display: block;
  }
`;
export const SubMenu = styled.div`
  margin-left: 20px;
  position: absolute;
  animation-timing-function: ease;
  z-index: 100;
  background-color: aliceblue;
  opacity: 0.8;
`;

export const LinkCus = styled(Link)`
 color: #000;
 &:hover {
    color: #4096ff;
    animation-timing-function: ease;
  }
  &.menu-item.active {
    color: #4096ff;
    animation-timing-function: ease;
  }
  &:hover .submenu {
    display: block;
  }

`;

//Home page ------ style

export const TitleSession = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 20px;
  margin: 24px 0 8px;
  border-radius: 8px;
  box-shadow: inset 8px 0px 1px #dc362e;
  h2{
    &:hover{
      text-decoration: underline;
      opacity: 0.7;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column
  }

`;

export const ItemWrapper = styled.div`
    gap: 10px;
    padding: 5px 10px;
    display: flex;
    align-items: flex-end;
    border: 0.5px solid #c2c2c2;
    border-radius: 8px;
  &:hover {
    box-shadow: 2px 2px 10px #0d8cae;
    border-radius: 8px;

  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  
`;

export const ItemTitleWtImage = styled.h3`
  margin: 0;
 
`;
export const ItemTitle = styled.h3`
  margin: 0;
  white-space: wrap;  
`;

export const Salary = styled.span`
  margin: 0;
  color: #dc362e;
`;

export const Infor = styled.div`
  display: flex;
  gap: 15px;
`;

export const Address = styled.span`
  margin: 0;
`;
export const Expired = styled.span`
  margin: 0;
  color: #dc362e;

`;
export const Hot = styled.span`
  position: absolute;
  top: -20px;
  right: 0px;
`;

//all jobs

export const TitlePosition = styled.span`
  display: flex;
  flex-direction: column;
  .position{
    font-weight: 700;
  }
  .company{
    text-transform: uppercase;
  }
`;

//blog
export const BlogWrapper = styled.span`
  display: flex;
  gap: 15px;
  align-items: flex-end;
`;

export const BlogInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionBlog = styled.p`
  word-break: break-word;
  opacity: 0.5;
`;

export const BlogInfoWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const Author = styled.p`
  font-size: 0.7em;
`;

export const Date = styled.p`
  font-size: 0.7em;
`;


