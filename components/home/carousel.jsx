
import { Carousel } from 'react-responsive-3d-carousel';


const CarouselMain = () => {


  return (
    <Carousel autoPlay={false} width='510px' height='530px' depth={4} arrowsWidth={50} arrowsHeight={50} arrowsHoveredColor="#C1FF72">
      <div className='carouselItem'>
        <img src='/src/assets/imgs/index/01.png' alt='icon' />
        <p>Increased Income For DePIN Asset Owners</p>
        <span>DePIN asset owners can now choose between selling RWA NFT fractions for immediate capital or maintaining them for long-term rental income, allowing flexibility to meet diverse financial goals and adapt to changing needs.</span>
      </div>
      <div className='carouselItem'>
        <img src='/src/assets/imgs/index/02.png' alt='icon' />
        <p>Attracting More Capital</p>
        <span>PinLink allows non DePIN owners to buy fractional shares of DePIN assets, earning rental income and diversifying investment strategies with RWAs, thus enhancing the ecosystem's decentralization and capital flow.</span>
      </div>
      <div className='carouselItem'>
        <img src='/src/assets/imgs/index/03.png' alt='icon' />
        <p>Lower Costs For DePIN End Users</p>
        <span>PinLink collects commissions on NFT sales to support the Service User Rebate Fund, which invests in low-risk yields to reduce costs for developers. Additionally, PinLink's rigorous asset vetting ensures enterprise-grade scalability for developers.</span>
      </div>
      <div className='carouselItem'>
        <img src='/src/assets/imgs/index/04.png' alt='icon' />
        <p>Decentralization & Deeper AI Learning</p>
        <span>PinLink earns from rentals and NFT sales, reinvesting in expanding its DePIN assets focused initially on AI and blockchain sectors. It uses AI analytics to target high-demand areas, advancing the RWA-tokenized DePIN ecosystem.</span>
      </div>
    </Carousel>
  );
};

export default CarouselMain;
