import React from "react"
import Head from "next/head"
import head from "./head"

class GoogleAnalytics extends React.Component {
  render(){
    return (
      <>
        <script async src="https://utidteam.com/gtm-proxy/*(d3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29t)*/*(Z3RhZw)*/*(anM%2FaWQ9Ry1TVDBXWEVDUkc1)*" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ST0WXECRG5', { page_path: window.location.pathname });
            `,
          }}
        />
      </>
    )
  }
}

class YandexMetrika extends React.Component {
  render(){
    return (
      <>
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
           m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

           ym(74780605, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
           });
          `
        }}
        />
        <noscript><div><img src="https://mc.yandex.ru/watch/74780605"/></div></noscript>
      </>
    )
  }
}

export default class AppHead extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Head>
        <title>{head.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={head.longTitle}/>
        <meta name="description" content={head.description}/>
        <meta name="keywords" content={head.keywords}/>
        <link rel="image_src" href={head.images._1200x630}/>
        <meta property="og:site_name" content={head.slogan}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={head.rootURL}/>
        <meta property="og:title" content={head.longTitle}/>
        <meta property="og:description" content={head.description}/>
        <meta property="og:image" content={head.images._1200x630}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:url" content={head.images._1200x630}/>
        <meta name="twitter:title" content={head.longTitle}/>
        <meta name="twitter:description" content={head.description}/>
        <meta name="twitter:image:src" content={head.images._1200x630}/>

        <GoogleAnalytics />
        <YandexMetrika />
      </Head>
    )
  }
}