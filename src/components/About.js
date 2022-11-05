import React, { useState } from 'react';
import '../App.css';

export default function About({ showAbout }) {
  const [showEffe, setShowEffe] = useState(false);
  const [showSeconde, setShowSeconde] = useState(false);
  const [showSimons, setShowSimons] = useState(false);
  const [showRaddLounge, setShowRaddLounge] = useState(false);

  const handleEffe = () => {
    setShowEffe(!showEffe);
  }

  const handleSeconde = () => {
    setShowSeconde(!showSeconde);
  }

  const handleSimons = () => {
    setShowSimons(!showSimons);
  }

  const handleRaddLounge = () => {
    setShowRaddLounge(!showRaddLounge);
  }
  
  return (
    <React.Fragment>
      {showAbout && 
      <div className='about'>
        <h4>ABOUT</h4>
        <p>
        All products are hand-knitted and carefully crafted. Çanta began as a project that was primarily dedicated to creating hand-knitted bags. 
        Within 6 months, it expanded to include other hand-knitted garments such as dresses, turtlenecks, hats, shawls and pillows.<br/><br/>

        Çanta directly draws inspiration from the streets, lifestyle, people and products from Shkodër, Albania where the creator of Çanta originates from. 
        Future products will be created through the use of traditional knitting techniques. 
        These future products will represent the customs and traditions of the different communities in the surrounding areas of Shkodër.<br/><br/>

        Currently, products are created in the city of Montreal, known as Tiohtiá:ke. 
        Çanta acknowledges that this unceded land has long been a site of meeting and exchange amongst diverse Indigenous peoples.
        </p>
        <h4>MATERIALS</h4>
        <p>
          Every bag is different and will include a blend of acrylic, wool, nylon, and polyester yarn.<br/>
        </p>
        <h4>CARE</h4>
        <p>
          Do Not Bleach<br/>
          Do Not Dry Clean<br/>
          Do Not Iron<br/>
          Gently Wash by hand using detergent in cold water<br/>
          Let Air dry<br/>
        </p>
        <h4>MADE TO ORDER</h4>
        <p>
          To place an order for a product from the catalogue or to request an order for a commission,
          email or DM on Instagram. Allow between 2-3 weeks for
          production time. Once the product has been completed, you will be notified via email or DM.<br/>
        </p>
        <h4>SHIPPING</h4>
        <p>
          Orders ship from Monday to Friday. Orders that are placed on holidays or weekends will be
          processed the following business day.<br/>
        </p>
        <h4>SHIPPING OPTIONS</h4>
        <p>
          Shipping price is not included. All products will be shipped via Canada Post as standard shipping
          unless requested otherwise. If you prefer another means of shipping, do not hesitate to place a request
          for an alternative shipping method.
          If you live in Montreal, you have the option to pick up products in person. Send an email to have this arranged.<br/>
        </p>
        <h4>RETURNS</h4>
        <p>
          If there are any flaws in your product due to poor workmanship, do not hesitate to send an email.
          The product can be returned within 45 days and you will receive your money back. 
          You have the option to select a different product for an exchange. 
          Or, if you would like your product returned back to you once the defect has been fixed, it can be shipped back to you. 
          Shipping fees are paid for by the consumer.<br/>
        </p>
        <h4>STOCKLIST</h4>
        <span onClick={handleEffe}>Effe
          {showEffe && <ul>
              <li>
                <a className='publications' href='https://effe-store.com/'>Website</a><br/>
              </li>
              <li>
                207 Laurier Ouest, Montreal, Quebec
              </li>
            </ul>}
        </span><br/>
        <span onClick={handleSeconde}>Seconde Vintage
          {showSeconde && <ul>
              <li>
                <a className='publications' href='https://www.instagram.com/seconde.vintage/?hl=en'>Instagram</a><br/>
              </li>
              <li>
                5274 Boul. St-Laurent, Montreal, Quebec
              </li>
            </ul>}
        </span><br/>
        <span onClick={handleSimons}>Simons
          {showSimons && <ul>
            <li>
              <a className='publications' href='https://www.simons.ca/en/canadian-artisans/makers-a-z/canta--9751'>Website</a><br/>
            </li>
            <li>
              Only available for purchase online
            </li>
          </ul>}
        </span><br/>
        <span onClick={handleRaddLounge}>RADD LOUNGE
          {showRaddLounge && <ul>
            <li>
              <a className='publications' href='http://www.raddlounge.com/?mode=cate&cbid=2058638&csid=125&sort=n'>Website</a><br/>
            </li>
            <li>
              Only available for purchase online
            </li>
          </ul>}
        </span>
        <h4>CONTACT</h4>
        <span>
          <a className='publications' href ="mailto:canta.nga.loris@gmail.com">Email</a><br/>
        </span>
        <span>
          <a className='publications' href ="https://www.instagram.com/c_a_n_t_a_/?hl=en">Instagram</a><br/>
        </span>
        <h4>SELECTED PUBLICATIONS</h4>
        <span>
          <a className='publications' href='https://www.harpersbazaar.com/it/moda/tendenze/a38358037/brand-emergenti-moda-novita-inverno-2021/'>Harper's Bazaar Italia</a>
        </span><br/>
        <span>
          <a className='publications' href='https://i-d.vice.com/en/article/pkbmd7/montreal-fashion-designers-to-know'>i-D</a>
        </span><br/>
        <span>
          <a className='publications' href='https://fashionmagazine.com/'>Fashion Magazine</a>
        </span><br/>
        <span>
          <a className='publications' href='https://www.theglobeandmail.com/life/style/article-gift-guide-for-style-lovers-from-handmade-ceramics-to-quirky-handbags/'>Globe and Mail Style Advisor</a>
        </span><br/>
        <span>
          <a className='publications' href='https://albanianpost.com/canta-per-canta/'>Albanian Post</a>
        </span><br/>
        <span>
          <a className='publications' href='https://diasporashqiptare.al/2021/07/15/kanada-loris-kecaj-dhe-suksesi-me-cante-lidhja-me-vendlindjen-time/'>Diaspora Shqiptare</a>
        </span>
      </div>
      }
    </React.Fragment>
  )
}
