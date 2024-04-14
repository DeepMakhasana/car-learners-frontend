import CreatedList from "../components/CreatedList";
import SubPageWrapper from "../components/SubPageWrapper";
import styles from "./vehicle.module.css";

const Vehicle = () => {
  return (
    <SubPageWrapper title="Trainer">
      <VehicleForm />
      <CreatedList />
    </SubPageWrapper>
  );
};

const VehicleForm = () => {
  return (
    <form method="post" className={styles.vehicleFormContainer}>
      <select name="Brand">
        <option value="">Brand</option>
        <option value="gujarat">Gujarat</option>
        <option value="rajeshthan">Rajeshthan</option>
      </select>
      <select name="Model">
        <option value="">Model</option>
        <option value="gujarat">Gujarat</option>
        <option value="rajeshthan">Rajeshthan</option>
      </select>
      <select name="trainer">
        <option value="">Allot Trainer</option>
        <option value="gujarat">Gujarat</option>
        <option value="rajeshthan">Rajeshthan</option>
      </select>
      <input type="submit" value="Add" />
    </form>
  );
};

export default Vehicle;
