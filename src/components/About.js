import React from 'react';
import useData from '../hooks/useData';
import '../App.css';

export default function About({ showAbout }) {
  //const data = "about";
  //const [ newData ] = useData(data);
  
  return (
    <React.Fragment>
      {showAbout && 
      <div className='about'>
        <h3>ABOUT</h3>
        <p>
        All products are hand-knitted and carefully crafted. Çanta began as a project that was primarily dedicated to creating hand-knitted bags. 
        Within 6 months, it expanded to include other hand-knitted garments such as dresses, turtlenecks, hats and shawls.<br/><br/>

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
          email canta.nga.loris@gmail.com or DM @c_a_n_t_a_ on Instagram. Allow between 2-3 weeks for
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
          Or, if you would like your product returned back to you once the flaw has been fixed, it can be shipped back to you. 
          Shipping fees are paid for by the consumer.<br/>
        </p>
        <h4>STOCKLIST</h4>
        <p>
          Effe: 207 Laurier Ouest, Montreal, Quebec<br/>
          Seconde: 5274 Boul. St-Laurent, Montreal, Quebec<br/>
        </p>
        <h4>CONTACT</h4>
        <p>
          Email: canta.nga.loris@gmail.com<br/>
          Instagram: @c_a_n_t_a_<br/>
        </p>
        <h4>PUBLICATIONS</h4>
        <p>
          <a className='publications' href='https://www.harpersbazaar.com/it/moda/tendenze/a38358037/brand-emergenti-moda-novita-inverno-2021/'>Harper's Bazaar Italia</a><br/>
          <a className='publications' href='https://i-d.vice.com/en/article/pkbmd7/montreal-fashion-designers-to-know'>i-D</a><br/>
          <a className='publications' href='/'>Fashion Magazine</a><br/>
          <a className='publications' href='https://www.theglobeandmail.com/life/style/article-gift-guide-for-style-lovers-from-handmade-ceramics-to-quirky-handbags/'>Globe and Mail Style Advisor</a><br/>
          <a className='publications' href='https://albanianpost.com/canta-per-canta/'>Albanian Post</a><br/>
          <a className='publications' href='https://diasporashqiptare.al/2021/07/15/kanada-loris-kecaj-dhe-suksesi-me-cante-lidhja-me-vendlindjen-time/'>Diaspora Shqiptare</a><br/>
        </p>
      </div>
      }
    </React.Fragment>
  )
}
