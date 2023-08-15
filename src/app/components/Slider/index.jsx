import Image from 'next/image';

import * as S from './styled'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

  const SliderCarousel = ({slide, title, banner, logo}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive:[
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2,
            arrows:false
          }
        },
      ]
    };
    const settingsLogo = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay:true,
      responsive:[
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            arrows:false
          }
        },
      ]
    };


    return (
      <>
      {banner &&  <div>
        <S.TitleSession>
            <h2>{title}</h2>
            <a href='/user/tuyen-dung-gap'>Xem tất cả</a>
          </S.TitleSession>
        <S.SliderCus {...settings}>
          {slide?.map((item, index) => (
            <div key={index} style={{width:'100vw'}} >
              <S.ImageWrapper style={{ backgroundImage:`url(${item?.image || '/images/logo.png'})`}} >
              <S.SlideTitle className='slide-title' >
                <Link href={`/user/tuyen-dung-gap/${item?.id}`}>{item?.title}</Link>
                <span>{item?.salary}</span>
              </S.SlideTitle>
            </S.ImageWrapper>
            </div>
          ))}
        </S.SliderCus>
      </div>}
      {
        logo && <>
        <S.TitleSession>
            <h2>{title}</h2>
            <a>Xem tất cả</a>
          </S.TitleSession>
          <S.SliderCus className='logo' {...settingsLogo}>
          {slide?.map((item, index) => (
            <div key={index}>
              <S.ImageWrapper className='imageLogo'>
              <Image src={item?.logo || '/images/logo.png'} alt={`Image ${index + 1}`} height={100} width={100} style={{objectFit: "contain"}} />
            </S.ImageWrapper>
            </div>
          ))}
        </S.SliderCus>
        </>
      }
      </>
    );
  };
  
  export default SliderCarousel;
  