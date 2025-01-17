import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'

const Network = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="section">
           
            

            <div className="openmastery">
              <AiOutlineDeploymentUnit className="icon" />
             <h3>Mkakati</h3>
              <p>
               DevHabiri ni tuvuti ambayo lengo lake niku chapisha makala za jinsi ambayo unaweza kutumia tekinologia katika mazingira yako ili kurahisisha shuhuli mbalimbali, hapa utapata mbinu na dondoo mbali mbali za jinsi ambanyo unaweza kutumia tekinologia.

Tuliamua kuchagua lugha ya kiswahili kutokana na uhaba wa makala kamahizi kwa lugha hii "Kiswahili".

Sababu nyingine kubwa zaidi ni kwamba lugha za tekinologia ya komputa zimeandikwa kwajili ya binadamua kusoma na kuelewa alafu mashine "komputa" huzitumia "execute" pale zinapo hitaji.

kwa mantiki hiyo basi sisi tumeamua kuzisimulia(chambua)/"fafanua" kwa lugha ya kiswahili

ili iwe rahisi kwa mtu yoyote yule amabaye anajua lughaa ya kiswahili kufuatilia makala hizi na hatimaye kunufaika nazo kwa namna moja au nyingine.
              </p>
              <p>
                <a href="#" target="_blank" rel="noopener noreferrer">Check it out</a>
              </p>
            </div>
            <div className="openjournal">
              <AiOutlineDeploymentUnit className="icon" />
                <h3>Maono</h3>
              <p>
              Jamii ya watu wanao endesha shuhuli zao kwa kutumia tekinologia, kiswahili na tekinologia inawezekana.  
              </p>
            </div>
            <div className="network-card">
              <div className="card-wrapper">
                <h3>Help us Grow</h3>
                <p>
                  Contributing is very easy. If you share our vision, we'd love for you to help us grow.
                </p>
                <Link to="/support-us" className="network-card-btn not-blue">
                  How to Contribute
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .section {
    display: grid;
    width: 100%;
    grid-gap: 3rem;
    grid-template-rows: 1fr 100%;
    grid-template-columns: 0.8fr 0.8fr 1fr 1fr;
    grid-template-areas:
      'about about about picture'
      'openmastery openmastery openjournal card';

    padding: 0;
    margin-bottom: 5rem;
  }

 

  .card-wrapper p{
    padding: .7rem 0 .8rem 0;
  }

  .subtitle{
    margin-bottom: .5rem;
    color: var(--primary-6)
  }

  .about {
    grid-area: about;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5rem;
    /* padding-right: 6rem; */
  }
  .picture {
    grid-area: picture;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5rem;
  }
  .openmastery {
    grid-area: openmastery;
  }
  .openjournal {
    grid-area: openjournal;
  }

  .network-card {
    grid-area: card;
    background-color: #ffd0b6;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem 2rem;
    border-radius: 0.8rem;
    box-shadow: 0 10px 25px #ffd0b65f;
  }




  .network-card-btn {
    border: 1px solid var(--grey-6);
    border-radius: 0.6rem;
    margin-top:.5rem;
    padding: 0.5rem 1.1rem;
    position: relative;
  }

  .icon {
    width: 90px;
    height: auto;
    background-color: var(--card-icon-bg);
    padding: 1rem;
    border-radius: 0.8rem;
    margin-bottom: 1rem;
    box-shadow: 0 10px 25px #b6eaff95;
  }

  @media screen and (max-width: 1199px) {
    .network-card-btn{
      padding: 0.5rem 0.2rem;
    }
  }

  @media screen and (max-width: 991px) {
    text-align: center;
    margin-left: 5vw;
    margin-right: 5vw;

    .network-card-btn{
      padding: 0.5rem 1rem;
    }

    .subtitle{
   font-size: 1.3rem;
  }

    .section {
    grid-gap: 3rem;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      'about'
      'picture'
      'openmastery' 
      'openjournal'
      'card';
  }

  .about{
    margin: 0;
    padding: 0;
  }

  .network-card{
    padding: 2.5rem;
  }

  .picture{
    margin-bottom: 2rem;
  }
}

@media screen and (max-width: 577px) {


}
`

export default Network
