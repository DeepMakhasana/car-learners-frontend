import Image from "next/image";
import styles from "../curriculum.module.css";

const create = () => {
  return (
    <div className={styles.createCurriculumContainer}>
      <h1>New Curriculum</h1>
      <form method="post">
        <div>
          <input type="number" placeholder="Total Days" />
          <input type="number" placeholder="Amount" />
        </div>
        <div>
          <p>Create Task</p>
          <div>
            <Image src={"/icons/add.svg"} alt="add" width={18} height={18} />
          </div>
        </div>
        <div>
          <input type="text" placeholder="Title" />
          <input type="number" placeholder="Number of Days" />
        </div>
        <div>
          <p>Select vehicles</p>
          <div>
            <Image src={"/icons/add.svg"} alt="add" width={18} height={18} />
          </div>
        </div>
        <div>
          <select name="vehicle">
            <option value="">select vehicle</option>
            <option value="alto">Alto</option>
            <option value="swift">Swift</option>
          </select>
          <input type="number" placeholder="Extra amount" />
        </div>
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default create;
