import Router from "./router/Router"
import Client from "./state/query/Client"
import Store from "./state/store/Store"
import Toast from "./styles/toast"

const App = () => {
  return (
    <Store>
      <Client>
        <Router />    
      </Client>
      <Toast />
    </Store>
  )
}

export default App