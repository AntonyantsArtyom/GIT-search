import { Provider } from "react-redux";
import { Layout } from "./AppLyaout";
import { store } from "./store";

import "./App.scss";
import { RepositoryList } from "./entities/Repository/UI/RepositoryList";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <RepositoryList />
      </Layout>
    </Provider>
  );
}

export default App;
