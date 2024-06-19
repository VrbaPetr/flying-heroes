import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo-temp.svg'
import divider from './assets/divider.svg'
import preview1 from './assets/preview1.jpg'
import preview2 from './assets/preview2.jpg'
import preview3 from './assets/preview3.jpg'
import preview4 from './assets/preview4.jpg'
import './App.css'

function App() {

  return (
    <>
    <div className='content--wrapper'>
      <div className="main-content-wrapper">
        <div className="main-top">
          <img src={logo} alt="" className='logo-main' />
          <h1>Heroes in the sky</h1>
          <p className='main-slider-top--motto'>„Any landing you walk away from is a good one“</p>
            <nav className='main-navigation'>
              <a href="#" className='inline-nav-item'>About Project</a>
              <a href="#" className='inline-nav-item'>Heroic Stories</a>
            </nav>
        </div>
        <div className="main-recent-stories">
          <img src={divider} alt="" className="divider-icon" />
          <h2>Recent Stories</h2>
          <div className="stories-wrapper">
            <div className="category-story--wrapper">
              <img src={preview1} alt="" className="category-story-img" />
              <h3>Article Heading ex. "Hudson miracle"</h3>
              <p className="category-story-description">This is short description of the article showed on category, on homepage. This description will briefly describe content of the article, even if heading will say enough.</p>
              <a href="#" className="category-story-readmore">Read more</a>
              <p className="category-story-tags-cloud">
                <a href="#" className="category-story-tag">#aircanada</a>
                <a href="#" className="category-story-tag">#flybee</a>
                <a href="#" className="category-story-tag">#smartwings</a>
                <a href="#" className="category-story-tag">#boeing</a>
                <a href="#" className="category-story-tag">#airbus</a>
                <a href="#" className="category-story-tag">#B737 Max 8</a>
              </p>
            </div>
            <div className="category-story--wrapper">
              <img src={preview2} alt="" className="category-story-img" />
              <h3>Article Heading ex. "Hudson miracle"</h3>
              <p className="category-story-description">This is short description of the article showed on category, on homepage. This description will briefly describe content of the article, even if heading will say enough.</p>
              <a href="#" className="category-story-readmore">Read more</a>
              <p className="category-story-tags-cloud">
                <a href="#" className="category-story-tag">#aircanada</a>
                <a href="#" className="category-story-tag">#flybee</a>
                <a href="#" className="category-story-tag">#smartwings</a>
                <a href="#" className="category-story-tag">#boeing</a>
                <a href="#" className="category-story-tag">#airbus</a>
                <a href="#" className="category-story-tag">#B737 Max 8</a>
              </p>
            </div>
            <div className="category-story--wrapper">
              <img src={preview4} alt="" className="category-story-img" />
              <h3>Article Heading ex. "Hudson miracle"</h3>
              <p className="category-story-description">This is short description of the article showed on category, on homepage. This description will briefly describe content of the article, even if heading will say enough.</p>
              <a href="#" className="category-story-readmore">Read more</a>
              <p className="category-story-tags-cloud">
                <a href="#" className="category-story-tag">#aircanada</a>
                <a href="#" className="category-story-tag">#flybee</a>
                <a href="#" className="category-story-tag">#smartwings</a>
                <a href="#" className="category-story-tag">#boeing</a>
                <a href="#" className="category-story-tag">#airbus</a>
                <a href="#" className="category-story-tag">#B737 Max 8</a>
              </p>
            </div>
            <div className="category-story--wrapper">
              <img src={preview3} alt="" className="category-story-img" />
              <h3>Article Heading ex. "Hudson miracle"</h3>
              <p className="category-story-description">This is short description of the article showed on category, on homepage. This description will briefly describe content of the article, even if heading will say enough.</p>
              <a href="#" className="category-story-readmore">Read more</a>
              <p className="category-story-tags-cloud">
                <a href="#" className="category-story-tag">#aircanada</a>
                <a href="#" className="category-story-tag">#flybee</a>
                <a href="#" className="category-story-tag">#smartwings</a>
                <a href="#" className="category-story-tag">#boeing</a>
                <a href="#" className="category-story-tag">#airbus</a>
                <a href="#" className="category-story-tag">#B737 Max 8</a>
              </p>
            </div>
            <div className="category-story--wrapper">
              <img src={preview3} alt="" className="category-story-img" />
              <h3>Article Heading ex. "Hudson miracle"</h3>
              <p className="category-story-description">This is short description of the article showed on category, on homepage. This description will briefly describe content of the article, even if heading will say enough.</p>
              <a href="#" className="category-story-readmore">Read more</a>
              <p className="category-story-tags-cloud">
                <a href="#" className="category-story-tag">#aircanada</a>
                <a href="#" className="category-story-tag">#flybee</a>
                <a href="#" className="category-story-tag">#smartwings</a>
                <a href="#" className="category-story-tag">#boeing</a>
                <a href="#" className="category-story-tag">#airbus</a>
                <a href="#" className="category-story-tag">#B737 Max 8</a>
              </p>
            </div>
            <div className="category-story--wrapper">
              <img src={preview1} alt="" className="category-story-img" />
              <h3>Article Heading ex. "Hudson miracle"</h3>
              <p className="category-story-description">This is short description of the article showed on category, on homepage. This description will briefly describe content of the article, even if heading will say enough.</p>
              <a href="#" className="category-story-readmore">Read more</a>
              <p className="category-story-tags-cloud">
                <a href="#" className="category-story-tag">#aircanada</a>
                <a href="#" className="category-story-tag">#flybee</a>
                <a href="#" className="category-story-tag">#smartwings</a>
                <a href="#" className="category-story-tag">#boeing</a>
                <a href="#" className="category-story-tag">#airbus</a>
                <a href="#" className="category-story-tag">#B737 Max 8</a>
              </p>
            </div>
            <div className="category-story--wrapper">
              <img src={preview4} alt="" className="category-story-img" />
              <h3>Article Heading ex. "Hudson miracle"</h3>
              <p className="category-story-description">This is short description of the article showed on category, on homepage. This description will briefly describe content of the article, even if heading will say enough.</p>
              <a href="#" className="category-story-readmore">Read more</a>
              <p className="category-story-tags-cloud">
                <a href="#" className="category-story-tag">#aircanada</a>
                <a href="#" className="category-story-tag">#flybee</a>
                <a href="#" className="category-story-tag">#smartwings</a>
                <a href="#" className="category-story-tag">#boeing</a>
                <a href="#" className="category-story-tag">#airbus</a>
                <a href="#" className="category-story-tag">#B737 Max 8</a>
              </p>
            </div>
            <div className="category-story--wrapper">
              <img src={preview2} alt="" className="category-story-img" />
              <h3>Article Heading ex. "Hudson miracle"</h3>
              <p className="category-story-description">This is short description of the article showed on category, on homepage. This description will briefly describe content of the article, even if heading will say enough.</p>
              <a href="#" className="category-story-readmore">Read more</a>
              <p className="category-story-tags-cloud">
                <a href="#" className="category-story-tag">#aircanada</a>
                <a href="#" className="category-story-tag">#flybee</a>
                <a href="#" className="category-story-tag">#smartwings</a>
                <a href="#" className="category-story-tag">#boeing</a>
                <a href="#" className="category-story-tag">#airbus</a>
                <a href="#" className="category-story-tag">#B737 Max 8</a>
              </p>
            </div>
          </div>
        </div>
        <div className="main-website-purpose">
          <img src={divider} alt="" className="divider-icon" />
          <h2>About Project</h2>
          <h3>Project Purpose</h3>
          <p className="purpose-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>Why heroes, why not pilots?</h3>
          <p className="purpose-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>Stories of the real heroes</h3>
          <p className="purpose-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>One decision, hundreds of lifes</h3>
          <p className="purpose-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <footer>
        <p className="copyright">Copyright © 2024. Heroes in the Sky Project. Owner <a href="">Petr Vrba</a></p>
      </footer>    
    </div>
    </>
  )
}

export default App
