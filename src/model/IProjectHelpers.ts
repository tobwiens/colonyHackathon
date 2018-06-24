import {IProject} from "./IProject";


export const isIProject = (isProjectObject: object | undefined): isProjectObject is IProject => {

    if(!isProjectObject) {
        return false;
    }

    console.log(`${JSON.stringify(isProjectObject)}`);
    console.log(`(<IProject>object).colonyAddress !== undefined: ${(<IProject>isProjectObject).colonyAddress !== undefined}`);
    console.log(`(<IProject>object).colonyId !== undefined: ${(<IProject>isProjectObject).colonyId !== undefined}`);
    console.log(`(<IProject>object).projectDescription !== undefined: ${(<IProject>isProjectObject).projectDescription !== undefined}`);
    console.log(`(<IProject>object).projectName !== undefined: ${(<IProject>isProjectObject).projectName !== undefined}`);


    return (<IProject>isProjectObject).colonyAddress !== undefined &&
        (<IProject>isProjectObject).colonyId !== undefined &&
        (<IProject>isProjectObject).projectDescription !== undefined &&
        (<IProject>isProjectObject).projectName !== undefined;
};
