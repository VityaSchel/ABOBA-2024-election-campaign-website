import React from 'react'
import Image from 'next/image'

class Article extends React.Component {
  render(){
    return (
      <article id="news-article">
        <h3 className="pseudo-link">{this.props.children}</h3>
        <div className='date'>{this.props.date}</div>
      </article>
    )
  }
}

class ShortArticlesList extends React.Component {
  render(){
    interface ArticleInterface {
      id: number; title: string; date: string;
    }

    return (
      <div id="shorts">
        <Article date="2 апреля">Пена снова вылез из под стола</Article>
        <Article date="20 марта">Кралина и Валера снова вместе</Article>
        <Article date="14 марта">Денис ответил Рокеру из пеги банд</Article>
      </div>
    )
  }
}

class AchievementsList extends React.Component {
  render(){
    return (
      <div id="achievements">
        <BigThumbs />
        <SmallThumbs />
      </div>
    )
  }
}

interface IAchievement {
  id: number; title: string; thumbnail: string;
}

class Achievement extends React.Component<IAchievement> {
  render(){
    return (
      <article className="achievement-article">
        <div className="img-wrapper">
          <Image src={this.props.thumbnail} alt="Превью статьи" layout='fill'/>
        </div>
        <h3>{this.props.children}</h3>
      </article>
    )
  }
}
class BigThumbs extends React.Component {
  render(){
    return (
      <div id="big-thumbs">
        <Achievement thumbnail="/images/article-thumbnail-1.png">
          Абоба выплатил долги по кредиту в Луганске
        </Achievement>
        <Achievement thumbnail="/images/article-thumbnail-2.png">
          Абоба вернул украденный в 2007 году образ американского ютубера
        </Achievement>
        <Achievement thumbnail="/images/article-thumbnail-3.png">
          Абоба отказался от сайта для заказа рофл-звонков
        </Achievement>
      </div>
    )
  }
}

interface ISmallAchievement {
  id: number; title: string; thumbnail: string;
}

class SmallAchievement extends React.Component<ISmallAchievement> {
  render(){
    return (
      <article className="small-achievement-article">
        <div className="image-icon-wrapper">
          <Image src={this.props.thumbnail} alt="Иконка для статьи" width="40px" height="40px"/>
        </div>
        <h3 className="pseudo-link">{this.props.children}</h3>
      </article>
    )
  }
}

class SmallThumbs extends React.Component {
  render(){

    return (
      <div id="small-thumbs">
        <div id="small-thumbs-column">
          <SmallAchievement thumbnail="/images/tv-icon.png">
            Даже Сухач зарабатывает 19 триллионов долларов в месяц
          </SmallAchievement>
          <SmallAchievement thumbnail="/images/check-icon.png">
            Абоба тоже имеет право на БМВ за 6 миллионов
          </SmallAchievement>
        </div>
      </div>
    )
  }
}

export default class Articles extends React.Component {
  render(){
    return (
      <section id="last-news">
        <div id="articles-list">
          <ShortArticlesList />
          <AchievementsList />
        </div>
      </section>
    )
  }
}