import React from 'react'
import { Container } from 'react-bootstrap'

type Props = {}

const Information = (props: Props) => {
  return (
    <Container>
      <h1 style={{marginTop: 50}}>Приветствую, это небольшое приложение имитирует поведение работы совершения и таблицы заказов в сетях быстрого питания.</h1>
      <h2 style={{marginTop: 50}}>Приложение realtime, то есть заказы отображаются по мере добавления у всех пользователей, у которых открыт сайт, без обновления страницы.</h2>
      <h3 style={{marginTop: 50}}>Основные используемые технологии: </h3>
      <ul>
        <li>Supabase (база данных и webSockets)</li>
        <li>React + Typescript</li>
        <li>Redux Toolkit</li>
        <li>Bootstrap 5</li>
      </ul>
    </Container>
  )
}

export default Information