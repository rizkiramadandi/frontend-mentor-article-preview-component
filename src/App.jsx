import { useState } from 'react'

function App() {
  const [isShare, setIsShare] = useState(false)
  
  return (
    <>
      <main>
        <div className="card">
          <div className="card-image">
            <img src="./images/drawers.jpg" alt="Drawers Image" />
          </div>

          <div className="card-body">
            <div className="card-title">
              Shift the overall look and feel by adding these wonderful touches to furniture in your home
            </div>

            <div className="card-subtitle">
              Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
            </div>

            <div className="card-info">
              <div className="profile">
                <div className="photo">
                  <img src="./images/avatar-michelle.jpg" alt="Michelle's Avatar" />
                </div>

                <div className="name-date-container">
                  <div className="name">
                    Michelle Appleton
                  </div>

                  <div className="date">
                    28 Jun 2020
                  </div>
                </div>
              </div>

              <div className="share-container">
                <button className={isShare ? "share-button active":"share-button"} onClick={() => setIsShare(!isShare)}>
                  <img src="./images/icon-share.svg" alt="Share Icon" />
                </button>
                <div className={isShare ? "share active":"share"}>
                  <span className='share-text'>
                    SHARE
                  </span>
                  <button>
                    <img src="./images/icon-facebook.svg" alt="Facebook Icon" />
                  </button>
                  <button>
                    <img src="./images/icon-twitter.svg" alt="Twitter Icon" />
                  </button>
                  <button>
                    <img src="./images/icon-pinterest.svg" alt="Pinterest Icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://www.frontendmentor.io/profile/rizkiramadandi">Rizki Ramadandi</a>.
        </div>
      </footer>
    </>
  )
}

export default App
