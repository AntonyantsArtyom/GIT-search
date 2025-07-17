import { Button, Input } from "antd";
import styles from "./styles.module.scss";
import { useState, type ChangeEventHandler } from "react";

export const RepositorySearch = () => {
  const [repository, setRepository] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => setRepository(e.target.value);

  return (
    <div className={styles.search}>
      <Input id="repository" className={styles.input} placeholder="Введите поисковый запрос" value={repository} onChange={handleChange} />
      <Button className={styles.button}>ИСКАТЬ</Button>
    </div>
  );
};
