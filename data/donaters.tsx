interface IDonaters {
  id: number;
  name: string;
  amount: string;
  message?: string;
  link: {
    label: String;
    href: String;
  };
}

const donaters: IDonaters[] = [
  { id: 0, name: 'awge tymur', amount: '1 Евро', message: 'Абобабандит ауе ворам свобода',
    link: {label: 'Инстаграм: @tymurbutrik', href: 'https://instagram.com/tymurbutrik'}},
  { id: 0, name: 'Курсор', amount: '35 Рублей', message: 'Не понял, а Где Курсосор в программе????',
    link: undefined}
]

export default donaters