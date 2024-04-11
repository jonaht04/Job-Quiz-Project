import "./Main_Page.css";

interface Props {
    goToHomePage: () => void;
  }


  const MainPage: React.FC<Props> = ({ goToHomePage }) => {
    return(
        <div>
            <header className="header">
            <div className="headerBody">
            <button className="homeButton" onClick={goToHomePage}>Home</button>
            <button className="homeButton">Short Quiz</button>
            <button className="homeButton">Long Quiz</button>
            <button className="helpButton">Help</button>
            </div>
            </header>
            <h1>Welcome to the (Placeholder Name) job quiz.</h1>
            <p className="spacer"> </p>
            <p className="textContainer">Unsure of what career is right for you? We have you covered.</p>
            <p></p>
             <p className="textContainer">With our (Placeholder Name)
                job quiz, you can discover careers perfect for you in just 10 minutes. By answering a   
                few simple questions, we will get you on the path to success.
            </p>
            
            <p className="spacer"> </p>
            <p className="spacer"> </p>
            <h2>There are two types of quizzes that you can take:</h2>
            <div className="promptContainer">
                <div><button className="quizButton">Short Quiz</button>
                <p className ="textContainer">This is the short answer quiz. It's a decent bit shorter, but your answers will not be as in-depth.</p></div>
                <div><button className="quizButton">Long Quiz</button>
                <p className ="textContainer">This is the long answer quiz. It consists of short answer questions, which may lead to answers of greater accuracy.</p></div>
        </div>
        <p></p>
        <p></p>
        <p className="wideTextContainer">Understand that we collect some information about you in order to suggest careers. This information is not used elsewhere for any purpose.</p>
        </div>
    )
}
export default MainPage;