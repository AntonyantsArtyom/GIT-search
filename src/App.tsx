import { Provider } from "react-redux";
import { Layout } from "./AppLyaout";
import { store } from "./store";
import { RepositoriesPageContent } from "./widgets/RepositoriesPageContent/RepositoriesPageContent";

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <RepositoriesPageContent />
      </Layout>
    </Provider>
  );
}

export default App;
