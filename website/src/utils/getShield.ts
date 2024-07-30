import bronzeShield from '../static/icons/shields/bronze.svg';
import silverShield from '../static/icons/shields/silver.svg';
import goldShield from '../static/icons/shields/gold.svg';
import diamondShield from '../static/icons/shields/diamond.svg';
import rubyShield from '../static/icons/shields/ruby.svg';
import platinumShield from '../static/icons/shields/platinum.svg';

export function getShield(points: number) {
  if (points < 100) {
    return bronzeShield
  } else if (100 <= points && points < 600) {
    return silverShield
  } else if (600 <= points && points < 1250) {
    return goldShield
  } else if (1250 <= points && points < 2500) {
    return diamondShield
  } else if (2500 <= points && points < 3500) {
    return rubyShield
  } else if (3500 <= points) {
    return platinumShield
  }
}