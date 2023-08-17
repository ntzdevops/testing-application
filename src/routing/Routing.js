import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ButtonComponent from '../components/button/Button';
import CheckButton from '../components/check-button/CheckButton';
import RadioButton from '../components/radio-button/RadioButton';
import TextArea from '../components/text-area/TextArea';
import InputField from '../components/input-field/InputField';


const Routing = () => {
    return  <Router>
    <Routes>
      <Route path="/" element={<ButtonComponent />} />
      <Route path="/check-button" element={<CheckButton />} />
      <Route path="/radio-button" element={<RadioButton />} />
      <Route path="/textarea" element={<TextArea />} />
      <Route path="/input-field" element={<InputField />} />
    </Routes>
  </Router>
}

export default Routing;