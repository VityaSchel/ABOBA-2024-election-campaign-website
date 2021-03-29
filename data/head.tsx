import {default as $D} from 'dedent'

interface HeadInterface {
  slogan: string;
  title: string;
  longTitle: string;
  description: string;
  keywords: string;
  images: {
    _1200x630: string;
  }
}

const head: HeadInterface = {
  slogan: 'АБОБА — Кандидат от народа',
  title: 'АБОБА — Кандидат от народа',
  longTitle: 'АБОБА — Кандидат от народа и партии Пожилая Ветка Сакуры',
  description: 'АБОБА идет в президенты в 2024 году, чтобы предложить будущее для нашей страны. \
                Присоединяйтесь к кампании за то, чтобы выборы прошли честно и открыто.',
  keywords: 'АБОБА 2024 выборы президента кампания',
  images: {
    _1200x630: 'https://i.imgur.com/yPPjHlK.png'
  }
}

export default head