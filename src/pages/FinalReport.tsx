import "./Questions.css";

interface Props {
    goToHomePage: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    gptResponse: string;
  }
    
  const FinalReport: React.FC<Props> = ({ goToHomePage , isDarkMode, toggleDarkMode, gptResponse }) => {
      return (
        <div>
            {/*Header Text*/}
            <h1>General Field: INSERT VARIABLE HERE</h1>
            <div className="finalReportSummary">Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit eget mi sit amet laoreet. Nam fringilla est a fringilla egestas. Donec vitae fermentum odio, a imperdiet tortor. Phasellus sed quam dui. Curabitur tortor dui, pulvinar sed auctor eget, hendrerit eget ex. Pellentesque maximus ipsum id lacinia convallis. Pellentesque aliquam eu velit in placerat. Morbi dapibus nibh mi, quis tempor magna cursus sit amet. </div>
            
            <div className="finalReportSubheader">Attributes of User:</div>
            <ul className="finalReportSummary">
                <li>Job Number One</li>
                <li>Job Number Two</li>
                <li>Job Number Three</li>
            </ul>

            <div className="finalReportSubheader">Possible Jobs:</div>
            <ul className="finalReportSummary"> {gptResponse} </ul>

            </div>
      );
    };  
    export default FinalReport;
