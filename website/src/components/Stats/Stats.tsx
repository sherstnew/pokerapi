import styles from './Stats.module.scss';
import coolSmile from '../../static/emojis/cool.png';
import emailIcon from '../../static/icons/email.svg';
import CountUp from 'react-countup';
import { PieChart } from '@mui/x-charts/PieChart';

import { IPlayer } from '../../static/types/IPlayer';
import { IStats } from '../../static/types/IStats';

interface IStatsProps {
  players: IPlayer[]
  stats: IStats
}

export default function Stats(props: IStatsProps) {
  return (
    <section className={styles.container}>
        <section className={styles.landing}>
          <h1 className={styles.header}>🃏 Покерная лига</h1>
          <h3 className={styles.subheader}><img src={coolSmile} alt="" width={30} height={30} /> <span>Играют только профессионалы</span></h3>
          <h2 className={styles.stats_header}>
            <CountUp className={styles.accent_number} end={props.stats.total_games} /> игр сыграно
          </h2>
          <h2 className={styles.stats_header}>
            <CountUp className={styles.accent_number} end={props.stats.total_chips} /> фишек в банке
          </h2>
          <div className={styles.buttons}>
            <a href='mailto:sherstnev.denis.v@gmail.com' target='_blank' className={styles.button + ' ' + styles.contact}>
              <img src={emailIcon} alt="" width={20} />
              <span>Написать нам</span>
            </a>
          </div>
        </section>
        <section className={styles.stats}>
          <div className={styles.chart}>
            <div className={styles.chart_header}>Распределение побед</div>
            <PieChart
              height={400}
              slotProps={{
                legend: {
                  labelStyle: {
                    fontSize: 16,
                    fontFamily: 'Manrope',
                    fill: '#fafafa',
                  },
                },
              }}
              series={[
                {
                  data: props.players.map(player => {
                    return {
                      id: player.Id,
                      value: player.Victories,
                      label: player.Name.split(' ')[0],
                    }
                  }),
                  innerRadius: 15,
                  outerRadius: 100,
                  paddingAngle: 2,
                  cornerRadius: 5,
                }
              ]}
            />
          </div>
        </section>
    </section>
  )
}