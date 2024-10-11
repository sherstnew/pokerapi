import styles from './Season.module.scss';
import { IPlayer } from '../../static/types/IPlayer';
import { IStats } from '../../static/types/IStats';

interface ISeasonProps {
  stats: IStats
  bestPlayer: IPlayer
}

export default function Season(props: ISeasonProps) {
  return (
    <section className={styles.season}>
      <div className={styles.subheader}>Сейчас проходит</div>
      <header className={styles.header}>Текущий сезон</header>
      {
        props.bestPlayer
        ?
        <div className={styles.best}>
          Лучший игрок - {props.bestPlayer.Name.split(' ')[0]} {props.bestPlayer.Name.split(' ')[1][0]}., {props.bestPlayer.Points} очков
        </div>
        :
        ''
      }
      <div className={styles.stat}>
        Побед на игрока - {props.stats.average_victories}
      </div>
      <div className={styles.stat}>
        Средне фишек на игрока - {props.stats.average_chips}
      </div>
      <div className={styles.stat}>
        Средне очков на игрока - {props.stats.points_per_player}
      </div>
      <div className={styles.stat}>
        Средне фишек за игру заработано - {props.stats.chips_per_game}
      </div>
    </section>
  )
}