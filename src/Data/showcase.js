import ResearchStack from "../Components/ResearchStack";
import ProodleStack from "../Components/ProodleStack";
import SignupStack from "../Components/SignupStack";
import WorkshopStack from "../Components/WorkshopStack";

import mnist_icon from "../Images/mnist_2.png";
import proodle_icon from "../Images/proodle.png";
import workshop_logo from "../Images/workshop_logo.png";

import { gan_project, proodle, signup_project, workshop_project } from "../Text/info";


const showcaseData = [
    {
        "icon": workshop_logo,
        "text": workshop_project,
        "stack": WorkshopStack,
        "link": "https://www.workshop.ws"
    },
    {
        "icon": mnist_icon,
        "text": gan_project,
        "stack": ResearchStack,
        "link": "https://github.com/charliemday/Generative-Adversarial-Networks"
    },
    {
        "icon": proodle_icon,
        "text": proodle,
        "stack": ProodleStack,
        "link": "https://www.nottingham.ac.uk/research/research-areas/energy-technologies/business-support/case-studies/proodle/proodlesolutions.aspx"
    },
    {
        "icon": "https://github.com/charliemday/signup/blob/master/Images/Screenshot%202019-07-10%20at%2002.02.38.png?raw=true",
        "text": signup_project,
        "stack": SignupStack,
        "link": "https://github.com/charliemday/signup"
    }
]


export default showcaseData;