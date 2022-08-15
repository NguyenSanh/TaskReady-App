import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
      <header className = 'header'>
        <h1> {title}</h1>
        <Button 
            color = {showAdd ? 'red' : 'blue'} 
            text = {showAdd ? 'Close' : 'Add'} 
            onClick = {onAdd} 
        />
      </header>
  )
}

// Set a Default Value for ousr title
Header.defaultProps = { 
    title: 'Task Tracker',
}

// Set a Default Variable Type for our title
Header.propTypes = {
    title: PropTypes.string,
}

// const headingStyle = {
//     color: 'red', 
//     background: 'black',
// }

export default Header