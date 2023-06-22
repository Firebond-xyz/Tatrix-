import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent>
          <h1>hi</h1>
        </InstructionsComponent>
        <h1>hi</h1>

      </main>
    </div>
  );
}
