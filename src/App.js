import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { Container, Content, Row } from './styles';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleRemNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const rem = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(rem));
      setOperation('')
    }
  }

  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation('')
    }
  }

  const handlePercentNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('%')
    } else {
      var num = (Number(firstNumber) * Number(currentNumber)) / 100;
      const percent = Number(firstNumber) + num;

      setCurrentNumber(String(percent));
      setOperation('')
      console.log(percent)
    }
  }

  const handleExponentialNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('^')
    } else {
      const exponential = Number(firstNumber) ** Number(currentNumber);
      setCurrentNumber(String(exponential));
      setOperation('')
    }
  }

  const handleInvertNumbers = () => {

    const invert = (Number(currentNumber) * -1);
    setCurrentNumber(String(invert));
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleRemNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case '%':
          handleDivNumbers();
          break;
        case '^':
          handleExponentialNumbers();
          break;
        case '±':
          handleInvertNumbers();
          break;

        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={ handleOnClear } />
          <Button label="^" onClick={ handleExponentialNumbers } />
          <Button label="%" onClick={ handlePercentNumbers } />
          <Button label="/" onClick={ handleDivNumbers } />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="*" onClick={ handleMultNumbers } />
        </Row>
          
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={ handleRemNumbers } />
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>

        <Row>
          <Button label="±" onClick={ handleInvertNumbers } />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="," onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={ handleEquals } />
        </Row>


      </Content>
    </Container>
  );
};

export default App;
