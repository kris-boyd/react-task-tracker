import Button from './Button'
import PropTypes from 'prop-types'
const Header = ({ title }) => {

    const onClick = () => {
        console.log('Click')
    }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick} />
        
    </header>
  )
}
Header.defaultProps = {
    title: 'default title'
}
Header.propTypes = {
    title: PropTypes.string,
}

export default Header