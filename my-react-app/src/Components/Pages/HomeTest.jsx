import React from 'react'
import './HomeTest.css'

export const HomeTest = () => {

  return (
    <div className='fullpage'>
      <head>
        <meta charset="uft-8" />
        <title>CSS with Harmony</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>

        <div id="container">

          <header>
            <h1>CSS with Harmony</h1>
          </header>

          <nav>
            <ul>
              <li>
                <a href="/">
                  Start
                </a>
              </li>
              <li>
                <a href="index.html">
                  Page 1
                </a>
              </li>
              <li>
                <a href="index.html">
                  Page 2
                </a>
              </li>
              <li>
                <a href="index.html">
                  Blog
                </a>
              </li>
              <li>
                <a href="index.html">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div class="clearfix"></div>

          <section id="content">

            <article class="article">
              <h2>Article Title</h2>
              <p>Article Text</p>
            </article>

            <article class="article">
              <h2>Article Title</h2>
              <p>Article Text</p>
            </article>

            <article class="article">
              <h2>Article Title</h2>
              <p>Article Text</p>
            </article>

            <article class="article">
              <h2>Article Title</h2>
              <p>Article Text</p>
            </article>
          </section>

          <aside>
            <h2>Sidebar</h2>
            <form>
              <input type="text"></input>
              <input type="submit" value="Search" />
            </form>
          </aside>

          <div class="clearfix"></div>

          <footer>
            Harmony WEB &copy; 2020
          </footer>
        </div>

      </body>
    </div>
  )
}