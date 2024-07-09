import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AssignmentsList } from "./assignments/AssignmentsList";
import { AssignmentsCreate } from "./assignments/AssignmentsCreate";
import { AssignmentsEdit } from "./assignments/AssignmentsEdit";
import { AssignmentsShow } from "./assignments/AssignmentsShow";
import { AssetsList } from "./assets/AssetsList";
import { AssetsCreate } from "./assets/AssetsCreate";
import { AssetsEdit } from "./assets/AssetsEdit";
import { AssetsShow } from "./assets/AssetsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Asset Management System"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Assignments"
          list={AssignmentsList}
          edit={AssignmentsEdit}
          create={AssignmentsCreate}
          show={AssignmentsShow}
        />
        <Resource
          name="Assets"
          list={AssetsList}
          edit={AssetsEdit}
          create={AssetsCreate}
          show={AssetsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
