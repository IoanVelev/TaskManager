import { TaskCard } from "../TaskCard/TaskCard";

export default function Home() {
  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '0 20px',
    },
    title: {
        fontSize: '2.5em',
        color: '#333',
        marginBottom: '20px',
    },
    description: {
        fontSize: '1.2em',
        color: '#666',
        textAlign: 'center',
        maxWidth: '600px',
        lineHeight: '1.5',
        marginBottom: '40px',
    },
    socialLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    link: {
        fontSize: '1.2em',
        color: '#1a73e8',
        textDecoration: 'none',
    },
};
  return (
    <>
    <div style={styles.container}>
            <h1 style={styles.title}>Welcome to TaskManager</h1>
            <p style={styles.description}>
                TaskManager is your ultimate solution to organize your tasks efficiently. 
                Create, read, update, and delete tasks with ease. Stay on top of your to-do list, 
                manage your time better, and boost your productivity.
            </p>
            <div style={styles.socialLinks}>
                <a href="https://www.facebook.com" style={styles.link} target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.twitter.com" style={styles.link} target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.linkedin.com" style={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com" style={styles.link} target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </div>
    <TaskCard />
    </>
  )
  
}