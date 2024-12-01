// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { HealthDataProvider } from "./contexts/HealthDataContext";
import { FitnessDataProvider } from "./contexts/FitnessDataContext";
import { MentalHealthProvider } from "./contexts/MentalHealthContext";
import MainLayout from "./components/layout/MainLayout";
import routes from "./routes";
import PrivateRoute from "./components/common/PrivateRoute";
import PublicRoute from "./components/common/PublicRoute";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HealthDataProvider>
        <FitnessDataProvider>
          <MentalHealthProvider>
            <Router>
              <MainLayout>
                <Switch>
                  {routes.map((route, index) => {
                    const RouteComponent = route.private
                      ? PrivateRoute
                      : PublicRoute;
                    return (
                      <RouteComponent
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                      />
                    );
                  })}
                </Switch>
              </MainLayout>
            </Router>
          </MentalHealthProvider>
        </FitnessDataProvider>
      </HealthDataProvider>
    </AuthProvider>
  );
};

export default App;
