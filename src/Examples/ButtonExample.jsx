import React from "react";
import Button from "../Components/Button";
import '../styles/buttonexample.css';

const ButtonExample = () => {
    return(
        <div className="but-example">
            <div>
                <h1>Button</h1>
            </div>
            <div>
                <h2>Button with multiple colors</h2>
                <div className="colorbuttondiv">
                <Button className="colorbutton" text={"hello im a button"} color={"Red"} size={"large"} />
                <Button text={"hello im a button"} color={"Blue"} size={"large"} />
                <Button text={"hello im a button"} color={"green"} size={"large"} />
            </div>
            

            </div>
            <div>
                <h2>Button with disabled field true </h2>
                <div className="colorbuttondiv">
                <Button  text={"Im Disabled"} color={"white"} size={"large"} isDisabled/>
            </div>
            

            </div>
            <div>
                <h2>Button with multiple sizes</h2>
                <div className="colorbuttondiv">
                <Button className="colorbutton" text={"small"} color={"Red"} size={"small"} />
                <Button text={"medium"} color={"Blue"} size={"medium"} />
                <Button text={"large Button"} color={"green"} size={"large"} />
            </div>
            

            </div>
        </div>
    )
}

export default ButtonExample;