import { Header } from "./shared/Header";
import { SideBar } from "./shared/SideBar";

export const Dashboard = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="main-content">
          <SideBar />
          <main>
            <div className="user-section first-section">
              <h3>Dashboard</h3>
              <button className="addnew ml_12">Search</button>
              {"    "}
              <button className="addnew ml_12">Actions</button>
              {"    "}
              <button className="addnew ml_12">Download Report As</button>
            </div>

            <div className="second-section">
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <button className="button">Button 1</button>
              <button className="button">Button 2</button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
