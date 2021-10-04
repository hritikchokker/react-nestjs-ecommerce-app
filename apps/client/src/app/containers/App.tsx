import { ReactComponent as Logo } from '../logo.svg';
import star from '../star.svg';
import styles from '../app.module.scss';
export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to react app</h1>
      </header>
    </div>
  );
}

export default App;
