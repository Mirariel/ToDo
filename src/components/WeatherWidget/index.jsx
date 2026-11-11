import { connect } from 'react-redux'
import { getWeatherThunk } from '../../store/slices/weatherSlice'
import { useEffect } from 'react'
import styles from './WeatherWidget.module.sass'

function WeatherWidget ({ weather, isFetching, error, getWeather }) {
  useEffect(() => {
    getWeather()
  }, [])

  if (error) {
    return <div className={styles.weatherContainer}>Error!!!</div>
  }

  if (isFetching || !weather) {
    return <div className={styles.weatherContainer}>loading...</div>
  }

  if (!isFetching && !error) {
    const {
      current: { temperature_2m: temperature, wind_speed_10m: wind },
      current_units: { temperature_2m: tempUnit, wind_speed_10m: windUnit }
    } = weather

    return (
      <div className={styles.weatherContainer}>
        <h4 className={styles.weatherHeader}>Weather</h4>
        <div>
          Temperature: {temperature} {tempUnit}
        </div>
        <div>
          Wind speed: {wind} {windUnit}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentWeather }) => currentWeather
const mapDispatchToProps = dispatch => ({
  getWeather: () => dispatch(getWeatherThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget)
