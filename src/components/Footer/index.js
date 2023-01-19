import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoface from '../../assets/Footer/logoface.svg';
import logoinsta from '../../assets/Footer/logoinsta.svg';
import logott from '../../assets/Footer/logott.svg';
import logofooter from '../../assets/Footer/logofooter.svg'
import "./style.css";



export default function Footer () {

    const [footer, setFooter] = useState("footer-principal")
    const navigate = useNavigate()
    useEffect(() => {
            if ( '/cadastrar' === location.pathname || '/login' === location.pathname){
                setFooter("layoutFooter")
            } else if( '/' === location.pathname) {
                setFooter("footer-home")
            }else {
                setFooter("footer-principal")
            } 
    },[navigate])
    
    return (
        <section className={footer}>
            <div className='div-margin-padrao'>
                <div className="div-digitalstore">
                    <div className='div-footer-img'>
                        <img className="div-imgfooter" src={logofooter}/>
                        <h2 className='nome-digital'>Digital Store</h2>
                    </div>
                    <span className='texto-footer'>
                    Lorem ipsum dolor sit amet, consectetur<br/>
                    adpiscing elit, sed do eiusmod tempor<br/>
                    incididunt ut labore et dolore
                    </span>
                    <div className='icons-footer'>
                        <a href='https://www.facebook.com/digitalcollegebr/'><img className='icon-face' src={logoface}/></a>
                        <a href='https://www.instagram.com/digitalcollegebr/'><img className='icon-insta'src={logoinsta}/></a>
                        <img className='icon-tt' src={logott}/>
                    </div>
                </div>

                <div className='div-informacao'>
                    <h3 className='informacao-titulo'>Informação</h3>
                    <ul className='informacao2'>
                        <li>Sobre Drip Store</li>
                        <li>Segurança</li>
                        <li>Wishlist</li>
                        <li>Blog</li> 
                        <li>Trabalhe conosco</li>   
                        <li>Meus pedidos</li>                  
                    </ul>

                </div>

                <div className='categoria-geral'>
                    <h3 className='categoria-titulo'>Categorias</h3>
                    <ul className='categoria-footer'>
                        <li>Camisetas</li>
                        <li>Calças</li>
                        <li>Bonés</li>
                        <li>Headphones</li> 
                        <li>Tênis</li>                   
                    </ul>
                </div>

                <div>
                    <h3 className='contato-titulo'>Contato</h3>
                    <p className='contato-footer'>Av. Santos Dumont, 1510-1 <br/>
                    andar- Aldeota, Fortaleza -<br/>
                    CE, 60150-161<br/></p>
                    <div className='numerofooter'>
                        (85) 3051-3411
                    </div>                    
                </div>               
            </div>
            
            <div className='finalfooter'>
                 <p className='digitalpequeno'>@2022 Digital College</p>
            </div>                
        </section>
    );
}