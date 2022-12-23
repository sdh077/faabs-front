import Navigation from "$components/navigation";
import "react-toastify/dist/ReactToastify.css";
import '$assets/css/bootstrap.css';
import Footer from "$components/footer";
import '$assets/css/theme.css'
import 'boxicons'

type Props = {
  children: JSX.Element;
};

const App = ({ children: component }: Props) => {
  
  return (
    <div className="design-theme">
      {/* Navigation */}
      <Navigation/>
      {/* Component */}
      {component}
      <Footer/>
    </div>
  );
};

export default App;
