
import { Carousel } from 'react-responsive-3d-carousel';
import carouselImg1 from '@assets/imgs/index/01.png';
import carouselImg1Active from '@assets/imgs/index/01_active.png';
import carouselImg2 from '@assets/imgs/index/02.png';
import carouselImg3 from '@assets/imgs/index/03.png';
import { useEffect} from 'react';


const CarouselMain = () => {

  const imgs=[{
    src:carouselImg1,
    active:carouselImg1Active,
    title:'Increased Income For DePIN Asset Owners',
    desc:'DePIN asset owners can now choose between selling RWA NFT fractions for immediate capital or maintaining them for long-term rental income, allowing flexibility to meet diverse financial goals and adapt to changing needs.'
  },
  {
    src:carouselImg2,
    active:carouselImg1Active,
    title:'Attracting More Capital',
    desc:'PinLink allows non DePIN owners to buy fractional shares of DePIN assets, earning rental income and diversifying investment strategies with RWAs, thus enhancing the ecosystem\'s decentralization and capital flow.'
  },
  {
    src:carouselImg3,
    active:carouselImg1Active,
    title:'Lower Costs For DePIN End Users',
    desc:'PinLink collects commissions on NFT sales to support the Service User Rebate Fund, which invests in low-risk yields to reduce costs for developers. Additionally, PinLink\'s rigorous asset vetting ensures enterprise-grade scalability for developers.'
  },
]

const transitionTime = 500;
const handleCarouselItemClick = (i) => {
  // const carouselItems = document.querySelectorAll('.carouselItem img');
  // carouselItems.forEach((item,index)=>item.src=imgs[index].src)

  // setTimeout(()=>{
  //   carouselItems[i].src=imgs[i].active
  //   },transitionTime)
}

useEffect (()=>{


  const lefttbtn = document.querySelector('.react-responsive-3d-carousel__arrows.left');
  const rightbtn = document.querySelector('.react-responsive-3d-carousel__arrows.right');
  const carouselItems = document.querySelectorAll('.carouselItem');
  let i=0;

  const handleClick=(direction)=>{

    const carouselItems = document.querySelectorAll('.carouselItem img');
    carouselItems[i].src=imgs[i].src
    setTimeout(()=>{
    i=(i + direction)%imgs.length
    carouselItems[i].src=imgs[i].active
    },transitionTime)
  }

  const handleLeftClick = () => {
    handleClick(-1)
  };

  const handleRightClick = () => {
    handleClick(1)
  };


  if(lefttbtn && rightbtn)
    {
      lefttbtn.addEventListener('click', handleLeftClick);
      rightbtn.addEventListener('click', handleRightClick);     

    }

  return () => {
    if(lefttbtn && rightbtn)
      {
    lefttbtn.removeEventListener('click', handleLeftClick);
    rightbtn.removeEventListener('click', handleRightClick);   
      }
  };
},[])


  return (
    <>
     <Carousel autoPlay={false} transitionTime={transitionTime} width='35rem' height='33.25rem' depth={4} selectable={false} arrowsWidth={"3.5rem"} arrowsHeight={"3.5rem"} arrowsHoveredColor="#C1FF72" >
     {
        imgs.map((item,index)=>(
          <div className='carouselItem' key={`carousel-${index}`}>
          <img src={index==0?item.active:item.src} alt={`carousel-image-${index+1}`} />
          <p>{item.title}</p>
          <span>{item.desc}</span>
        </div>
        ))
     }
    </Carousel>
    <div className='mobileCarousel'>
    {
        imgs.map((item,index)=>(
          <div className='carouselItem' key={`carousel-${index}`}>
          <img src={item.active} alt={`carousel-image-${index+1}`} />
          <p className='carousel-title'>{item.title}</p>
          <span className='carousel-desc'>{item.desc}</span>
        </div>
        ))
     }
</div>
    </>
   
   
  );
};

export default CarouselMain;
