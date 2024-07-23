import Card from './card'
import './styles/grid.css'

export default function Grid () {
  return (
    <div>
      <div data-testid='row' className='memory-grid-row'>
        <Card number='1' />
        <Card number='2' />
        <Card number='3' />
        <Card number='4' />
      </div>
      <div data-testid='row' className='memory-grid-row'>
        <Card number='1' />
        <Card number='2' />
        <Card number='3' />
        <Card number='4' />
      </div>
      <div data-testid='row' className='memory-grid-row'>
        <Card number='1' />
        <Card number='2' />
        <Card number='3' />
        <Card number='4' />
      </div>
    </div>
  )
}
