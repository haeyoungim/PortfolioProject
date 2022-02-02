import React, { Component } from 'react';
import hsh from '../Main/images/hsh.png';
import ihy from '../Main/images/ihy.png';
import sjw from '../Main/images/sjw.png';
import whs from '../Main/images/whs.png';
import hhy from '../Main/images/hhy.png';

class Article extends Component {
    render() {
      return (
        <>
  
          <article id="SJW" className="panel intro">
            <header>
              <h1>Son Ji Won</h1>
              <p>2022 Portfolio</p>
            </header>
            <a href="https://github.com/Sonjiwon0" className="jumplink pic">
  {/* 
              <img src="./Main/images/sjw.png" alt="" /> */}
              <img src={sjw} alt="" />
            </a>
          </article>
  
  
          <article id="IHY" className="panel intro">
            <header>
              <h1>Lim Hae young</h1>
              <p>2022 Portfolio</p>
            </header>
            <a href="https://github.com/haeyoungim" className="jumplink pic">
  
              <img src={ihy} alt="" />
            </a>
          </article>
  
  
          <article id="WHS" className="panel intro">
            <header>
              <h1>Wi Hae Seo</h1>
              <p>2022 Portfolio</p>
            </header>
            <a href="https://github.com/haeseo" className="jumplink pic">
  
              <img src={whs} alt="" />
            </a>
          </article>
  
          <article id="HSH" className="panel intro">
            <header>
              <h1>Han Sang Hui </h1>
              <p>2022 Portfolio</p>
            </header>
            <a href="https://github.com/sshh0719" className="jumplink pic">
  
              <img src={hsh} alt="" />
            </a>
          </article>
  
          <article id="HHY" className="panel intro">
            <header>
              <h1>Han Hye Young</h1>
              <p>2022 Portfolio</p>
            </header>
            <a href="https://github.com/HanHoing" className="jumplink pic">
  
              <img src={hhy} alt="" />
            </a>
          </article>
  
        </>
      );
    }
  }

  export default Article;