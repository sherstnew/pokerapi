import styles from './Rating.module.scss';
import { IPlayer } from '../../static/types/IPlayer';
import { getShield } from '../../utils/getShield';

interface IRatingProps {
  rating: IPlayer[]
}

export default function Rating(props: IRatingProps) {
  return (
    <section className={styles.rating}>
      <header className={styles.header}>Рейтинг</header>
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <tr>
            <th></th>
            <th>Имя</th>
            <th>Очки</th>
            <th>Фишки</th>
            <th>Победы</th>
            <th>Долг</th>
          </tr>
          {
            props.rating.map((player, index) => (
              <tr>
                <td>{index + 1}</td>
                <td className={styles.name}>
                  <img className={styles.shield} src={getShield(player.Points)} alt="Щит" />
                  <span>{player.Name.split(' ')[0]} {player.Name.split(' ')[1][0]}.</span>
                </td>
                <td>{player.Points}</td>
                <td>{player.Chips}</td>
                <td>{player.Victories}</td>
                <td>{player.Debt}</td>
              </tr>
            ))
          }
        </table>
      </div>
    </section>
  )
}