export default function App() {
  const gitCommands = `
git init
git status
git add .
git commit -m "Initial commit"
git branch feature-course
git branch feature-event
git checkout feature-course
git checkout feature-event
git merge feature-course
git merge feature-event
git push origin main
`;

  return (
    <div className="container">
      <div className="heading">
        <h1>V Sampath Kumar (Roll No: 2400032628)</h1>
      </div>

      <div className="git-box">
        <h2>Git Commands Used</h2>
        <div className="git-commands">{gitCommands}</div>
      </div>

      <div className="info">
        <h2>About Me</h2>
        <p>
          Hello, I am <strong>V Sampath Kumar</strong>.  
          I am currently learning HTML, CSS, JavaScript, React, and Git.  
          I enjoy working on development projects and improving my coding skills.
        </p>
      </div>
    </div>
  );
}
